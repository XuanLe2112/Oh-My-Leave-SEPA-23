import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, TextInput, SafeAreaView, Button, Alert, KeyboardAvoidingView } from 'react-native';
import { auth } from '../../firebase';

export default function CameraPage({navigation}){

     const pressHandlerHomePage = () => {
      navigation.navigate('HomePage');
    };

    const pressHandlerSelf = () => {
        navigation.navigate('CameraPage');
    };

    const pressHandlerProfile = () => {
        navigation.navigate('Profile');
    };

   // const TextInputExample = () => {
      //  const [text, onChangeText] = React.useState('Username');
     //   const [number, onChangeNumber] = React.useState('');
     const [text, onChangeText] = React.useState('');
     const [texts, onChangeTexts] = React.useState('');

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
     }
    

  return (



    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>



        <View style={styles.cube} />
        <Image source={require('../assets/settings.png')} style={styles.settings} /> 
        <Image source={require('../assets/leave.png')} style={styles.logo}/>
       
        <Text style={styles.name}>Sign In Page</Text>
    
        <View style={styles.body}>
            
        <KeyboardAvoidingView
    styles={styles.container}
    behavior='padding'
    >
            <SafeAreaView>
            <Text style={styles.subTitle}>Email</Text>
                <TextInput
                    style={styles.input}
                   // onChangeText={onChangeText}
                   onChangeText={text => setEmail(text)}
                   // value={number}
                  // value={text}
                  value={email}
                    placeholder="Email"
                   // keyboardType="numeric"
                />
            <Text style={styles.subTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
                >
                <Text style={styles.buttonText}>LogIN!!!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
                >
                <Text style={styles.buttonOutlineText}>Register!!!</Text>
                </TouchableOpacity>
            </View>

            <Button
                title="Sign in"
                color="#B1F2B3"
                onPress={() => Alert.alert('You have signed in!')}
            />



            </SafeAreaView>
            </KeyboardAvoidingView>
            
        </View>
    
        <View style={styles.skip}>
            <Button
                title="Skip signing in"
                color="#f194ff"
                onPress={() => Alert.alert('Skipping signing in')}
            />
         </View>

        <View style={styles.bar}>           
            <View style={styles.shape}>
                <TouchableOpacity onPress={pressHandlerSelf}>
                    <Image source={require('../assets/camera.png')} style={styles.camera1}/>
                </TouchableOpacity>
                <Text style={styles.name}>Camera</Text>
            </View>
            <TouchableOpacity onPress={pressHandlerHomePage}>
                <Image source={require('../assets/home.png')} style={styles.home}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandlerProfile}>
                <Image source={require('../assets/profile.png')} style={styles.profile}/>
            </TouchableOpacity>
        </View>
       
    </ImageBackground>

    
  );
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        resizeMode: 'stretch',
    },
    logo: {
        width: 250,
        height: 250,
        marginLeft: 85,
        marginTop: 100,
        position: 'absolute'
    },
    circle: {
        width: 200, 
        height: 200,
        borderRadius: 100, 
        backgroundColor: '#D9D9D9',
        marginLeft: 110,
        marginTop: 340,
        position: 'absolute'
    },
    camera: {
        width: 120,
        height: 100,
        marginLeft: 150,
        marginTop: 385, 
        position: 'absolute'      
    },
    cube: {
        width: 40,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginLeft: 350,
        marginTop: 50,
        position: 'absolute'
    },
    settings: {
        width: 25,
        height: 25,
        marginLeft: 357,
        marginTop: 57,
        position: 'absolute'
    },
    bar: {
        width: '100%',
        height: 80,
        backgroundColor: '#008000',
        marginTop: '200%',
        bottom: 0,
        position: 'absolute'
    },
    shape: {
        width: 120, 
        height: 120,
        borderRadius: 60, 
        backgroundColor: '#008000',
        alignSelf: 'center',
        bottom: 5,
        position: 'absolute'
    },
    camera1: {
        width: 70,
        height: 55,
        marginLeft: 25,
        marginTop: 30,
        position: 'absolute'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 85,
        position: 'absolute'
    },
    profile: {
        width: 50,
        height: 50,
        marginLeft: 310,
        marginTop: 10,
        position: 'absolute'
    },
    home: {
        width: 45,
        height: 45,
        marginLeft: 60,
        marginTop: 10,
        position: 'absolute'
    },


    title: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 45,
        marginLeft: 60,
        marginTop: 10,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    body: {
        margin: 12,
        marginTop: 280,
        borderWidth: 1,
        padding: 10
    },
    skip: {
        //width: 45,
        height: 45,
        marginLeft: 60,
        marginBottom: 10,
        bottom: 130,
       
        position: 'absolute'
    },

    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        margin: 5,
        borderColor: '#0782F9',
        borderWidth: 2,

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },

});



