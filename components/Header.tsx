import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface HeaderProps {
  title: string;
  showIcons?: boolean;
  style?: ViewStyle;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showIcons = true, style, onNotificationPress, onProfilePress }) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Text style={styles.headerTitle}>{title}</Text>
      {showIcons && (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onNotificationPress}>
            <Ionicons name="notifications-outline" size={24} color="#2e7d32" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onProfilePress}>
            <Ionicons name="person-circle-outline" size={28} color="#2e7d32" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
    letterSpacing: 1,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default Header;
