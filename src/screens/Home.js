// package imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, padding: 8, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>Home page!</Text>
            </View>
        );
    }
}

export default Home;