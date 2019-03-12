// package imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// local imports
import { ROOT_SWITCH_ROUTES } from '../AppNavigationConstants';

class Splash extends Component {
    componentDidMount() {
        // You could check redux state here to see if user is already logged in, then navigate to home screen

        // For now, let's just navigate to the login screen
        setTimeout(() => {
            this.props.navigation.navigate(ROOT_SWITCH_ROUTES.LoginScreen);
        }, 3000);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SPLAAAAAASH</Text>
            </View>
        );
    }
}

export default Splash;