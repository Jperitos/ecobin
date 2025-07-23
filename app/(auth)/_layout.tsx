import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" translucent={false} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
