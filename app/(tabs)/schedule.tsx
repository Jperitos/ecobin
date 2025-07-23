import { StyleSheet, Text, View } from "react-native";

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your collection schedule will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
