import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { vh, vw } from '../utils/dimensions';

const CategoryModal = ({ visible, onSelect }) => {
  const options = ["Credit card", "Auto loan", "personal Loan", "Student loan", 'Medical Loan', 'Taxes', "Others"];
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
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    position: "absolute",
    top: vh(180),
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 1,
  },
  option: {
    padding: 15,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: vw(17),
    color: '#333',
    fontWeight: "400"
  },
});

export default CategoryModal;



