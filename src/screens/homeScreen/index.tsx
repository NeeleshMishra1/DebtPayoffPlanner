import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import styles from './style';
import Icon from '../../assets';
import strings from '../../utils/strings';
import { data, LimeChart } from '../../api/tutorialjson';
import { chartConfig2 } from '../../api/function/allFunction';
import { vh } from '../../utils/dimensions';
import PieChart from 'react-native-pie-chart';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

type NavigationProp = {
  navigate: (screen: string) => void;
};

const Home = ({ route }: any) => {
  const navigation = useNavigation<NavigationProp>();
  const [debts, setDebts] = useState([]);
  const [profileImageUrl, setProfileImageUrl] = useState("https://lh3.googleusercontent.com/a/ACg8ocJNBuMQBS4T_K_Ivc2SvLGGHA0M4GHcdEYRrysgiwjnoEf1ww=s96-c");

  const name = route?.params?.name || "Neelesh";

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const unsubscribe = firestore()
        .collection('debts')
        .where('userId', '==', user.uid)
        .onSnapshot(
          (snapshot) => {
            const fetchedDebts = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setDebts(fetchedDebts);
          },
          (error) => {
            console.error('Error fetching debts:', error);
          }
        );

      const userRef = firestore().collection('users').doc(user.uid);
      userRef.get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          setProfileImageUrl(userData?.profileImage || profileImageUrl);
        }
      });
      return () => unsubscribe();
    }
  }, []);

  const widthAndHeight = vh(120);
  const widthAndHeight2 = vh(100);
  const totalCurrentBalance = debts.reduce(
    (total, debt) => total + parseFloat(debt.currentBalance || '0'),
    0
  );

  const firstChartSeries = totalCurrentBalance > 0 ? [totalCurrentBalance] : [1];
  const firstChartSliceColor = totalCurrentBalance > 0 ? ['#99f8ff'] : ['#d3d3d3'];

  const generateRandomLightColor = () => {
    const r = Math.floor(200 + Math.random() * 56);
    const g = Math.floor(200 + Math.random() * 56);
    const b = Math.floor(200 + Math.random() * 56);
    return `rgb(${r}, ${g}, ${b})`;
  };
  const generateRandomLightColor1 = () => {
    const r = Math.floor(140 + Math.random() * 56);
    const g = Math.floor(150 + Math.random() * 56);
    const b = Math.floor(170 + Math.random() * 56);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.maincontainer}>
          <View style={styles.profile}>
            <View>
              <Text style={styles.name}>{`Hi, ${name}`}</Text>
              <Text style={styles.detailText}>{strings.planTrack}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <Image
                source={{ uri: profileImageUrl }} // Fetching profile image from Firestore
                style={styles.imageLogo}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.primary}>
            <Text style={styles.primaryText}>{strings.primary}</Text>
          </TouchableOpacity>

          <View style={styles.countDown}>
            <Text style={styles.debtText}>{strings.deatFree}</Text>
            <Text style={styles.mayText}>{strings.may}</Text>

            <View style={styles.year}>
              <View style={styles.yearcontainer}>
                <Text style={styles.yearText}>0</Text>
                <Text style={styles.yeartext1}>{strings.year}</Text>
              </View>

              <View style={styles.yearcontainer}>
                <Text style={styles.yearText}>5</Text>
                <Text style={styles.yeartext1}>{strings.months}</Text>
              </View>
            </View>
            <Image source={Icon.sun} style={styles.sunImage} />
          </View>

          <View style={styles.payOff}>
            <Text>Personal Finance Tracker</Text>
            <Text style={styles.payOffText}>{strings.payOff}</Text>

            <View style={styles.circleGraph}>
              <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: "center", alignItems: "center" }}>
                  <View style={{ position: 'absolute', zIndex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>0.0%</Text>
                    <Text>paid</Text>
                  </View>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={firstChartSeries}
                    sliceColor={firstChartSliceColor}
                    coverRadius={0.75}
                    coverFill={'#f5feff'}
                  />
                </View>
                <View>
                  <View style={styles.legendContainer}>
                    <View style={styles.legendItem}>
                      <Text style={styles.legendText}>Principal paid</Text>
                      <Text style={styles.legendText1}>0.00</Text>
                    </View>
                    <View style={styles.legendItem}>
                      <Text style={styles.legendText}>Balance</Text>
                      <Text style={styles.legendText2}>
                        {totalCurrentBalance > 0 ? totalCurrentBalance : 'N/A'}.00
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.categoriesSection}>
              <Text style={styles.categoriesTitle}>CATEGORIES</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={debts}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item }) => {
                  const currentBalance = parseFloat(item.currentBalance || '0');
                  const minimum = parseFloat(item.minimum || '0');
                  const debtSeries = currentBalance + minimum > 0 ? [currentBalance, minimum] : [1];
                  const debtSliceColor = currentBalance + minimum > 0
                    ? [generateRandomLightColor1(), generateRandomLightColor()]
                    : ['#d3d3d3'];
                  return (
                    <View style={styles.pieContainer2}>
                      <View style={[styles.pie2, { backgroundColor: generateRandomLightColor() }]}>
                        <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 5 }}>{item.category}</Text>
                        <Text>Paid off in 1 mo</Text>
                        <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: "center", alignItems: "center" }}>
                          <View style={{ position: 'absolute', zIndex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: '400' }}>0.0%</Text>
                          </View>
                          <PieChart
                            widthAndHeight={widthAndHeight2}
                            series={debtSeries}
                            sliceColor={debtSliceColor}
                            coverRadius={0.75}
                          />
                        </View>
                        <View style={styles.legendContainer1}>
                          <View style={styles.legendItem}>
                            <Text style={styles.legendText}>Balance</Text>
                            <Text style={styles.balantext}>{item.currentBalance}.00</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>



          <View style={styles.proMember}>
            <View style={styles.proMembership}>
              <Image source={Icon.crown} style={styles.crownImage} />
              <Text style={styles.proMembershipText}>{strings.proMemberShip}</Text>
            </View>

            <View style={styles.multi}>
              <Image source={Icon.check} style={styles.checkImage} />
              <Text style={styles.multiText}>{strings.multiDevice}</Text>
              <Image source={Icon.check} style={styles.checkImage1} />
              <Text style={styles.multiText}>{strings.adFree}</Text>
            </View>

            <View style={styles.multi}>
              <Image source={Icon.check} style={styles.checkImage} />
              <Text style={styles.multiText}>{strings.biWeekly}</Text>
              <Image source={Icon.check} style={styles.checkImage1} />
              <Text style={styles.multiText}>{strings.unlimited}</Text>
            </View>

            <View style={styles.multi}>
              <Image source={Icon.check} style={styles.checkImage} />
              <Text style={styles.multiText}>{strings.manyMore}</Text>
            </View>

            <TouchableOpacity style={styles.learnButton}>
              <Text style={styles.learnText}>{strings.learnMore}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.payoffTime}>
            <Text style={styles.payoffTimeText}>Payoff timeline</Text>
            <Text style={styles.balanceText}>Balance</Text>
            <LineChart
              data={LimeChart}
              width={320}
              height={250}
              chartConfig={chartConfig2}
            />
          </View>

          <View style={styles.dailyoffTime}>
            <Text style={styles.payoffTimeText}>Daily inspiration</Text>
            <Image source={Icon.inspiration} style={styles.inspirationImage} />
          </View>

          <View style={styles.dailyoffTime}>
            <Text style={styles.payoffTimeText}>Articles</Text>
            <Image source={Icon.mountain} style={styles.mountainImage} />
            <Text style={styles.methodText}>Debt Avalanche Method</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
