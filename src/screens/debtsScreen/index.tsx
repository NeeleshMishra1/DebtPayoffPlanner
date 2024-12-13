import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import strings from '../../utils/strings';
import Icon from '../../assets';
import { PieChart } from 'react-native-chart-kit';
import { data } from '../../api/tutorialjson';
import { chartConfig } from '../../api/function/allFunction';
import SearchModal from '../../components/SearchModal';
import AddModal from '../../components/addDebtModal';

const { width: screenWidth } = Dimensions.get('window');

const Debts = () => {
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [debts, setDebts] = useState([]);

  const openSearchModal = () => setSearchModalVisible(true);
  const closeSearchModal = () => setSearchModalVisible(false);

  const openAddModal = () => setAddModalVisible(true);
  const closeAddModal = () => setAddModalVisible(false);

  const handleSaveDebt = (debtData) => {
    setDebts([...debts, debtData]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.debtsText}>{strings.debts}</Text>
        <Text style={styles.manageText}>{strings.manageAll}</Text>
      </View>

      <ScrollView>
        <View style={styles.ring}>
          <View style={styles.ringData}>
            <Text style={styles.balanceText}>{strings.balanceBy}</Text>
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
            />
          </View>

          <View style={styles.addContainer}>
            <View style={styles.addCount}>
              <Text style={styles.adddebtsText}>{strings.debts} (3)</Text>
              <TouchableOpacity style={styles.addButton} onPress={openAddModal}>
                <Text style={styles.addText}>{strings.add}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
              <TouchableOpacity style={styles.search} onPress={openSearchModal}>
                <Image source={Icon.search} style={styles.searchImage} />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor="#A9A9A9"
                  style={styles.searchInput}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.sort}>
                <Text style={styles.sortText}>Sort by</Text>
                <View style={styles.dropDown}>
                  <Text style={styles.aprtText}>APR</Text>
                  <Image source={Icon.arrow_down} style={styles.arrowImage} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {debts.map((debt, index) => (
          <View key={index} style={styles.addData}>
            <Text style={styles.nameText}>{debt.nick}</Text>
            <Text style={styles.balanceText1}>Balance</Text>
            <Text style={styles.currentText1}> {debt.currentBalance}</Text>
            <View style={styles.aprContainer}>
              <Text style={styles.balanceText1}>Minimum</Text>
              <Text style={styles.balanceText1}>APR</Text>
            </View>

            <View style={styles.aprContainer}>
              <Text style={styles.minimumText1}> {debt.minimum}</Text>
              <Text style={styles.minimumText1}>{debt.annual}</Text>
            </View>
          </View>
        ))}


      </ScrollView>
      <SearchModal visible={isSearchModalVisible} onClose={closeSearchModal} />
      <AddModal visible={isAddModalVisible} onClose={closeAddModal} onSave={handleSaveDebt} />
    </SafeAreaView>
  );
};

export default Debts;
