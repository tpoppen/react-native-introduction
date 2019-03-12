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
            <View style={styles.contentWrapper}>
                <View style={styles.contentAlignment}>
                    <Text>Username</Text>
                    <TextInput style={styles.input} onChangeText={this.usernameChanged} />
                    <Text>Password</Text>
                    <TextInput secureTextEntry style={styles.input} onChangeText={this.passwordChanged} />
                    <Button title="Login" onPress={this.loginPressed} />
                </View>
            </View>
        );
    }
}

const styles = {
    contentWrapper: { flex: 1, justifyContent: "center", alignItems: 'center' },
    contentAlignment: { width: '50%' },
    input: { borderWidth: 1, borderColor: 'black' },
}

export default Login;