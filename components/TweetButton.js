import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TweetButton extends React.Component {
    _onPressTwitter = () => {
        console.log('Tweet Button pressed');
    }
    render() {
        return (
            <Button
                style = {styles.tweetButton}
                title ="Tweet!"
                onPress = {this._onPressTwitter}
            />
        );
    }
}

const styles = StyleSheet.create({
    tweetButton: {
        backgroundColor: '#ffffff',
        color: '#333333',
        
    }
});