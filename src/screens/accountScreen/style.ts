import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edebeb",
  },
  header1: {
    paddingTop: Platform.OS === 'ios' ? 70 : 0,
    padding: 20,
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
    color: ""
  },
  personal: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: "white"
  },
  profileImage: {
    width: vw(45),
    height: vh(45),
    borderRadius:50,
  },
  profilePic: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: "#dbdbdb",
  },
  rightarrow: {
    width: vw(25),
    height: vh(25),
    color: "#7B7E7F",
    marginLeft: 10,
  },
  personalText: {
    fontSize: vw(17),
    color: "black",
  },
  profileText: {
    fontSize: vw(17),
  },
  profilePic1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  nickText: {
    fontSize: vw(16),
  },
  nickname: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  display: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: "white"
  },
  personal1: {
    padding: 20,
    backgroundColor: "white"
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  resetText: {
    fontSize: vw(17),
    fontWeight: "600",
    color: "red",
    padding: 5,
  },
  allText: {
    fontSize: vw(13),
    fontWeight: "300"
  },
  resetText1: {
    fontSize: vw(17),
    fontWeight: "600",
    color: "red",
    paddingVertical: 5,
    paddingTop: 25,
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
    fontSize: 18,
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

});

export default styles;