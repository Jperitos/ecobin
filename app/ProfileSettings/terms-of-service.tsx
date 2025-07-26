import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TermsOfServiceScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Terms of Service will be listed here.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
    },
});
