import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class QuoteBox extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.quoteText}>"This is my quote"</Text>
                    <Text style={styles.quoteAuthor}>author</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    content: {
        padding: 32,
    },
    quoteText: {
        fontWeight: 'bold',
    },
    quoteAuthor: {
        alignSelf: 'flex-end',
    },
});