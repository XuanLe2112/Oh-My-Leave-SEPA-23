import React from 'react';
import { View, Button, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles.js'; // Update the path if necessary

export default function App(){
  return (

  <View style={[styles.fixToText, styles.bottomNavBox]}>

    <Pressable 
      onPress={() => console.log("Home button pressed")}
      style={( { pressed } ) => {
        return { opacity: pressed ? 0.4 : 1 }
      }}>
      <Image style={styles.bottomNavIcons} source={require('./images/HomeNav.png')} alt= {'Alternate text'} />  
    </Pressable>

    <Pressable 
      onPress={() => console.log("Camera Button pressed")}
      style={( { pressed } ) => {
        return { opacity: pressed ? 0.4 : 1 }
      }}>
      <Image style={styles.bottomNavIcons} source={require('./images/camera.png')} alt= {'Alternate text'} />  
    </Pressable>

    <Pressable 
      onPress={() => console.log("Profile Button pressed")}
      style={( { pressed } ) => {
        return { opacity: pressed ? 0.4 : 1 }
      }}>
      <Image style={styles.bottomNavIcons} source={require('./images/profile.png')} alt= {'Alternate text'} />  
    </Pressable>

  </View>

);}


