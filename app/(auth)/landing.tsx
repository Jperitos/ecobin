import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function WelcomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height, width } = useWindowDimensions();

  // Simple breakpoints for responsive tweaks (tune as you like)
  const sm = width < 600;          // phones / small tablets
  const md = width >= 600 && width < 1024; // tablets / small laptops
  const lg = width >= 1024;        // desktops / large screens

  // Helpers to "clamp" sizes so they scale but stay readable
  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  // Font sizes scale with width but are clamped for readability
  const titleSize = clamp(width * 0.075, 22, lg ? 40 : 34);      // "WELCOME"
  const taglineSize = clamp(width * 0.04, 12, lg ? 20 : 18);     // tagline
  const buttonTextSize = clamp(width * 0.04, 14, lg ? 20 : 18);  // "Sign In"
  const brandSize = clamp(width * 0.065, 20, lg ? 36 : 32);      // "ECOBIN"
  const locationSize = clamp(width * 0.03, 10, lg ? 16 : 14);    // "City of Naga, Cebu"

  // ↓ NEW: scale everything down slightly
  const sizeFactor = 0.9;

  // Spacing scales with height/width but remains sensible
  const containerPaddingH = lg ? width * 0.04 : width * 0.05;
  const logoSide = clamp(width * 0.6, sm ? 160 : 220, lg ? 420 : 360);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: containerPaddingH,
        }}
      >
        {/* Constrain width on large web screens for better readability */}
        <View
          style={{
            width: "100%",
            maxWidth: lg ? 900 : md ? 720 : 480,
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Image
            source={require("@/assets/icon/logo-final2.png")}
            accessibilityLabel="EcoBin logo"
            style={{
              width: logoSide,
              height: logoSide,
              resizeMode: "contain",
              marginBottom: clamp(height * 0.03, 12, 28),
            }}
          />

          {/* Welcome Text (BOLD ONLY) */}
          <Text
            style={{
              fontSize: titleSize * sizeFactor,   // ← smaller
              fontFamily: "Poppins_600SemiBold",
              fontWeight: "600",
              marginBottom: 10,
              textAlign: "center",
              letterSpacing: sm ? 6 : 4,
              color: "#000000",
            }}
          >
            WELCOME
          </Text>

          {/* Tagline (Regular) */}
          <Text
            style={{
              fontSize: taglineSize * sizeFactor, // ← smaller
              fontFamily: "Poppins_400Regular", 
              lineHeight: clamp(taglineSize * 1.4, 18, 30),
              textAlign: "center",
              color: "#555555",
              marginBottom: clamp(height * 0.02, 10, 24),
            }}
          >
            Where technology meets {"\n"} cleanliness
          </Text>

          {/* Sign In Button (Regular text) */}
          <Pressable
            onPress={() => router.push("/(auth)/login")}
            style={({ hovered, pressed }) => ({
              paddingVertical: clamp(height * 0.015, 10, 16),
              paddingHorizontal: sm ? 28 : md ? 36 : 44,
              borderRadius: 50,
              alignItems: "center",
              backgroundColor:
                hovered && Platform.OS === "web"
                  ? "#2d652c"
                  : pressed
                  ? "#2f6b2e"
                  : "#347433",
              transform: pressed ? [{ scale: 0.98 }] : undefined,
            })}
          >
            <Text
              style={{
                fontSize: buttonTextSize * sizeFactor, // ← smaller
                fontFamily: "Poppins_400Regular",
                color: "#ffffff",
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View
          style={{
            position: "absolute",
            bottom: clamp(height * 0.06, 24, 56),
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 16,
          }}
        >
          {/* ECOBIN (BOLD ONLY) */}
          <Text
            style={{
              fontSize: brandSize * sizeFactor,    // ← smaller
              fontFamily: "Poppins_600Bold",       // keeping your current family
              fontWeight: "600",
              textAlign: "center",
              letterSpacing: sm ? 2 : 4,
              color: "#000000",
            }}
          >
            ECOBIN
          </Text>
          {/* Location (Regular) */}
          <Text
            style={{
              fontSize: locationSize * sizeFactor, // ← smaller
              fontFamily: "Poppins_400Regular",
              marginTop: 2,
              color: "#888888",
              textAlign: "center",
            }}
          >
            City of Naga, Cebu
          </Text>
        </View>
      </Animated.View>

      {/* Indicator Bar (kept subtle and responsive) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: clamp(height * 0.03, 10, 28),
          gap: 6,
        }}
      >
        <View
          style={{
            width: clamp(width * 0.1, 40, 120),
            height: 4,
            borderRadius: 2,
            backgroundColor: "gray",
            opacity: 0.5,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
