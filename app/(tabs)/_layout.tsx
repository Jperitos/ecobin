import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      {Platform.OS === "android" && <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent />}

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2e7d32",
          tabBarInactiveTintColor: "#9e9e9e",
          tabBarStyle: {
            position: "absolute",
            bottom: insets.bottom,
            left: 20,
            right: 20,
            height: 60,
            backgroundColor: "#ffffffee",
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
        }}
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
