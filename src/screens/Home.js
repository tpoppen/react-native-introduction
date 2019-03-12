// package imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        console.log('testing render');
        return (
            <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center' }}>
                <Text>Home page!</Text>
                {console.log('test in render')}
            </View>
        );
    }
}

export default Home;