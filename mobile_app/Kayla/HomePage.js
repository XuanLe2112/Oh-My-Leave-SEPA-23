import React from 'react';
import BottomNavigation from './BottomNavigation';

import { View, Button, ImageBackground, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles.js'; // Update the path if necessary


const HomePage = () => {

  const size = useWindowDimensions();
  const width = size.width;
  const height = size.height;
  return (
 
    //<SafeAreaView style={styles.container}> 
    <ImageBackground source={require('./images/GreenBackground.png')} style={styles.image}>
      
    <Pressable 
      onPress={() => console.log("Settings button pressed")}
      style={( { pressed } ) => { return { opacity: pressed ? 0.4 : 1 }}}>
      <Image style={styles.gearSettings} source={require('./images/settings.png')} alt= {'Alternate text'} />  
    </Pressable>
    
    <View style={styles.banner}>
      <Pressable 
        onPress={() => console.log("Profile button pressed")}
        style={( { pressed } ) => {return { opacity: pressed ? 0.4 : 1 }}}>
        <Image style={styles.profileIcon} source={require('./images/usericon.png')} alt= {'Alternate text'} />  
      </Pressable>
      <Text style={styles.title}>Kong</Text>
    </View>
    
    <View style={styles.mainBody}>
      <View style={styles.collection}>
        <Text style={styles.subtitle}>Collection</Text>
        <View style={styles.partBox}>
          <Image style={styles.smallImage} source={require('./images/collectionLeaf.png')}  />  
          <Text style={[styles.subtitle, styles.body]}>Date : 15 / 04 /23</Text>
        </View>
    
      <View style={styles.health}>
        <Text style={styles.subtitle}>Health Diagnosis</Text>
        <View style={styles.partBox}>
          <Image style={styles.smallImage} source={require('./images/healthLeaf.png')}  />  
        <Text style={[styles.subtitle, styles.body]}>Check Health</Text>
        </View>
      </View>
      </View> 
    </View>


    <View style={[styles.fixToText, styles.moveBottom]}>
      <BottomNavigation onPress={() => console.log("YAY")}  />
    </View>

  </ImageBackground>
 // </SafeAreaView>
  );
}

export default HomePage;