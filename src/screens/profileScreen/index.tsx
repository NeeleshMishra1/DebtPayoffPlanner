import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import Icon from '../../assets';
import { CommonActions, useNavigation } from '@react-navigation/native';
import strings from '../../utils/strings';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ route }: any) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState(
    'https://lh3.googleusercontent.com/a/ACg8ocJNBuMQBS4T_K_Ivc2SvLGGHA0M4GHcdEYRrysgiwjnoEf1ww=s96-c'
  );
  const [name, setName] = useState('Guest');

  const accountData = [
    { id: 1, title: 'My account', icon: Icon.profile },
    { id: 2, title: 'My membership', icon: Icon.king },
    { id: 3, title: 'Workspaces', icon: Icon.briefcase },
    { id: 4, title: 'Tutorial video', icon: Icon.video },
    { id: 5, title: 'App help', icon: Icon.question },
    { id: 6, title: 'Sign out', icon: Icon.logout },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        if (storedName) {
          setName(storedName);
        }

        const user = auth().currentUser;
        if (user) {
          const userDoc = await firestore()
            .collection('users')
            .doc(user.uid)
            .get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setProfileImage(userData?.profileImage || profileImage);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity style={styles.header1} onPress={() => navigation.goBack()}>
        <Image source={Icon.left_arrow} style={styles.leftarrow} />
      </TouchableOpacity>
      <View style={styles.profileData}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.profileText}>
          <Text style={styles.emailText}>{name}</Text>
          <Text style={styles.freeText}>{strings.FreeMember}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.details}>
          {accountData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.detailsAccount}
              onPress={async () => {
                switch (item.id) {
                  case 1:
                    navigation.navigate('account');
                    break;
                  case 6:
                    try {
                      await auth().signOut();
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [{ name: 'login' }],
                        })
                      );
                    } catch (error) {
                      console.error('Error signing out:', error);
                    }
                    break;
                }
              }}
            >
              <Image source={item.icon} style={styles.profileImage2} resizeMode="contain" />
              <Text style={styles.myAccountText}>{item.title}</Text>
              <Image source={Icon.right_arrow} style={styles.rightarrow} />
            </TouchableOpacity>
          ))}
          <View style={styles.term}>
            <Text style={styles.serviceText}>{strings.termPolicy}</Text>
            <Text style={styles.versionText}>{strings.versinon}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
