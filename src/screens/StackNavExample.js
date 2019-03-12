// package imports
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackActions } from 'react-navigation';

// local imports
import { STACK_ROUTES } from '../AppNavigationConstants';

class StackNavExample extends Component {
    static navigationOptions = {
        title: 'Stack',
    };

    getStackLevel = () => {
        console.log('TESTING TESTING TESTING')
        if (this.props.navigation.state && this.props.navigation.state.params) {
            return this.props.navigation.state.params.stackLevel || 0;
        }

        return 0;
    }

    navigatePressed = () => {
        const pushAction = StackActions.push({
            routeName: STACK_ROUTES.SampleStackView,
            params: { stackLevel: this.getStackLevel() + 1 },
          });
        this.props.navigation.dispatch(pushAction);
    }

    render() {
        console.log('testing render stack')
        return (
            <View style={{ flex: 1 }}>
                <Text>This is stack level {this.getStackLevel()}!</Text>
                <Button title="Go Deeper" onPress={this.navigatePressed} />
            </View>
        );
    }
}

export default StackNavExample;