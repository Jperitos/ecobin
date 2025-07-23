import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const notifications = [
    {
        id: '1',
        title: 'New Task Assigned',
        message: 'You have a new waste collection task.',
        timestamp: '2025-07-23 10:45 AM',
        isRead: false,
    },
    {
        id: '2',
        title: 'Task Completed',
        message: 'Your previous task was marked as completed.',
        timestamp: '2025-07-22 4:20 PM',
        isRead: true,
    },
];

export default function NotificationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.card, item.isRead && styles.read]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.message}>{item.message}</Text>
                        <Text style={styles.timestamp}>{item.timestamp}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#f9f9f9', flex: 1 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    read: { opacity: 0.6 },
    title: { fontSize: 16, fontWeight: '600' },
    message: { marginTop: 5, fontSize: 14 },
    timestamp: { marginTop: 8, fontSize: 12, color: 'gray' },
});
