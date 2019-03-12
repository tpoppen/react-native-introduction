// package imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home page!</Text>
            </View>
        );
    }
}

export default Home;