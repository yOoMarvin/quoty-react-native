'use strict'

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class NewQuote extends React.Component {
    onPressNew = () => {
        console.log('Tweet Button pressed');
    }

    render() {
        return(
            <Button
                title = "New Quote!" 
                onPress = {this.onPressNew}/>
        );
    }
}