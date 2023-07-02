import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  image: {
  flex: 1,
  resizeMode: 'stretch',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'flex-start'
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  body:{
  marginLeft: 8
  },
  fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  },
  statBar: {
    width: 390,
    height: 44
  },
  gearSettings: {
    width: 44,
    height: 44,
    marginTop: 16,
    marginBottom: 10,
    marginLeft: 330
  },
  profileIcon:{
    width: 74,
    height: 74
  },
  bottomNavIcons:{
    resizeMode:'contain', //fixes so image doesnt get cut off
    width: 60,
    height: 60,
  },
  bottomNavBox:{
    backgroundColor: 'green',
    height: 82,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  moveBottom:{
    position: 'absolute',
    bottom:0
  },
  partBox:{
    backgroundColor: '#D9D9D9',
    width: 358,
    height: 79,
    flexDirection: 'row',
    alignItems: 'center',
  },
  banner: {
    marginBottom: 49,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  collection: {
    marginBottom: 8
  },
  health: {
    marginBottom: 205,
    marginTop: 8
  },
  smallImage:{
    width: 79,
    height: 62,
    marginLeft: 10,
  },
  mainBody:{
    alignItems: 'center',
    wdith: 358,
  }
  
});

export default styles;