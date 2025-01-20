import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import Icon from '../../assets';
import strings from '../../utils/strings';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  bottom: undefined;
  login: undefined;
};

const Splace = () => {
  const navigation = useNavigation();

  const checkAppState = async () => {
    try {
      const hasSeenTutorial = await AsyncStorage.getItem('hasSeenTutorial');
      const isLoggedIn = await AsyncStorage.getItem('userLoggedIn');
  
      if (!hasSeenTutorial) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'tutorial' }], 
        });
      } else if (isLoggedIn === 'true') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'bottom' }], 
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      }
    } catch (error) {
      console.error('Error checking app state:', error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      checkAppState();
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container1}>
      <Image style={styles.splaceImage} source={Icon.splace} />
      <Text style={styles.splaceText}>{strings.splace}</Text>
    </View>
  );
};

export default Splace;

