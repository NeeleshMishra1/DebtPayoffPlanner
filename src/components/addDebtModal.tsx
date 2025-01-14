import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { vw, vh } from '../utils/dimensions';
import strings from '../utils/strings';
import CalenderModal from './calenderModal';
import Icon from '../assets';
import { colors } from '../themes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CategoryModal from './categoryModal';

const AddModal = ({ visible, onClose, onSave }) => {
  const [category, setCategory] = useState('');
  const [nick, setNick] = useState('');
  const [currentBalance, setCurrentBalance] = useState('');
  const [annual, setAnnual] = useState('');
  const [minimum, setMinimum] = useState('');
  const [nextPayment, setNextPayment] = useState('');
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);

  const openCategoryModal = () => setCategoryModalVisible(true);
  const closeCategoryModal = () => setCategoryModalVisible(false);

  const handleSave = async () => {
    if (!category || !currentBalance || !annual || !minimum || !nextPayment) {
      Alert.alert('Error', 'Please fill in all the fields before saving.');
      return;
    }

    const user = auth().currentUser;

    const debtData = {
      category,
      currentBalance,
      annual,
      nick,
      minimum,
      nextPayment,
      userId: user?.uid,
      timestamp: firestore.FieldValue.serverTimestamp(),
    };

    try {
      await firestore()
        .collection('debts')
        .add(debtData);
      onSave(debtData);
      onClose();
    } catch (error) {
      console.error('Error saving debt details:', error);
    }
  };

  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const closeCalendar = () => {
    setCalendarVisible(false);
  };

  const handleDateSelect = (date) => {
    setNextPayment(date);
    closeCalendar();
  };

  const handleCategoryModal = (option) => {
    setCategory(option);
    closeCategoryModal();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          style={styles.overlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.modalContainer}>
            <View style={styles.debtContainer}>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.modalTitle1}>{strings.X}</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>{strings.DebtDetails}</Text>
            </View>

            <TouchableOpacity style={styles.categoryContainer} onPress={openCategoryModal}>
              <Text style={styles.categoryText}>{strings.Category}</Text>
              <TextInput
                style={styles.textInput}
                value={category}
                onChangeText={handleCategoryModal}
                placeholderTextColor="#A9A9A9"
                editable={false}
                selectTextOnFocus={false}
              />
            </TouchableOpacity>

            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{strings.nick}</Text>
              <TextInput
                style={styles.textInput}
                value={nick}
                onChangeText={setNick}
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{strings.currentBalance}</Text>
              <TextInput
                style={styles.textInput}
                value={currentBalance}
                onChangeText={setCurrentBalance}
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{strings.annual}</Text>
              <TextInput
                style={styles.textInput}
                value={annual}
                onChangeText={setAnnual}
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{strings.minimum}</Text>
              <TextInput
                style={styles.textInput}
                value={minimum}
                onChangeText={setMinimum}
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <TouchableOpacity style={styles.categoryContainer} onPress={openCalendar}>
              <Text style={styles.categoryText}>{strings.nextPayement}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                <TextInput
                  style={styles.textInput}
                  value={nextPayment}
                  onChangeText={setNextPayment}
                  placeholderTextColor="#A9A9A9"
                  editable={false}
                  selectTextOnFocus={false}
                />
                <Image source={Icon.calneder} style={styles.calenderImage} />
              </View>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>{strings.Save}</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
          </KeyboardAvoidingView>
      </View>
      <CalenderModal visible={isCalendarVisible} onClose={closeCalendar} onDateSelect={handleDateSelect} />
      <CategoryModal
        visible={isCategoryModalVisible}
        onClose={closeCategoryModal}
        onSelect={handleCategoryModal}
      />
    </Modal>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "white",
  },
  modalContainer: {
    height: "100%",
    backgroundColor: '#fff',
    padding: vw(20),
    marginTop: vh(40),
  },
  modalTitle1: {
    fontSize: vw(18),
    fontWeight: '400',
    marginBottom: vh(20),
    paddingRight: vw(80),
  },
  modalTitle: {
    fontSize: vw(19),
    fontWeight: '600',
    marginBottom: vh(20),
    paddingRight: 60,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: vw(8),
    padding: vw(10),
    marginBottom: vh(15),
    fontSize: vw(16),
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: vh(20),
    justifyContent: "space-evenly",
    backgroundColor: "black",
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: '#bdbdbd',
    paddingVertical: vh(12),
    paddingHorizontal: vw(40),
    borderRadius: vw(8),
  },
  cancelButtonText: {
    color: '#333',
    fontSize: vw(18),
    fontWeight: "600"
  },
  saveButton: {
    backgroundColor: colors.black,
    paddingVertical: vh(10),
    paddingHorizontal: vw(50),
    borderRadius: vw(8),
    marginRight: 10,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: vw(18),
    fontWeight: "600"
  },
  debtContainer: {
    flexDirection: 'row',
    alignItems: "center",
    borderBottomWidth: 5,
    borderColor: colors.black,
  },
  categoryContainer: {
    paddingVertical: vh(15),
    borderBottomWidth: 1,
    borderColor: "#a4a5a6",
  },
  arrowImage: {
    width: vw(15),
    height: vh(15),
  },
  categoryText: {
    fontSize: vw(15),
    fontWeight: "500",
    color: "#757575"
  },
  category: {
    justifyContent: 'space-between',
    flexDirection: "row",
    borderColor: "#a4a5a6",
  },
  textInput: {
    fontSize: vh(18),
    color: '#333',
  },
  calenderImage: {
    width: vw(20),
    height: vh(20),
  },
  calenderImage1: {
    fontSize: 20,
    fontWeight: "900",
  }
});

export default AddModal;
