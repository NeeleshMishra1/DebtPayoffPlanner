import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";
import { OtpInput } from "react-native-otp-entry";
import auth from "@react-native-firebase/auth";

const Otp = ({ route, navigation }) => {
    const { confirmation } = route.params;
    const [otp, setOtp] = useState("");

    const handleVerifyOtp = async () => {
        try {
            await confirmation.confirm(otp);
            Alert.alert("Success", "OTP Verified Successfully!", [
                { text: "OK", onPress: () => navigation.navigate("detail") },
            ]);
        } catch (error) {
            Alert.alert("Invalid OTP", "Please enter the correct OTP.");
            console.error(error);
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
                    <Text style={styles.loginText}>Login</Text>
                </View>

                <View style={styles.enterText}>
                    <Text style={styles.enterText1}>An OTP has been sent to your number</Text>
                </View>
                <View style={styles.phoneNumber}>
                    <OtpInput
                        numberOfDigits={6}
                        focusColor="#2f71a3"
                        placeholder="000000"
                        value={otp}
                        type="numeric"
                        autoFocus
                        onTextChange={(text) => setOtp(text)}
                        theme={{
                            pinCodeTextStyle: styles.pinCodeText,
                        }}
                    />
                </View>

                <TouchableOpacity style={styles.otpContainer} onPress={handleVerifyOtp}>
                    <Text style={styles.otpText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Otp;
