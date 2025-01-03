import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";
import { colors } from "../../themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    main: {
        padding: 20,
    },
    debtsText: {
        fontSize: vw(30),
        fontWeight: "600",
        color: colors.white,
    },
    manageText: {
        paddingVertical: 5,
        fontSize: vw(17),
        fontWeight: "300",
        color: colors.white,
    },
    ring: {
        flex: 1,
        borderTopLeftRadius: vw(20),
        borderTopRightRadius: vw(20),
    },
    ringData: {
        paddingHorizontal: 20,
        backgroundColor: "white",
        paddingTop: 40,
        borderTopLeftRadius: vw(40),
        borderTopRightRadius: vw(40),
    },
    balanceText: {
        fontSize: vw(17),
        fontWeight: '600',
        color: colors.black,
    },
    addContainer: {
        padding: 20,
        backgroundColor: 'white',
        marginTop: 10,
    },
    adddebtsText: {
        fontSize: vw(22),
        fontWeight: "600",
        color: "black",
    },
    addCount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addText: {
        fontSize: vw(16),
        fontWeight: "700",
        color: "white",
    },
    addButton: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    searchContainer: {
        flexDirection: "row",
    },
    search: {
        backgroundColor: "#ebeded",
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',

    },
    searchImage: {
        width: vw(35),
        height: vh(35),
    },
    searchInput: {
        fontSize: vw(22),
        paddingHorizontal: 10,
        paddingRight: 25,
    },
    sort: {
        marginLeft: 20,
        width: "40%",
        padding: 5,
        borderBottomWidth: 1,
    },
    dropDown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrowImage: {
        width: vw(15),
        height: vh(15),
    },
    sortText: {
        fontWeight: "500",
        color: "#6a6b6b"
    },
    aprtText: {
        fontSize: vw(15),
    },
    addData: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 40,
        borderLeftWidth: 2,
        borderColor: "#f0a502",
    },
    nameText: {
        fontSize: vw(17),
        fontWeight: "600",
        paddingVertical: 5,
    },
    balanceText1: {
        fontWeight: "400",
        paddingTop: 5,
        color: "#616161",
    },
    currentText1: {
        fontSize: vw(24),
        fontWeight: "600",
    },
    minimumText1: {
        fontSize: vw(18),
        fontWeight: "500",
    },
    aprContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    legendContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
        padding: 20,
        justifyContent: "center",
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    legendColor: {
        width: vw(10),
        height: vh(10),
        marginRight: 10,
        borderRadius: 10,
    },
    legendText: {
        fontSize: vw(14),
        color: '#333',
    },
    editImage: {
        width: vw(20),
        height: vh(20),
    },




});

export default styles;