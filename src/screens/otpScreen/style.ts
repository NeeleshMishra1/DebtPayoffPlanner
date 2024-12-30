import { StyleSheet } from "react-native";
import { vw, vh } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },
    enterText: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    enterText1: {
        fontSize: vw(15),
        fontWeight: "700",
        color: "black",
    },
    phoneNumber: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    textInput: {
        fontSize: vw(17),
        margin: 5,
        paddingLeft: 10,
        paddingBottom: vh(5),
    },
    phoneInputContainer: {
        flexDirection: "row",
        width: "70%",
    },
    container: {
        flex: 1,
        padding: 20,
    },
    arrowImage: {
        width: vw(15),
        height: vh(15),
    },
    loginConatiner: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: vw(150),
        height: vh(150),
    },
    loginText: {
        fontSize: vw(25),
        fontWeight: "700",
        fontFamily: 'FlameRegular',
        color: "black",
        margin: 20
    },
    otpContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: vh(10),
        backgroundColor: "black",
        padding: 15,
        borderRadius: 50,
        borderWidth: 1,
        marginTop: vh(20),
    },
    otpText: {
        color: "white",
        fontSize: vw(17),
        fontWeight: "700"
    },
    otpContainer1: {
        marginBottom: 10,
        paddingHorizontal: 50
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ccc',
        textAlign: 'center',
        fontSize: 18,
    },
    pinCodeText: {
        fontSize: vh(20),
    },


});

export default styles;