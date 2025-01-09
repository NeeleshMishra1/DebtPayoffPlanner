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

  const checkTutorialStatus = async () => {
    try {
      const hasSeenTutorial = await AsyncStorage.getItem('hasSeenTutorial');
      if (hasSeenTutorial) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'tutorial' }],
        });
      }
    } catch (error) {
      console.error('Error checking tutorial status:', error);
    }
  };
 

  useEffect(() => {
    const timer = setTimeout(() => {
      checkTutorialStatus();
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

