import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  BackGround: {
    backgroundColor: '#1A1A1A',
    // backgroundColor:'white',
    height: '100%',
    width: '100%',
  },
  Heading: {
    color: '#91F877',
    fontWeight: '800',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#91F877',
    padding: 10,
    paddingLeft: 25,
    borderRadius: 20,
  },
  btn: {
    backgroundColor: '#91F877',
    borderRadius: 20,
    padding: 5,
  },
  cards: {
    marginVertical: 8,
    padding: 19,
    borderColor: 'white',
    borderWidth: 1,
    width: '70%',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    // flex:5,
    // flexDirection:'row'
  },
  container: {
    flex: 1,
  },
});
export {style};
