// package imports
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackActions } from 'react-navigation';

// local imports
import { NEST_STACK_ROUTES } from '../AppNavigationConstants';

class StackNavExample extends Component {
    static navigationOptions = {
        title: 'Stack',
    };

    getStackLevel = () => {
        if (this.props.navigation.state && this.props.navigation.state.params) {
            return this.props.navigation.state.params.stackLevel || 0;
        }

        return 0;
    }

    navigatePressed = () => {
        const pushAction = StackActions.push({
            routeName: NEST_STACK_ROUTES.NestStack,
            params: { stackLevel: this.getStackLevel() + 1 },
          });
        this.props.navigation.dispatch(pushAction);
    }

    render() {
        return (
            <View style={{ flex: 1, papdding: 8 }}>
                <Text style={{ textAlign: 'center' }}>This is stack level {this.getStackLevel()}!</Text>
                <Button title="Go Deeper" onPress={this.navigatePressed} />
            </View>
        );
    }
}

export default StackNavExample;