import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";


const Login = ({ navigation }: any) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleGetOtp = () => {
        if (phoneNumber.length === 10) {
            navigation.navigate("otp", { phoneNumber });
        } else {
            Alert.alert("Invalid Phone Number", "Please enter a 10-digit phone number.");
        }
    };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={Icon.splace} style={styles.image} />
                    <Text style={styles.loginText}>Login</Text>
                    <Text style={styles.enterText}>Enter your mobile number to proceed</Text>
                </View>
                <View style={styles.phoneNumber}>
                    <View style={styles.phoneInputContainer}>
                        <Text style={styles.countryCode}>+91</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter 10-digit mobile number"
                            keyboardType="phone-pad"
                            maxLength={10}
                            value={phoneNumber}
                            onChangeText={text => setPhoneNumber(text)}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.otpContainer} onPress={handleGetOtp}>
                    <Text style={styles.otpText}>Get Otp</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    );
};

export default Login;
