import React , {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
class App extends  Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBITvWYKXtMq7zqYQ5QR1MgFv2CR_FjdVg",
            authDomain: "auth-67c40.firebaseapp.com",
            databaseURL: "https://auth-67c40.firebaseio.com",
            projectId: "auth-67c40",
            storageBucket: "auth-67c40.appspot.com",
            messagingSenderId: "483139747544"
        })
    }
    render(){
        
        return(
            <View>
                <Header headerText='Authentication' />
                <Text> App Here </Text>
            </View>
        );
    }

}
export default App