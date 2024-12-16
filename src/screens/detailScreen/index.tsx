import React, { useState } from "react";
import { SafeAreaView, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";

const Detail = ({ navigation }: any) => {
    const [name, setName] = useState('');

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
                    <Text>What do we call you</Text>
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
                    style={styles.otpContainer}
                    onPress={() => navigation.navigate("bottom", { screen: "Home", params: { name } })}>
                    <Text style={styles.otpText}>Done</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

export default Detail;
