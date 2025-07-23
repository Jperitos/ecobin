import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Platform, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.settingRow}>
          <Ionicons name="notifications-outline" size={22} color="#5e7d63" />
          <Text style={styles.label}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: "#ccc", true: "#b7dfb2" }}
            thumbColor={Platform.OS === "android" ? "#5e7d63" : ""}
          />
        </View>

        <View style={styles.settingRow}>
          <Ionicons name="contrast-outline" size={22} color="#5e7d63" />
          <Text style={styles.label}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#ccc", true: "#b7dfb2" }}
            thumbColor={Platform.OS === "android" ? "#5e7d63" : ""}
          />
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.settingRow}>
          <Ionicons name="person-outline" size={22} color="#5e7d63" />
          <Text style={styles.label}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Ionicons name="log-out-outline" size={22} color="#a94442" />
          <Text style={[styles.label, { color: "#a94442" }]}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Others Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Others</Text>

        <TouchableOpacity style={styles.settingRow}>
          <Ionicons name="help-circle-outline" size={22} color="#5e7d63" />
          <Text style={styles.label}>Help Center</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Ionicons name="information-circle-outline" size={22} color="#5e7d63" />
          <Text style={styles.label}>App Version 1.0.0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9f5",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#3c614d",
    marginBottom: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6b8c78",
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e9f1e8",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#3c614d",
  },
});
