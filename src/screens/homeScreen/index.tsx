import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import styles from './style';
import Icon from '../../assets';
import strings from '../../utils/strings';
import { data, LimeChart } from '../../api/tutorialjson';
import { chartConfig, chartConfig2 } from '../../api/function/allFunction';
import { vh } from '../../utils/dimensions';
import PieChart from 'react-native-pie-chart';

type NavigationProp = {
  navigate: (screen: string) => void;
};

const Home = ({ route }: any) => {
  const navigation = useNavigation<NavigationProp>();

  const name = route?.params?.name || "Neelesh";

  const debts = [
    { nick: 'Principle Paid', currentBalance: '5000', minimum: '200', annual: '5%' },
    { nick: 'Balance', currentBalance: '1000', minimum: '150', annual: '3%' },
  ];

  const widthAndHeight = vh(150);
  const series = debts.map((debt) => parseFloat(debt.currentBalance));
  const sliceColor = debts.map((_, index) => {
    const colors = ['#387478', '#E2F1E7'];
    return colors[index % colors.length];
  });


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
              <Image source={Icon.profile} style={styles.imageLogo} />
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
              <View style={{ flexDirection: "row", paddingVertical: 10, }}>
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={series.length > 0 ? series : [1]}
                  sliceColor={series.length > 0 ? sliceColor : ['#d3d3d3']}
                  coverRadius={0.75}
                  coverFill={'#FFF'}
                />
                <View style={styles.legendContainer}>
                  {debts.map((debt, index) => (
                    <View key={index} style={styles.legendItem}>
                      <View
                        style={[
                          styles.legendColor,
                          { backgroundColor: sliceColor[index] || '#90eafc' },
                        ]}
                      />
                      <View>
                        <Text style={styles.legendText}>{debt.nick}</Text>
                        <Text style={styles.legendText2}>{debt.currentBalance}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
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
