import Input from "@/components/fields/Input";
import Label from "@/components/fields/Label";
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)/index");
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        {/* Logo + Brand */}
        <View style={styles.upperContainer}>
          <Text style={styles.logoText}>Eco Bin</Text>
          <Text style={styles.description}>Create an account to begin your journey.</Text>
        </View>

        {/* Inputs */}
        <View style={styles.InputContainer}>
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" value={fullName} onChangeText={setFullName} />

          <Label style={{ marginTop: 16 }}>Email</Label>
          <Input placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />

          <Label style={{ marginTop: 16 }}>Password</Label>
          <View style={styles.passwordWrapper}>
            <Input
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} style={styles.eyeIcon}>
              <Ionicons name={showPassword ? "eye-off" : "eye"} size={18} color="#999" style={{ marginTop: 5 }} />
            </TouchableOpacity>
          </View>

          <Label style={{ marginTop: 16 }}>Confirm Password</Label>
          <Input
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={loading}>
          <Text style={styles.registerButtonText}>{loading ? "Creating Account..." : "Create Account"}</Text>
        </TouchableOpacity>

        {/* Social Sign-In */}
        <View style={styles.IconsContainer}>
          <Text style={styles.signWith}>or sign in with</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity>
              <AntDesign name="google" size={20} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="facebook" size={20} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="apple" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Already have an account? */}
        <Text style={styles.signInPrompt}>
          Already have an account?{" "}
          <Text style={styles.signInLink} onPress={() => router.push("/(auth)/login")}>
            Login
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2e7d32", // green
    letterSpacing: 2,
  },
  upperContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 22,
  },
  InputContainer: {
    width: "100%",
    marginTop: 20,
    gap: 5,
  },
  passwordWrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "20%",
  },
  registerButton: {
    backgroundColor: "#2e7d32",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  IconsContainer: {
    marginTop: 10,
  },
  signWith: {
    textAlign: "center",
    color: "#555",
    fontSize: 13,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 16,
    marginBottom: 10,
  },
  signInPrompt: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
    marginTop: 20,
  },
  signInLink: {
    fontSize: 13,
    color: "#2e7d32",
    fontWeight: "600",
  },
});
