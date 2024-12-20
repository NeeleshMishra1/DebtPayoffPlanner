
import { StyleSheet, Dimensions } from 'react-native';
import { vh, vw } from '../../utils/dimensions';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: vw(24),
    color: '#07455E',
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 50,
  },
  text: {
    color: '#002139',
    fontSize: vw(17),
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 180,
    height: 180,
    padding: 20,
    resizeMode: 'contain',
  },
  paginationDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  paginationDot: {
    width: vw(8),
    height: vh(8),
    borderRadius: 5,
    backgroundColor: '#002139',
    margin: 5,
  },
  header: {
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row"
  },
  imageLogo: {
    width: vw(130),
    height: vh(40),
    padding: 5,
  },
  leftarrow: {
    width: vw(15),
    height: vh(15),
    color: "#7B7E7F"
  },
  Skip: {
    fontSize: 18,
    color: "#002139"
  },
  header1: {
    justifyContent: "space-between",
    paddingVertical: 10,
    flexDirection: "row"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,

  },
  buttonimage: {
    backgroundColor: "#002139",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: vw(20),
    fontWeight: "700",
    color: "white"
  }
});

export default styles;

