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
    {
      type: "emptied",
      message: "Emptied Bin A1",
      bin: "A1",
      location: "Main Entrance",
      time: "9:42 AM",
      date: "Today",
    },
    {
      type: "pickup",
      message: "Picked up Bin B2",
      bin: "B2",
      location: "Cafeteria",
      time: "8:15 AM",
      date: "Today",
    },
    {
      type: "login",
      message: "User Logged In",
      time: "7:58 AM",
      date: "Today",
    },
  ];

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "login":
        return styles.badgeLogin;
      case "pickup":
        return styles.badgePickup;
      case "emptied":
        return styles.badgeEmptied;
      default:
        return {};
    }
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

  const handleBinPress = (binId: string) => {
    router.push({
      pathname: "/home/bin-details",
      params: {
        binId,
        logs: JSON.stringify(logs),
      },
    });
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

      <View style={styles.activityHeader}>
        <Text style={styles.sectionTitle}>Activity Logs</Text>
        <TouchableOpacity onPress={() => router.push("/home/activity-logs")}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      {logs.map((log, index) => (
        <View key={index} style={styles.logCard}>
          <View style={styles.logTextContainer}>
            <Text style={styles.logMessage}>{log.message}</Text>
            <Text style={styles.logTime}>
              {log.date} – {log.time}
            </Text>
            {log.bin && log.location && (
              <Text style={styles.logSubtext}>
                📍 Bin {log.bin} – {log.location}
              </Text>
            )}
          </View>

          <View style={styles.rightColumn}>
            <View style={[styles.typeBadge, getBadgeStyle(log.type)]}>
              <Text style={styles.badgeText}>{log.type.toUpperCase()}</Text>
            </View>
          </View>
        </View>
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
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  seeAllText: {
    color: "#2e7d32",
    fontWeight: "500",
    fontSize: 13,
    marginTop: 2,
  },
  logCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    backgroundColor: "#f4f4f4",
  },
  logTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  logMessage: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  logTime: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  logSubtext: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },
  rightColumn: {
    alignItems: "center",
    justifyContent: "center",
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  badgeLogin: {
    backgroundColor: "#64b5f6",
  },
  badgePickup: {
    backgroundColor: "#ffd54f",
  },
  badgeEmptied: {
    backgroundColor: "#81c784",
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
