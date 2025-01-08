
import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Dimensions, ScrollView, } from 'react-native';
import styles from './style';
import strings from '../../utils/strings';
import Icon from '../../assets';

type Debt = {
  nick: string;
  currentBalance: string;
  minimum: string;
  annual: string;
};

const Strategy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.debtsText}>Strategy</Text>
        <Text style={styles.manageText}>Optimize your payoff plan</Text>
      </View>
      <View style={styles.recurring}>
        <ScrollView>
          <Text style={styles.fundingText}>Recurring funding</Text>
          <Text style={styles.amountText1}>Amount to use for making payment each cycle</Text>
          <Text style={styles.frequencyText}>FREQUENCY</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>Once per month on the 1st</Text>
            <Image source={Icon.right_arrow} style={styles.rightarrow} />
          </View>
          <Text style={styles.frequencyText}>AMOUNT</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>Minimum</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.amountText}>ok</Text>
              <Image source={Icon.question} style={styles.rightarrow} />
            </View>
          </View>
          <View style={styles.amountContainer1}>
            <Text style={styles.amountText}>Extra</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.amountText}>0.00</Text>
            </View>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>Total</Text>
            <Text style={styles.amountText}></Text>
          </View>
          <View style={styles.oneTime}>
            <Text style={styles.fundingText}>One- time fundings</Text>
            <Text style={styles.amountText1}>Bonus amounts for making payments</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>0 upcoming</Text>
              <Image source={Icon.right_arrow} style={styles.rightarrow} />
            </View>
          </View>
          <View style={styles.oneTime}>
            <Text style={styles.fundingText}>Extra payment priority</Text>
            <Text style={styles.amountText1}>Which debts get extra payments first</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>Debt Avalanche</Text>
              <Image source={Icon.right_arrow} style={styles.rightarrow} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Strategy;
