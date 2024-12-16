import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import Icon from '../../assets';
import strings from '../../utils/strings';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  bottom: undefined;
  login: undefined;
};

const Splace = () => {
  const navigation = useNavigation();

  const handleSplace = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'tutorial' }],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSplace();
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

