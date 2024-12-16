import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    splaceImage: {
        width: vw(200),
        height: vh(200),
    },
    splaceText: {
        fontSize: vw(22),
        fontWeight: "900",
        color: "#002139",
        padding: 20
    },
});

export default styles;