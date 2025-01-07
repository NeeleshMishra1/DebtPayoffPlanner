import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../assets';
import styles from './style';
import strings from '../../utils/strings';
import currencies from '../../api/currencyjson';
import PhotoModal from '../../components/photoModal';

const Account = ({ route }: any) => {
  const navigation = useNavigation();
  const name = route?.params?.name || "Neelesh";
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('    USD $');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://lh3.googleusercontent.com/a/ACg8ocJNBuMQBS4T_K_Ivc2SvLGGHA0M4GHcdEYRrysgiwjnoEf1ww=s96-c"
  );

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setCurrencyModalVisible(false);
  };

  const handleSelectPhoto = (imageUri: string) => {
    setProfileImage(imageUri); 
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
          style={{ backgroundColor: "green", width: 100, height: 100, borderRadius:100 }}
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
        <TouchableOpacity style={styles.button}>
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
              data={currencies}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.currencyOption}
                  onPress={() => handleCurrencySelect(item)}
                >
                  <Text style={styles.currencyText}>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Account;
