import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { vw, vh } from '../utils/dimensions';
import strings from '../utils/strings';
import { Calendar } from 'react-native-calendars';

const CalenderModal = ({ visible, onClose, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    onDateSelect(day.dateString); 
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Calendar
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: 'blue',
              },
            }}
            onDayPress={onDayPress}
            monthFormat={'yyyy MM'}
            style={styles.calendar}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',  
    alignItems: 'center',      
  },
  modalContainer: {
    width: vh(300),   
    backgroundColor: '#fff',
    borderRadius: 5, 
    padding: vw(20),
    justifyContent: 'space-between', 
  },
  modalTitle1: {
    fontSize: vw(18),
    fontWeight: '400',
    marginBottom: vh(10),
    paddingRight: vw(80),
  },
  modalTitle: {
    fontSize: vw(19),
    fontWeight: '600',
    marginBottom: vh(10),
    paddingRight: 60,
  },
  debtContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
  calendar: {
    marginTop: vh(20),
    borderRadius: 5,
    backgroundColor: '#fff',
  }
});

export default CalenderModal;
