// package imports
import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

// local imports
import { ROOT_SWITCH_ROUTES } from '../AppNavigationConstants';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
        }
    }

    usernameChanged = (newText) => this.setState({ username: newText });
    passwordChanged = (newText) => this.setState({ password: newText });

    loginPressed = () => {
        // here you could grab the username & password
        // use an http class & make an auth request
        // and on success add your user auth to redux and a secure store
        // then redirect to your home screen
        const { username, password } = this.state;
        console.log('Username & Password at time of Login Press', username, password);
        this.props.navigation.navigate(ROOT_SWITCH_ROUTES.BaseTabNav);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text>Username</Text>
                <TextInput onChangeText={this.usernameChanged} />
                <Text>Password</Text>
                <TextInput secureTextEntry onChangeText={this.passwordChanged} />
                <Button title="Login" onPress={this.loginPressed} />
            </View>
        );
    }
}

export default Login;