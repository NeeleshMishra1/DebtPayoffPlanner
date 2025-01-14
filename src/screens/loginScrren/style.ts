import { StyleSheet } from "react-native";
import { vw, vh } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: vh(20),
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: vh(50),
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
        margin: vh(20)
    },
    enterText: {
        fontSize: vw(15),
        fontWeight: "500"
    },
    phoneNumber: {
        justifyContent: "center",
        alignItems: "center",
        margin: vh(10),
        borderRadius: vh(50),
        borderWidth: 1,
        marginTop: vh(20),

    },
    phoneInputContainer: {
        flexDirection: "row",
        width: "85%",
        paddingVertical: 5,
    alignItems:"center"
    },
    countryCode: {
        padding: vh(10),
        paddingLeft: 0,
        fontSize: vw(15),
        color: "#512414",
        lineHeight:24,
        fontWeight: "600"
    },
    textInput: {
        fontSize: vw(15),
        borderLeftWidth: 1,
        margin: 5,
        paddingLeft: vh(10),
    },
    otpContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: vh(10),
        backgroundColor: "black",
        padding: 15,
        borderRadius: 50,
        borderWidth: 1,
        marginTop: vh(10),
    },
    otpText: {
        color: "white",
        fontSize: vw(17),
        fontWeight: "800"
    },
    otpContainer1: {
        justifyContent: "center",
        alignItems: "center",
        margin: vh(10),
        backgroundColor: "white",
        padding: vh(15),
        borderRadius: 50,
        borderWidth: 1,
        marginTop: vh(10),
        flexDirection: "row"
    },
    otpText1: {
        color: "black",
        fontSize: vw(17),
        fontWeight: "400"
    },
    googleImage: {
        width: vw(18),
        height: vh(18),
        marginRight: 10,
    
    }

});

export default styles;