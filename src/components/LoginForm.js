import React, {Component} from 'react';
import { TextInput, Text } from 'react-native';
import {Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }
  onPressButton(){
    const {email, password} = this.state
    this.setState({error: '', loading: true})
    // must found catch statement to catch any error that occered
    firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLoginSuccess.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this))
     })
  }
  //helper method to make condition to show the spinner or the button
  renderButton(){
    if (this.state.loading){
      return <Spinner size="small"/>;
    }
    return(
      <Button onPress={this.onPressButton.bind(this)} >Log In </Button>
    )
  }
  // onLoginSuccess to invoke through then method to clear the spinner and any error message that appear on the screen
//while login success
  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }
  //to clear the spinner and show error while login failed
  onLoginFail(){
    this.setState({error: 'Authentication Failed', loading: false})
  }
//  const { errorTextStyle } = styles
  render(){
    return(
      <Card>
         <CardSection>
            <Input
            placeholder ="user@gamil.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
             />
         </CardSection>


         <CardSection>
            <Input
            secureTextEntry
            placeholder ="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
             />


         </CardSection>
         <Text style={styles.errorTextStyle}>{this.state.error}</Text>
         <CardSection>
             {this.renderButton()}
         </CardSection>

      </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}
export default LoginForm;
