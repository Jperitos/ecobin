import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import { RootStackParamList } from '@/types/navigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type BinDetailRouteProp = RouteProp<RootStackParamList, 'BinDetailScreen'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BinDetailScreen() {
  const route = useRoute<BinDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { binId } = route.params;
  const router = useRouter();

  const bin = {
    id: binId,
    location: 'Main Entrance',
    level: 85,
    lastEmptied: 'Today 9:42 AM',
    status: 'Operational',
  };

  const handleNavigate = () => {
    router.push({
      pathname: "/home/proof-of-pickup",
      params: { binId: bin.id }, // if needed
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header onNotificationPress={() => navigation.navigate('NotificationScreen')} onProfilePress={() => navigation.navigate('ProfileScreen')} />
      </View>

      <BackButton />
      <Text style={styles.sectionTitle}>Bin Location on Map</Text>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.text}>📦 Map temporarily removed</Text>
      </View>

      <Text style={styles.title}>Details for {bin.id}</Text>
      <Text style={styles.text}>Location: {bin.location}</Text>
      <Text style={styles.text}>Current Level: {bin.level}%</Text>
      <Text style={styles.text}>Last Emptied: {bin.lastEmptied}</Text>
      <Text style={[styles.text, styles.status]}>Status: {bin.status}</Text>

      <Button
        title="Pick Up"
        onPress={handleNavigate}
        disabled={bin.level < 80}
        color={bin.level < 80 ? '#aaa' : '#2e7d32'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { marginTop: 44, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 15, color: '#2e7d32' },
  sectionTitle: { marginTop: 20, fontSize: 18, fontWeight: '500', color: '#000', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10, color: '#444' },
  status: { fontWeight: 'bold', color: '#2e7d32' },
  mapPlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
