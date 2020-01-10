// package imports
import React from 'react';
import { StyleSheet, View } from 'react-native';

// local imports
import RootNavigator from './src/AppNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
