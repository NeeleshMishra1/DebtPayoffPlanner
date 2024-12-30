import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { vw } from '../utils/dimensions';

const DisplayOption = ({ label, isEnabled, onToggle }) => {
    return (
        <View style={styles.profilePic}>
            <Text style={styles.profileText}>{label}</Text>
            <Switch
                trackColor={{ false: '#dbdbdb', true: '#80d8f2' }}
                thumbColor={isEnabled ? '#4fc4e8' : '#f4f3f4'}
                ios_backgroundColor="#b0b0b0"
                onValueChange={onToggle}
                value={isEnabled}
                style={styles.switch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    profilePic: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderBottomColor: "#dbdbdb",
    },
    profileText: {
        fontSize: vw(17),
    },
    switch: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
});

export default DisplayOption;
