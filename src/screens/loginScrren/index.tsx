import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from '../../assets'
import { useNavigation } from '@react-navigation/native';
import strings from '../../utils/strings';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <View style={styles.logo}>
        <Image source={Icon.splace} style={styles.imageLogo} />
        <Text style={styles.planText}>{strings.planCelebrate}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.signText}>{strings.signUp}</Text>
        <Text style={styles.weText}>{strings.weSend}</Text>
        <View style={styles.textEmail}>
          <Text>{strings.email}</Text>
          <TextInput
            placeholderTextColor="#A5A5A5"
            style={styles.input}
          />
          <Text>{strings.password1}</Text>
          <TextInput
            placeholderTextColor="#A5A5A5"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("bottom")}>
          <Text style={styles.signUpText}>{strings.signUp}</Text>
        </TouchableOpacity>
        <View style={styles.byText}>
          <Text style={styles.by}>{strings.bySign} <Text style={styles.term}>{strings.termOf}</Text>  <Text style={styles.by}>{strings.and}</Text>  <Text style={styles.term}>{strings.privatePolicy}</Text> </Text>
        </View>
      </View>
      <View style={styles.already}>
        <Text style={styles.term2}>{strings.alreadySign}<Text style={styles.term1}>{strings.signIn}</Text></Text>
        <Text style={styles.term2}>{strings.Use}<Text style={styles.term1}>{strings.DPP1}</Text> <Text>{strings.instead}</Text></Text>
      </View>
    </View>
  )
}

export default Login
