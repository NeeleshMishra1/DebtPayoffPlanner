import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
// import auth from '@react-native-firebase/auth';

const PhoneSignIn = () => {
    const [confirm, setConfirm] = useState(null);
    console.log("confirm", confirm)

    async function signInWithPhoneNumber(phoneNumber) {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
                title="Phone Number Sign In"
                onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
            />
        </View>
    )
}

export default PhoneSignIn

const styles = StyleSheet.create({})