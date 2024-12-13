import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CEF0F6",
    },
    maincontainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#CEF0F6",
    },
    profile: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    imageLogo: {
        width: vw(40),
        height: vh(40),
    },
    name: {
        fontSize: vw(22),
        fontWeight: "700",
        color: "#08465E",
        paddingVertical: 10,
    },
    detailText: {
        fontSize: vw(15),
        fontWeight: "300",
        color: "#08465E",
    },
    primary: {
        backgroundColor: "white",
        width: vw(100),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 15,
    },
    primaryText: {
        fontSize: vw(15),
        fontWeight: "300",
        color: "#08465E",
        padding: 7,
    },
    countDown: {
        height: vh(200),
        backgroundColor: "#08465E",
        borderRadius: 12,
        marginTop: vh(35),
        padding: 20,
    },
    year: {
        flexDirection: "row",
        position: "absolute",
        bottom: 20,
        left: 20,
        width: "100%"
    },
    yearcontainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    yearText: {
        fontSize: vh(28),
        fontWeight: "700",
        color: "white"
    },
    yeartext1: {
        fontSize: vw(15),
        fontWeight: "300",
        color: "white",

    },
    debtText: {
        color: "white",
        fontSize: vw(17),
        fontWeight: "700",
        paddingBottom: 10,
    },
    mayText: {
        fontSize: vw(19),
        color: "white",
        fontWeight: "600",
    },
    sunImage: {
        position: "absolute",
        bottom: 0,
        width: vw(170),
        height: vh(100),
        right: 0,
    },
    payOff: {
        backgroundColor: "white",
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
    },
    payOffText: {
        paddingTop: 10,
        fontSize: 22,
        fontWeight: "600",
        color: "#08465E",
    },
    circleGraph: {
        flexDirection: "row",
    },
    circle: {
        width: vw(160),
        marginVertical: 20,
    },
    circleData: {
        margin: 30,
    },
    paidText: {
        fontSize: vw(16),
        fontWeight: "400",
    },
    paidTextDetail: {
        fontSize: vw(20),
        fontWeight: "700",
        color: "green",
        paddingVertical: 5,
    },
    paidTextDetail2: {
        fontSize: vw(20),
        fontWeight: "700",
        color: "red",
        paddingVertical: 5,
    },
    proMembership: {
        justifyContent: "center",
        alignItems: "center",
    },
    proMembershipText: {
        color: "white",
        fontSize: vw(22),
        fontWeight: "700"
    },
    crownImage: {
        width: vw(50),
        height: vh(50),
    },
    proMember: {
        backgroundColor: "#061B79",
        padding: 10,
        paddingVertical:0,
        borderRadius: 10,
    },
    multi: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    checkImage: {
        width: vw(17),
        height: vh(17),
        marginRight: 5,

    },
    multiText: {
        fontSize: vw(16),
        fontWeight: "400",
        color: "white",

    },
    checkImage1: {
        width: vw(17),
        height: vh(17),
        marginLeft: 15,
        marginRight: 5,
    },
    learnButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5,
        marginVertical: 10,
        marginTop: 20,
    },
    learnText: {
        fontSize: vw(15),
        fontWeight: "600",
        color: "#08465E",
    },
    payoffTime:{
        backgroundColor:"white",
        marginTop:15,
        borderRadius:10,
        padding:20,
    },
    payoffTimeText:{
        fontSize:vw(20),
        fontWeight:"600",
        color: "#08465E",
        paddingBottom:10,
    },
    balanceText:{
        fontSize:vw(18),
        fontWeight:"500",
        color: "#080808",
        paddingBottom:10,
    },
    inspirationImage:{
        width:"100%",
        height:300,
        resizeMode:"contain",
    },
    dailyoffTime:{
        backgroundColor:"white",
        marginTop:15,
        borderRadius:10,
        padding:10,
    },
    mountainImage:{
        width:"100%",
        height:170,
    },
    methodText:{
        padding:10,
        paddingTop:10,
    }
});

export default styles;