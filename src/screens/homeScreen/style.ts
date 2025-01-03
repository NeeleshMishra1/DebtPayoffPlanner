import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    maincontainer: {
        flex: 1,
        padding: 20,
        paddingHorizontal: 10,
    },
    profile: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imageLogo: {
        width: vw(50),
        height: vh(50),
        borderRadius: 50
    },
    name: {
        fontSize: vw(22),
        fontWeight: "700",
        color: "white",
        paddingVertical: 10,
    },
    detailText: {
        fontSize: vw(15),
        fontWeight: "300",
        color: "white",
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
        fontWeight: "700",
        color: "black",
        padding: 7,
    },
    countDown: {
        height: vh(200),
        backgroundColor: "white",
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
        color: "black"
    },
    yeartext1: {
        fontSize: vw(15),
        fontWeight: "300",
        color: "black",
    },
    debtText: {
        color: "black",
        fontSize: vw(17),
        fontWeight: "700",
        paddingBottom: 10,
    },
    mayText: {
        fontSize: vw(19),
        color: "black",
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
        color: "black",
    },
    circleGraph: {
        flexDirection: "row",
        paddingHorizontal:10,
        alignItems:"center",
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
        color: "black",
        fontSize: vw(22),
        fontWeight: "700"
    },
    crownImage: {
        width: vw(50),
        height: vh(50),
    },
    proMember: {
        backgroundColor: "white",
        padding: 10,
        paddingVertical: 0,
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
        tintColor: 'black',
    },
    multiText: {
        fontSize: vw(16),
        fontWeight: "400",
        color: "black",
    },
    checkImage1: {
        width: vw(17),
        height: vh(17),
        marginLeft: 15,
        marginRight: 5,
        tintColor: 'black',
    },
    learnButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: 5,
        borderRadius: 5,
        marginVertical: 10,
        marginTop: 20,
    },
    learnText: {
        fontSize: vw(15),
        fontWeight: "800",
        color: "white",
    },
    payoffTime: {
        backgroundColor: "white",
        marginTop: 15,
        borderRadius: 10,
        padding: 20,
    },
    payoffTimeText: {
        fontSize: vw(20),
        fontWeight: "600",
        color: "black",
        paddingBottom: 10,
    },
    balanceText: {
        fontSize: vw(18),
        fontWeight: "500",
        color: "#080808",
        paddingBottom: 10,
    },
    inspirationImage: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
    },
    dailyoffTime: {
        backgroundColor: "white",
        marginTop: 15,
        borderRadius: 10,
        padding: 10,
    },
    mountainImage: {
        width: "100%",
        height: 170,
    },
    methodText: {
        padding: 10,
        paddingTop: 10,
    },
    legendContainer: {
        margin:20,
        justifyContent: 'center',
        alignItems:'center',
    },
    legendItem: {
        alignItems: 'center',
        marginVertical: 5,
    },
    legendText1:{
        fontSize:vh(18),
        fontWeight:"800",
        color:"green"
    },
    legendText2:{
        fontSize:vh(20),
        fontWeight:"900",
        color:"red"
    },
    legendColor: {
        width: 15,
        height: 15,
        marginRight: 10,
        borderRadius: 3,
    },
    legendText: {
        fontSize: vh(16),
        color: '#333',
        fontWeight:"300"
    },
    ring: {
        flexDirection: "row",
        paddingTop: 20,
    },
    legendText2: {
        fontSize: 18,
        color: 'red',
        fontWeight: "600"
    },
    categoriesSection:{
        marginVertical:20,
    },
    categoriesTitle:{
        marginVertical:10,
        fontSize:vh(17),
        fontWeight:"400",
    },
    pieContainer2:{
        padding:10,
    },
    pie2:{
        borderRadius:10,
        padding:15,
        paddingHorizontal:35,
        alignItems:"center",
    },
    legendContainer1: {
        justifyContent: 'center',
        alignItems:'center',
    },
    balantext:{
        fontSize:vh(17),
        fontWeight:"600",
    }
    

});

export default styles;