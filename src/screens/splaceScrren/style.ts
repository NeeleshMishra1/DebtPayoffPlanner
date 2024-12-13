import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#71D7EB",
    },
    splaceImage: {
        width: vw(200),
        height: vh(200),
    },
    splaceText: {
        fontSize: vw(30),
        fontWeight: "700",
        color: "white"
    },
});

export default styles;