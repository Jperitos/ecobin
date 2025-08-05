import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./(tabs)/home";
import NotificationScreen from "./screens/notification";
import ProfileScreen from "./screens/profile";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
