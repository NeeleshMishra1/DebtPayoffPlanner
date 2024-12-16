import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f7f7"
  },
  leftarrow: {
    width: vw(15),
    height: vh(15),
    color: "#7B7E7F"
  },
  header: {
    flex: 1,
    padding: 20,
  },
  header1: {
    marginTop: 50,
    padding: 20,
  },
  profileData: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  profileImage: {
    width: vw(65),
    height: vh(65),
    tintColor: 'black',
  },
  profileText: {
    paddingHorizontal: 20,
  },
  emailText: {
    fontSize: vw(18),
    fontWeight: "600",
    color: "black",
  },
  details: {
    flex: 1,
    backgroundColor: "#f0eded",
  },
  detailsAccount: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 17,
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
  },
  profileImage2: {
    width: vw(25),
    height: vh(25),
    tintColor: 'black',
  },
  myAccountText: {
    paddingHorizontal: 20,
    fontSize: vw(18),
    fontWeight: "500",
    color: "#4D4D4D",
  },
  rightarrow: {
    width: vw(20),
    height: vh(20),
    color: "#7B7E7F",
    position: "absolute",
    right: 10,
  },
  term: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  serviceText: {
    paddingVertical: 20,
    fontSize: 20,
    color: "#747474"
  },
  versionText: {
    fontSize: vw(15),
    color: "#747474"
  }



});

export default styles;