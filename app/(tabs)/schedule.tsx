import Header from "@/components/Header";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
export default function ScheduleScreen() {
  // Example marked dates (collection schedule)
  const markedDates = {
    "2025-07-24": { marked: true, dotColor: "#2e7d32" },
    "2025-07-26": { marked: true, dotColor: "#2e7d32" },
    "2025-07-29": { marked: true, dotColor: "#2e7d32" },
  };

  return (
    <View style={styles.container}>
      <Header
        title="EcoBin"
        onNotificationPress={() => console.log("Notifications clicked")}
        onProfilePress={() => console.log("Profile clicked")}
      />
      <Text style={styles.title}>Your Collection Schedule</Text>
      <Text style={styles.subtitle}>View only – assigned routes & days</Text>

      <Calendar
        markedDates={markedDates}
        enableSwipeMonths
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#388e3c",
          selectedDayBackgroundColor: "#a5d6a7",
          selectedDayTextColor: "#1b5e20",
          todayTextColor: "#2e7d32",
          dayTextColor: "#333",
          dotColor: "#2e7d32",
          arrowColor: "#2e7d32",
          monthTextColor: "#2e7d32",
          textDayFontWeight: "500",
          textMonthFontWeight: "bold",
          textDayFontSize: 16,
          textMonthFontSize: 18,
        }}
        onDayPress={(day) => {
          // Optional: show toast or modal with details
          console.log("Pressed", day.dateString);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2e7d32",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
});
