import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Dimensions, ScrollView, Image } from 'react-native';
import styles from './style';
import strings from '../../utils/strings';
import Icon from '../../assets';
import PieChart from 'react-native-pie-chart';
import SearchModal from '../../components/SearchModal';
import AddModal from '../../components/addDebtModal';
import SortModal from '../../components/sortModal';
import { vh } from '../../utils/dimensions';

type Debt = {
  nick: string;
  currentBalance: string;
  minimum: string;
  annual: string;
};

const Debts = () => {
  const [isSearchModalVisible, setSearchModalVisible] = useState<boolean>(false);
  const [isAddModalVisible, setAddModalVisible] = useState<boolean>(false);
  const [isSortModalVisible, setSortModalVisible] = useState<boolean>(false);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('APR');
  const [debts, setDebts] = useState<Debt[]>([]);

  const openSearchModal = () => setSearchModalVisible(true);
  const closeSearchModal = () => setSearchModalVisible(false);

  const openAddModal = () => setAddModalVisible(true);
  const closeAddModal = () => setAddModalVisible(false);

  const openSortModal = () => setSortModalVisible(true);
  const closeSortModal = () => setSortModalVisible(false);

  const handleSortSelect = (option: string) => {
    setSelectedSortOption(option);
    closeSortModal();
  };

  const handleSaveDebt = (debtData: Debt) => {
    setDebts([...debts, debtData]);
    closeAddModal();
  };

  const calculateTotalCurrentBalance = () => {
    return debts.reduce((total, debt) => total + parseFloat(debt.currentBalance || '0'), 0).toFixed(2);
  };

  const widthAndHeight = vh(120);
  const series = debts.map((debt) => parseFloat(debt.currentBalance));
  const sliceColor = debts.map((_, index) => {
    const colors = ['#6b042a', '#194f30', '#2b1a63', '#47082f', '#629584', '#E2F1E7'];
    return colors[index % colors.length];
  });

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
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ position: 'absolute', zIndex: 1 }}>
                  <Text style={{ fontSize: 12, fontWeight: '600' }}>${calculateTotalCurrentBalance()}</Text>
                </View>
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={series.length > 0 ? series : [1]}
                  sliceColor={series.length > 0 ? sliceColor : ['#d3d3d3']}
                  coverRadius={0.65}
                  coverFill={'#FFF'}
                />
              </View>
              <View style={styles.legendContainer}>
                {debts.map((debt, index) => (
                  <View key={index} style={styles.legendItem}>
                    <View
                      style={[
                        styles.legendColor,
                        { backgroundColor: sliceColor[index] || '#d3d3d3' },
                      ]}
                    />
                    <Text style={styles.legendText}>{debt.nick}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.addContainer}>
            <View style={styles.addCount}>
              <Text style={styles.adddebtsText}>{`${strings.debts} (${debts.length})`}</Text>
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

              <TouchableOpacity style={styles.sort} onPress={openSortModal}>
                <Text style={styles.sortText}>Sort by</Text>
                <View style={styles.dropDown}>
                  <Text style={styles.aprtText}>{selectedSortOption}</Text>
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
            <Text style={styles.currentText1}>{debt.currentBalance}</Text>
            <View style={styles.aprContainer}>
              <Text style={styles.balanceText1}>Minimum</Text>
              <Text style={styles.balanceText1}>APR</Text>
            </View>
            <View style={styles.aprContainer}>
              <Text style={styles.minimumText1}>{debt.minimum}</Text>
              <Text style={styles.minimumText1}>{debt.annual}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <SearchModal visible={isSearchModalVisible} onClose={closeSearchModal} />
      <AddModal visible={isAddModalVisible} onClose={closeAddModal} onSave={handleSaveDebt} />
      <SortModal
        visible={isSortModalVisible}
        onClose={closeSortModal}
        onSelect={handleSortSelect}
      />
    </SafeAreaView>
  );
};

export default Debts;
