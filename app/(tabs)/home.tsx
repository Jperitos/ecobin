import Header from "@/components/Header";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Header
        onNotificationPress={() => console.log("Notifications clicked")}
        onProfilePress={() => console.log("Profile clicked")}
      />

      {/* Overview Cards */}
      <Text style={styles.sectionTitle}>Overview</Text>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collected Today</Text>
          <Text style={styles.cardValue}>12 Bins</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Routes Active</Text>
          <Text style={styles.cardValue}>3</Text>
        </View>
      </View>

      {/* Activity Logs */}
      <Text style={styles.sectionTitle}>Activity Logs</Text>
      <View style={styles.logItem}>
        <Text style={styles.logText}>🟢 Collected Bin #32 - 9:42 AM</Text>
      </View>
      <View style={styles.logItem}>
        <Text style={styles.logText}>🟢 Route 3 started - 8:15 AM</Text>
      </View>
      <View style={styles.logItem}>
        <Text style={styles.logText}>🟢 Logged in - 7:58 AM</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#2e7d32",
  },
  cardRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#e8f5e9",
    padding: 16,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    color: "#388e3c",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1b5e20",
    marginTop: 6,
  },
  logItem: {
    backgroundColor: "#f1f8e9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  logText: {
    fontSize: 14,
    color: "#2e7d32",
  },
});
