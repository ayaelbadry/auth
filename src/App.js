import React , {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Spinner, CardSection, Card} from './components/common';
import LoginForm from './components/LoginForm'
import firebase from 'firebase';
class App extends  Component {
  state = {
    loggedIn: null
  }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBITvWYKXtMq7zqYQ5QR1MgFv2CR_FjdVg",
            authDomain: "auth-67c40.firebaseapp.com",
            databaseURL: "https://auth-67c40.firebaseio.com",
            projectId: "auth-67c40",
            storageBucket: "auth-67c40.appspot.com",
            messagingSenderId: "483139747544"
        })
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({loggedIn: true})
          }else{
            this.setState({loggedIn: false})
          }

        })
    }
    renderContent(){
      switch (this.state.loggedIn) {
        case true:
            return (
              <CardSection>
                  <Button onPress={ () => firebase.auth().signOut()}> Log Out </Button>
              </CardSection>
          );

        case false:
            return <LoginForm />
        default:
             return <Spinner size="large" />


      }
    }
    render(){

        return(
            <View >
                <Header headerText='Authentication' />

                   {this.renderContent()}

            </View>
        );
    }

}
const styles = {
  logoutStyle: {
    paddingTop: 20,
    alignSelf: 'center'
  }
}
export default App
