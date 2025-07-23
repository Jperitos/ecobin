import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

interface HeaderProps {
  showIcons?: boolean;
  style?: ViewStyle;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showIcons = true,
  style,
  onNotificationPress,
  onProfilePress,
}) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Image
        source={require("@/assets/icon/logo-final2.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {showIcons && (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onNotificationPress}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onProfilePress}>
            <Ionicons name="person-circle-outline" size={26} color="#000" />
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
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    marginLeft: -45,
    height: 40,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default Header;
