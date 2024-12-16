import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";
import strings from "../../utils/strings";

const Otp = ({ route, navigation }: any) => {
    const { phoneNumber } = route.params;
    const [otp, setOtp] = useState("");
    const fixedOtp = "123456";
    const [timer, setTimer] = useState(0);

    const handleVerifyOtp = () => {
        if (otp === fixedOtp) {
            Alert.alert("Success", "OTP Verified Successfully!", [
                { text: "OK", onPress: () => navigation.navigate("detail") }
            ]);
        } else {
            Alert.alert("Invalid OTP", "Please enter the correct OTP.");
        }
    };

    const handleResendOtp = () => {
        setTimer(30);
    };

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

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
                    <Text style={styles.enterText1}>
                        {`${strings.an_otp} ${phoneNumber}`}
                    </Text>
                </View>
                <View style={styles.phoneNumber}>
                    <View style={styles.phoneInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="One time password"
                            keyboardType="phone-pad"
                            maxLength={6}
                            value={otp}
                            onChangeText={setOtp}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.otpContainer} onPress={handleVerifyOtp}>
                    <Text style={styles.otpText}>Get Otp</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

export default Otp;
