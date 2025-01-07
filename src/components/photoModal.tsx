import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const PhotoModal = ({ visible, onClose, onSelectPhoto }) => {
  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      onSelectPhoto(image.path); // Pass the image URI back
      onClose(); // Close the modal
    });
  };

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      onSelectPhoto(image.path); // Pass the image URI back
      onClose(); // Close the modal
    });
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.uploadContainer}>
            <Text style={styles.modalTitle}>Upload Photo</Text>
            <Text style={styles.modalTitle1}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={styles.modalButton} onPress={takePhoto}>
            <Text style={styles.modalButtonText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={chooseFromLibrary}>
            <Text style={styles.modalButtonText}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PhotoModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  modalButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
  uploadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle1: {
    fontSize: 14,
  },
});
