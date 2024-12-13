import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        padding: 20,
        flex: 1,
        backgroundColor: "white"
    },
    imageLogo: {
        width: vw(130),
        height: vh(150),
    },
    logo: {
        backgroundColor: "#71D7EB",
        padding: 20,
        paddingTop:vh(80)
    },
    planText: {
        fontSize: vw(22),
        fontWeight: "600",
        color: "white"
    },
    signText: {
        fontSize: vw(25),
        fontWeight: "600",
        color: "#07455E"
    },
    weText: {
        color: "##A5A5A5",
        fontSize: vw(17),
        paddingTop: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#A5A5A5",
        fontSize: vw(16),
        marginBottom: vh(20),
        paddingVertical: vh(15),
        paddingHorizontal: 10,
        color: "#07455E",

    },
    textEmail: {
        paddingTop: vh(40),
    },
    button: {
        backgroundColor: "#3BC8E3",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
    },
    signUpText:{
        fontSize:20,
        fontWeight:"600",
        color:"white",
    },
    byText:{
        flexDirection:"row",
        paddingTop:10,
    },
    by:{
        fontSize:15,
        color:"#737373"
    },
    term:{
        color:"black",
        fontWeight:"500"
    },
    already:{
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:30,
    },
    term1:{
        color:"#3BC8E3",
        fontWeight:"600",
    },
    term2:{
        color:"black",
        fontWeight:"400",
        paddingBottom:10,
        fontSize:16,
    },

});

export default styles;