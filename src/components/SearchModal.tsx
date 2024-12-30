import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';
import Icon from '../assets';
import { vh, vw } from '../utils/dimensions';
import { useNavigation } from '@react-navigation/native';

const SearchModal = ({ visible, onClose, searchQuery, onSearchChange, debts }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.search}>
            <Image source={Icon.search} style={styles.searchImage} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#A9A9A9"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={onSearchChange}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>

          {debts.map((debt, index) => (
            <TouchableOpacity key={index} style={styles.addData} onPress={onClose}>
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
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: vw(20),
    marginTop: vh(60),
    backgroundColor: 'white',
  },
  searchContainer: {
    marginBottom: vh(20),
    flexDirection: 'row',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebeded',
    borderRadius: vw(10),
    paddingVertical: vh(5),
    paddingHorizontal: vw(10),
    width: '70%',
    marginRight: 10,
  },
  searchImage: {
    width: vw(30),
    height: vh(30),
  },
  searchInput: {
    flex: 1,
    fontSize: vw(18),
    marginLeft: vw(10),
    color: '#000',
  },
  closeButton: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(10),
  },
  closeButtonText: {
    color: '#6a6b6b',
    fontWeight: '600',
    fontSize: vw(19),
  },
  debtItem: {
    paddingVertical: vh(10),
    borderBottomWidth: 1,
    borderBottomColor: '#ebeded',
  },
  debtNick: {
    fontSize: vw(18),
    fontWeight: '600',
  },
  debtBalance: {
    fontSize: vw(16),
    color: '#6a6b6b',
  },
  addData: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 40,
    borderLeftWidth: 2,
    borderColor: "#f0a502",
    borderWidth: 1
  },
  nameText: {
    fontSize: vw(17),
    fontWeight: "600",
    paddingVertical: 5,
  },
  balanceText1: {
    fontWeight: "400",
    paddingTop: 5,
    color: "#616161",
  },
  currentText1: {
    fontSize: vw(24),
    fontWeight: "600",
  },
  minimumText1: {
    fontSize: vw(18),
    fontWeight: "500",
  },
  aprContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  legendContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    padding: 20,
    justifyContent: "center",
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
});

export default SearchModal;
