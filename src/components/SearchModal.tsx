import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from '../assets';
import { vh, vw } from '../utils/dimensions';

const SearchModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.search}>
            <Image source={Icon.search} style={styles.searchImage} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#A9A9A9"
              style={styles.searchInput}
            />
          </TouchableOpacity>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Cancel</Text>
        </TouchableOpacity>
        </View>
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
    flexDirection:"row",
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebeded',
    borderRadius: vw(10),
    paddingVertical: vh(5),
    paddingHorizontal: vw(10),
    width:"70%",
    marginRight:10,
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
    fontWeight:"600",
    fontSize: vw(19),
  },
  cancleContainer:{
    flexDirection:'row'
  }
});

export default SearchModal;
