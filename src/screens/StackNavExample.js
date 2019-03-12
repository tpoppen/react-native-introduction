// package imports
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

// local imports
import { STACK_ROUTES } from '../AppNavigationConstants';

class StackNavExample extends Component {

    getStackLevel = () => this.props.navigation.state.params.stackLevel || 0;

    navigatePressed = () => {
        navigation.push(STACK_ROUTES.SampleStackView, { stackLevel: this.getStackLevel() + 1 });
    }

    render() {
        return (
            <View>
                <Text>This is stack level {this.getStackLevel()}!</Text>
                <Button title="Go Deeper" onPress={navigatePressed} />
            </View>
        );
    }
}

export default StackNavExample;