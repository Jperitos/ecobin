import Header from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNotificationPress = () => {
    navigation.navigate('NotificationScreen');
  };

  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen');
  };

  const bins = [
    { id: 'Bin A1', level: 85, location: 'Main Entrance' },
    { id: 'Bin B2', level: 40, location: 'Cafeteria' },
    { id: 'Bin C3', level: 20, location: 'Library Hall' },
  ];

  const logs = [
    '🟢 Emptied Bin A1 – 9:42 AM',
    '🟢 Route B2 Started – 8:15 AM',
    '🟢 Logged In – 7:58 AM',
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.header}>
        <Header onNotificationPress={handleNotificationPress} onProfilePress={handleProfilePress} />
      </View>

      <Text style={styles.sectionTitle}>Bin Overview</Text>
      {bins.map((bin, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{bin.id}</Text>
          <Text style={styles.cardSub}>{bin.location}</Text>
          <Text style={styles.cardValue}>{bin.level}% full</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Activity Logs</Text>
      {logs.map((log, index) => (
        <Text key={index} style={styles.logText}>{log}</Text>
      ))}

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="alert-circle-outline" size={18} color="#fff" />
          <Text style={styles.actionText}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="analytics-outline" size={18} color="#fff" />
          <Text style={styles.actionText}>Stats</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    color: '#2e7d32',
  },
  card: {
    backgroundColor: '#f0f4f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardSub: {
    fontSize: 12,
    color: '#555',
  },
  cardValue: {
    fontSize: 13,
    color: '#2e7d32',
    marginTop: 4,
  },
  logText: {
    fontSize: 13,
    color: '#444',
    marginBottom: 6,
    backgroundColor: '#f7f7f7',
    padding: 8,
    borderRadius: 6,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 8,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e7d32',
    paddingVertical: 10,
    borderRadius: 6,
  },
  actionText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '500',
  },
});
