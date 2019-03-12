// package imports
import React, { Component } from 'react';
import { Picker, Switch, Text, TextInput, View } from 'react-native';

// local imports


class StateManagementExample extends Component {
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
            <View style={{ flex: 1 }}>
                <Text>Sample Text Input</Text>
                <TextInput value={textInput} />
                <Text>Sample Picker</Text>
                <Picker selectedValue={pickerValue}>
                    {this.getPickerValues()}
                </Picker>
                <Text>Sample Switch</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text>Swith Label</Text>
                    <Switch value={toggleState} />
                </View>
            </View>
        )
    }
}

export default StateManagementExample;