import Header from "@/components/Header";
import { useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const markedDates = {
    "2025-07-24": { marked: true, dotColor: "#2e7d32" },
    "2025-07-26": { marked: true, dotColor: "#2e7d32" },
    "2025-07-29": { marked: true, dotColor: "#2e7d32" },
  };

  // Example assigned collector data
  const collectorSchedule: Record<string, { time: string; collector: string }> = {
    "2025-07-24": { time: "9:00 AM", collector: "Collector A" },
    "2025-07-26": { time: "10:00 AM", collector: "Collector B" },
    "2025-07-29": { time: "8:30 AM", collector: "Collector C" },
  };

  // Sample task assignments (for the table)
  const userTasks = [
    { id: "1", date: "2025-07-24", area: "Zone 1", task: "Collect Bin A" },
    { id: "2", date: "2025-07-26", area: "Zone 3", task: "Collect Bin C" },
    { id: "3", date: "2025-07-29", area: "Zone 2", task: "Collect Bin B" },
  ];

  const handleDayPress = (day: any) => {
    const date = day.dateString;
    if (collectorSchedule[date]) {
      setSelectedDate(date);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        onNotificationPress={() => console.log("Notifications clicked")}
        onProfilePress={() => console.log("Profile clicked")}
      />
      <Text style={styles.title}>Today's Collection Schedule</Text>

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
        onDayPress={handleDayPress}
      />

      {/* Modal for selected date */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Schedule Details</Text>
            {selectedDate && (
              <>
                <Text>Date: {selectedDate}</Text>
                <Text>Time: {collectorSchedule[selectedDate].time}</Text>
                <Text>Collector: {collectorSchedule[selectedDate].collector}</Text>
              </>
            )}
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Task Table */}
      <Text style={styles.taskTitle}>Assigned Tasks</Text>
      <FlatList
        data={userTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <Text style={styles.taskText}>{item.date}</Text>
            <Text style={styles.taskText}>{item.area}</Text>
            <Text style={styles.taskText}>{item.task}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={[styles.taskRow, { backgroundColor: "#e0e0e0" }]}>
            <Text style={styles.taskHeader}>Date</Text>
            <Text style={styles.taskHeader}>Area</Text>
            <Text style={styles.taskHeader}>Task</Text>
          </View>
        )}
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
    color: "#000",
    marginBottom: 6,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2e7d32",
    paddingVertical: 8,
    borderRadius: 6,
  },
  closeButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 8,
    color: "#000",
  },
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  taskHeader: {
    flex: 1,
    fontWeight: "bold",
    color: "#000",
  },
  taskText: {
    flex: 1,
    color: "#333",
  },
});
