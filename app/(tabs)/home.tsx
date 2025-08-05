import Header from "@/components/Header";
import { RootStackParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const router = useRouter();

  const logs = [
    "🟢 Emptied Bin A1 – 9:42 AM",
    "🟢 Route B2 Started – 8:15 AM",
    "🟢 Logged In – 7:58 AM",
    "🟢 Emptied Bin B2 – Yesterday 6:12 PM",
    "🟢 Emptied Bin C3 – 2 days ago 3:30 PM",
  ];

  const handleBinPress = (binId: string) => {
    router.push({
      pathname: "/home/bin-details",
      params: {
        binId,
        logs: JSON.stringify(logs),
      },
    });
  };

  const bins = [
    { id: "Bin A1", level: 85, location: "Main Entrance" },
    { id: "Bin B2", level: 40, location: "Cafeteria" },
    { id: "Bin C3", level: 20, location: "Library Hall" },
  ];

  const getFillColor = (level: number) => {
    if (level <= 50) return "#4caf50";
    if (level <= 80) return "#ff9800";
    return "#f44336";
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.header}>
        <Header />
      </View>

      <Text style={styles.sectionTitle}>Bin Overview</Text>
      {bins.map((bin, index) => (
        <TouchableOpacity key={index} onPress={() => handleBinPress(bin.id)} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{bin.id}</Text>
            <Text style={styles.cardSub}>{bin.location}</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${bin.level}%`,
                  backgroundColor: getFillColor(bin.level),
                },
              ]}
            />
          </View>
          <Text style={styles.cardValue}>{bin.level}% full</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Activity Logs</Text>
      {logs.map((log, index) => (
        <Text key={index} style={styles.logText}>
          {log}
        </Text>
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
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    marginTop: 44,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#000",
  },
  card: {
    backgroundColor: "#f0f4f0",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardHeader: {
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardSub: {
    fontSize: 13,
    color: "#666",
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 6,
    overflow: "hidden",
    marginVertical: 8,
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 6,
  },
  cardValue: {
    fontSize: 13,
    color: "#333",
  },
  logText: {
    fontSize: 13,
    color: "#444",
    marginBottom: 6,
    backgroundColor: "#f7f7f7",
    padding: 8,
    borderRadius: 6,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 8,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e7d32",
    paddingVertical: 10,
    borderRadius: 6,
  },
  actionText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "500",
  },
});
