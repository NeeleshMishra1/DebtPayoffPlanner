import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from '../../assets'
import { useNavigation } from '@react-navigation/native'
import strings from '../../utils/strings'
import { LineChart, PieChart } from 'react-native-chart-kit'
import { data } from '../../api/tutorialjson'
import { chartConfig, chartConfig2 } from '../../api/function/allFunction';
import { LimeChart } from '../../api/tutorialjson'
import Articaldata from '../../api/articleData'

const { width: screenWidth } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.dailyoffTime}>
          <Text style={styles.payoffTimeText}>{item.title}</Text>
          <Image source={item.image} style={styles.mountainImage} />
          <Text style={styles.methodText}>{item.description}</Text>
        </View>
      );

      
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.maincontainer}>
                    <View style={styles.profile}>
                        <View>
                            <Text style={styles.name}>{strings.hi_neelesh}</Text>
                            <Text style={styles.detailText}>{strings.planTrack}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
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
                        <Image source={Icon.logo} style={styles.logo} />
                        <Text style={styles.payOffText}>{strings.payOff}</Text>

                        <View style={styles.circleGraph}>
                            <View style={styles.circle}>
                                <PieChart
                                    data={data}
                                    width={250}
                                    height={120}
                                    chartConfig={chartConfig}
                                    accessor={"population"}
                                    backgroundColor={"transparent"}
                                />
                            </View>

                            {/* <View style={styles.circleData}>
                                <Text style={styles.paidText}>{strings.principle}</Text>
                                <Text style={styles.paidTextDetail}>$0.00</Text>

                                <Text style={styles.paidText}>{strings.balance}</Text>
                                <Text style={styles.paidTextDetail2}>$10,000.00</Text>
                            </View> */}
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
                    <Text style={styles.methodText}>Debt Avalance Method</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
