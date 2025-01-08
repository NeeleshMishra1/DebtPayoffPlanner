import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header1: {
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    padding: vh(20),
    flexDirection: "row",
    backgroundColor: "white"
  },
  leftarrow: {
    width: vw(15),
    height: vh(15),
    color: "#7B7E7F"
  },
  account: {
    paddingHorizontal: "30%",
    fontSize: vw(18),
    fontWeight: "700",
  },
  personal: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: "white"
  },
  profileImage: {
    width: vw(45),
    height: vh(45),
    borderRadius: 50,
  },
  profilePic: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: "#dbdbdb",
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderBottomColor: "#dbdbdb",
  },

  personalText: {
    fontSize: vw(17),
    color: "black",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileText: {
    fontSize: vw(17),
  },
  profilePic1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '50%',
    height: "80%",
    backgroundColor: '#6e6e6e',
    borderRadius: 10,
    position: "absolute",
    paddingHorizontal: 15,
    right: 10,

  },
  modalTitle: {
    fontSize:vh(18),
    fontWeight: 'bold',
    marginBottom: 10,
    color: "white"
  },
  currencyOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  currencyText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500"
  },
  profilePic2: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  profileImag1: {
    width: vw(100),
    height: vh(100),
    borderRadius: 100
  },
  profileText1: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "800"
  },
  button:{
    backgroundColor:"black",
    padding:12,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25,
    marginTop:vh(30),
  },
  updateText:{
    color:"white",
    fontSize:18,
    fontWeight:"800"
  }

});

export default styles;