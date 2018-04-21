import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'This is my quote text.',
            author: 'Quote Author',
        };
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.quoteText}>{this.state.text}</Text>
                    <Text style={styles.quoteAuthor}>{this.state.author}</Text>
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
        marginBottom: 16,
    },
    quoteAuthor: {
        alignSelf: 'flex-end',
    },
});