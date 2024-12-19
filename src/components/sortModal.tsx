import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { vw } from '../utils/dimensions';

const SortModal = ({ visible, onSelect }) => {
  const options = ['APR','As Added','Balance',"Custom 1","Custom 2","Custom 3","Name","Payoff Date","Progress"]; 
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => onSelect(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding:10,
    position:"absolute",
    right:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  option: {
    padding: 15,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize:vw(17),
    color: '#333',
    fontWeight:"400"
  },
});

export default SortModal;
