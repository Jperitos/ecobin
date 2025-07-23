import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Platform, StatusBar, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const backgroundColor = isDark ? "#1c1c1e" : "#ffffffee";
  const activeTintColor = isDark ? "#90ee90" : "#2e7d32";
  const inactiveTintColor = isDark ? "#ccc" : "#9e9e9e";

  return (
    <>
      {Platform.OS === "android" && (
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={isDark ? "#1c1c1e" : "#ffffff"}
          translucent
        />
      )}

      <Tabs
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
          tabBarStyle: {
            position: "absolute",
            bottom: insets.bottom,
            left: 20,
            right: 20,
            height: 60,
            backgroundColor: isDark ? "#1c1c1e" : "#ffffffee",
            borderRadius: 20,
            paddingTop: 5,
            paddingBottom: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 10,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 9,
            fontWeight: "600",
          },
        })}
      >

        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={20} />
            ),
          }}
        />

        <Tabs.Screen
          name="schedule"
          options={{
            title: "Schedule",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "calendar" : "calendar-outline"} color={color} size={20} />
            ),
          }}
        />

        <Tabs.Screen
          name="map"
          options={{
            title: "Map",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "map" : "map-outline"} color={color} size={20} />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={20} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
