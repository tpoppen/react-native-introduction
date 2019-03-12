// package imports
import React, { Component } from 'react';
import { Picker, Switch, Text, TextInput, View } from 'react-native';

class StateManagementExample extends Component {
    static navigationOptions = {
        title: 'State',
    };

    constructor(props) {
        super(props);

        this.state = {
            textInput: '',
            pickerValue: undefined,
            toggleState: false,
        }
    }

    // render helpers
    getPickerValues = () => {
        const pickerVals = ['JavaScript', 'Kotlin', 'Swift'];
        return pickerVals.map((val) => (
            <Picker.Item key={val} value={val} label={val} />
        ));
    }

    render() {
        const { textInput, pickerValue, toggleState } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.label}>Sample Text Input</Text>
                <TextInput value={textInput} />
                <Text style={styles.label}>Sample Picker</Text>
                <Picker selectedValue={pickerValue}>
                    {this.getPickerValues()}
                </Picker>
                <Text style={styles.label}>Sample Switch</Text>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>Swith Label:</Text>
                    <Switch value={toggleState} />
                </View>
            </View>
        )
    }
}

const styles = {
    label: { marginBottom: 2, fontSize: 24 }
}

export default StateManagementExample;