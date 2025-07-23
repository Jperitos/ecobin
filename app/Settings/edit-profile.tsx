import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function EditProfileScreen() {
    const router = useRouter();

    const [name, setName] = useState("Angel Canete");
    const [email, setEmail] = useState("angelcanete@gmail.com");
    const [phone, setPhone] = useState("09123456789");
    const [address, setAddress] = useState("Cebu City, Philippines");

    const handleSave = () => {
        Alert.alert("Success", "Profile updated successfully.");
        router.replace("/(tabs)/settings");
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => router.replace("/(tabs)/settings")}
                    style={styles.backButton}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Edit Profile</Text>
            </View>

            {/* Form */}
            <ScrollView contentContainerStyle={styles.form}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />

                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Enter your address"
                />

                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save Changes</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingTop: 60,
    },
    headerContainer: {
        position: "relative",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    backButton: {
        position: "absolute",
        left: 20,
        top: 13,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    form: {
        paddingHorizontal: 30,
        alignItems: "center",
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 14,
        color: "#444",
        marginBottom: 6,
    },
    input: {
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 20,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#2e7d32",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});
