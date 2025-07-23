import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TextInput style={styles.input} placeholder="Full Name" defaultValue="Juan Dela Cruz" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue="juan@example.com"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Phone" defaultValue="+63 912 345 6789" keyboardType="phone-pad" />

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9f5",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2e7d32",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#d0e1d4",
  },
  saveButton: {
    backgroundColor: "#5e7d63",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
