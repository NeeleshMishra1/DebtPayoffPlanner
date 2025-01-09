import React, { useState } from "react";
import { SafeAreaView, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detail = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const handleDone = async () => {
        try {
          // Save the name to AsyncStorage
          await AsyncStorage.setItem('userName', name);
    
          // Navigate to the next screen
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'bottom', params: { screen: 'Home' } }],
            })
          );
        } catch (error) {
          console.error('Error saving name to AsyncStorage:', error);
        }
      };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Icon.left_arrow} style={styles.arrowImage} />
                </TouchableOpacity>
                <View style={styles.loginConatiner}>
                    <Image source={Icon.splace} style={styles.image} />
                    <Text style={styles.loginText}>{strings.login}</Text>

                </View>

                <View style={styles.enterText}>
                    <Text style={styles.what}>What do we call you</Text>
                </View>
                <View style={styles.name}>
                    <View style={styles.nameInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                            keyboardType="default"
                            maxLength={50}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.otpContainer} onPress={handleDone}>
                    <Text style={styles.otpText}>Done</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

export default Detail;
