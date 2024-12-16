import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edfcfc"
    },
    main: {
        padding: 20,
        backgroundColor: "#e4f7f7"
    },
    debtsText: {
        fontSize: vw(28),
        fontWeight: "600",
        color: "black",
    },
    manageText: {
        paddingVertical: 5,
        fontSize: vw(14),
        fontWeight: "600",
        color: "black",
    },
    recurring: {
        backgroundColor: "white",
        borderTopLeftRadius: vw(20),
        borderTopRightRadius: vw(20),
        padding: 20,
    },
    fundingText: {
        fontSize: vw(17),
        fontWeight: "600",
        color: "black",
    },
    amountText: {
        paddingVertical: 5,
        fontSize: vw(14),
        fontWeight: "400",
        color: "black",
    },
    amountText1: {
        paddingVertical: 5,
        fontSize: vw(14),
        fontWeight: "400",
        color: "#737373",
    },
    frequencyText: {
        paddingVertical: 10,
        fontSize: vw(13),
        fontWeight: "600",
        color: "black",
    },
    amountContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rightarrow: {
        width: vw(18),
        height: vh(18),
        color: "#7B7E7F",
        marginLeft: 10,
    },
    amountContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: '#c0c2c2',
    },
    oneTime: {
        backgroundColor: "white",
        marginTop: 20,
        padding: 20,
    }




});

export default styles;