import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PrivacyPolicyScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Privacy Policy details will go here.</Text>
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
