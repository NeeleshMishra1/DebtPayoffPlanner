import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../assets';
import styles from './style';
import strings from '../../utils/strings';
import currencies from '../../api/currencyjson';
import PhotoModal from '../../components/photoModal';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { vh, vw } from '../../utils/dimensions';

const Account = ({ route }: any) => {
  const navigation = useNavigation();
  const name = route?.params?.name || "Neelesh";
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('    USD $');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://lh3.googleusercontent.com/a/ACg8ocJNBuMQBS4T_K_Ivc2SvLGGHA0M4GHcdEYRrysgiwjnoEf1ww=s96-c"
  );

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userDoc = await firestore()
            .collection('users')
            .doc(user.uid)
            .get();
          
          if (userDoc.exists) {
            const userData = userDoc.data();
            setProfileImage(userData?.profileImage || profileImage);
            setSelectedCurrency(userData?.selectedCurrency || 'USD $');
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleCurrencySelect = (currencyCode: string) => {
    const currency = currencies[currencyCode]; 
    setSelectedCurrency(currency.symbol); 
    setCurrencyModalVisible(false);
  };

  const handleSelectPhoto = (imageUri: string) => {
    setProfileImage(imageUri); 
  };

  const saveProfileToFirestore = async () => {
    try {
      const user = auth().currentUser;
      if (user) {
        await firestore().collection('users').doc(user.uid).set({
          name: user.displayName || name,
          profileImage: profileImage,
          selectedCurrency: selectedCurrency,
        }, { merge: true }); 

        Alert.alert("Profile updated", "Your profile details have been saved.");
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
      Alert.alert("Error", "Failed to update your profile.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header1}
        onPress={() => navigation.goBack()}
      >
        <Image source={Icon.left_arrow} style={styles.leftarrow} />
        <Text style={styles.account}>{strings.my_account}</Text>
      </TouchableOpacity>
      <View style={styles.profilePic2}>
        <TouchableOpacity
          style={{  width: vw(100), height: vh(100), borderRadius:100 }}
          onPress={() => setIsModalVisible(true)}
        >
          <Image source={{ uri: profileImage }} style={styles.profileImag1} />
        </TouchableOpacity>
        <Text style={styles.profileText1}>{name}</Text>
      </View>
      <View style={styles.personal}>
        <Text style={styles.personalText}>{strings.personal_info}</Text>
        <TouchableOpacity style={styles.profile}>
          <Text style={styles.profileText}>{strings.profile}</Text>
          <View style={styles.profilePic1}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profilePic}>
          <Text style={styles.profileText}>{strings.username}</Text>
          <View style={styles.profilePic1}>
            <Text style={styles.profileText}>{name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profilePic}
          onPress={() => setCurrencyModalVisible(true)}
        >
          <Text style={styles.profileText}>{strings.Currency}</Text>
          <View style={{ padding: 5 }}>
            <Text>{selectedCurrency}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={saveProfileToFirestore}>
          <Text style={styles.updateText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      <PhotoModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectPhoto={handleSelectPhoto}
      />
      <Modal
        visible={currencyModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <FlatList
      data={Object.keys(currencies)} 
      keyExtractor={(key) => key}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        const currency = currencies[item]; 
        return (
          <Pressable
            style={styles.currencyOption}
            onPress={() => handleCurrencySelect(item)} 
          >
            <Text style={styles.currencyText}>
              {currency.symbol} 
            </Text>
          </Pressable>
        );
      }}
    />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Account;
