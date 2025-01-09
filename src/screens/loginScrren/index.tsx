import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";
import auth from "@react-native-firebase/auth";
import { onGoogleButtonPress } from "../../config/fireBase";

const Login = ({ navigation }: any) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleGetOtp = async () => {
        console.log('press1');
        if (phoneNumber.length === 10) {
            console.log('press2');

            try {
                const confirmation = await auth().signInWithPhoneNumber(`+91 ${phoneNumber}`);
                console.log('pn-->', phoneNumber);
                console.log("confirmation-->", confirmation)
                navigation.navigate("otp", { confirmation });
            } catch (error) {
                Alert.alert("Error", "Failed to send OTP. Please try again.");
                console.error(error);
            }
        } else {
            Alert.alert("Invalid Phone Number", "Please enter a 10-digit phone number.");
        }
    };

    async function signInWithGoogle() {
        console.log('runn1');
        try {
            const user = await onGoogleButtonPress();
            console.log("User signed in with Google:", user);
            navigation.navigate("detail", { user });

        } catch (error) {
            console.error("Google Sign-In Error:", error);
            Alert.alert("Error", "Google Sign-In failed. Please try again.");
        }
    }

    const onChangePhn= (text:string) => setPhoneNumber(text)
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
                            maxLength={14}
                            value={phoneNumber}
                            onChangeText={onChangePhn}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.otpContainer} onPress={handleGetOtp}>
                    <Text style={styles.otpText}>Get OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.otpContainer1} onPress={signInWithGoogle}>
                    <Image source={Icon.google} style={styles.googleImage} resizeMode="contain"/>
                    <Text style={styles.otpText1}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;
