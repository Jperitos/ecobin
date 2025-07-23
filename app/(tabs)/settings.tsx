import { useTheme } from "@/hooks/useTheme";
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIDEnabled, setFaceIDEnabled] = useState(false);

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: "https://i.pravatar.cc/100?u=user" }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Angel Canete</Text>
          <Text style={styles.username}>@angelcanete@gmail.com</Text>
        </View>
      </View>

      {/* Account */}
      <Text style={styles.sectionHeader}>ACCOUNT</Text>
      <View style={styles.card}>
        <SettingRow label="Edit Profile" icon="user" onPress={() => {}} />
        <SettingRow label="Change Password" icon="lock" onPress={() => {}} />
      </View>

      {/* Preferences */}
      <Text style={styles.sectionHeader}>PREFERENCES</Text>
      <View style={styles.card}>
        <SettingSwitch label="Dark Mode" icon="moon" value={isDarkMode} onValueChange={toggleDarkMode} />
        <SettingSwitch
          label="Notifications"
          icon="bell"
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
        <SettingSwitch label="Face ID" icon="smile" value={faceIDEnabled} onValueChange={setFaceIDEnabled} />
      </View>

      {/* Support */}
      <Text style={styles.sectionHeader}>SUPPORT</Text>
      <View style={styles.card}>
        <SettingRow label="Help Center" icon="help-circle" onPress={() => {}} />
        <SettingRow label="Terms of Service" icon="file-text" onPress={() => {}} />
        <SettingRow label="Privacy Policy" icon="shield" onPress={() => {}} />
        <SettingRow label="Logout" icon="log-out" onPress={() => {}} isDestructive />
      </View>

      {/* App Info */}
      <View style={styles.footer}>
        <Text style={styles.versionText}>App Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

function SettingRow({ label, icon, onPress, isDestructive = false }: any) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.rowLeft}>
        <Feather name={icon} size={20} color={isDestructive ? "#ff3b30" : "#555"} />
        <Text style={[styles.label, isDestructive && { color: "#ff3b30" }]}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#aaa" />
    </TouchableOpacity>
  );
}

function SettingSwitch({ label, icon, value, onValueChange }: any) {
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <Feather name={icon} size={20} color="#555" />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "600",
    color: "#888",
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#eee",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  label: {
    fontSize: 16,
    color: "#222",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    gap: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#ccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  username: {
    fontSize: 14,
    color: "#666",
  },
  footer: {
    marginTop: 50,
    alignItems: "center",
    marginBottom: 40,
  },
  versionText: {
    fontSize: 13,
    color: "#999",
  },
});
