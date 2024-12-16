import React, { useState } from 'react';
import { View, Text, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const SortModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalData = [
    { key: 'APR', value: '5%' },
    { key: 'As Added', value: '10,000 USD' },
    { key: 'Balance', value: '8,000 USD' },
    { key: 'Custom 1', value: 'Custom Value 1' },
    { key: 'Custom 2', value: 'Custom Value 2' },
    { key: 'Custom 3', value: 'Custom Value 3' },
    { key: 'Name', value: 'John Doe' },
    { key: 'Payoff Date', value: '2025-12-31' },
    { key: 'Progress', value: '75%' },
  ];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Custom Modal</Text>

            <FlatList
              data={modalData}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text style={styles.itemKey}>{item.key}:</Text>
                  <Text style={styles.itemValue}>{item.value}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key}
            />

            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemKey: {
    fontWeight: 'bold',
  },
  itemValue: {
    color: 'gray',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF5733',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default SortModal;
