import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Pressable, Text, View, useWindowDimensions } from "react-native";

export default function WelcomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: width * 0.05,
          opacity: fadeAnim,
        }}
      >
        {/* Logo */}
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            top: height * 0.1,
          }}
        >
          <Image
            source={require("@/assets/icon/logo-final2.png")}
            style={{
              width: width * 0.6,
              height: width * 0.6,
              resizeMode: "contain",
              marginTop: height * 0.05,
            }}
          />
        </View>

        {/* Text and Button */}
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: width * 0.05,
            marginTop: height * 0.4,
          }}
        >
          <Text
            style={{
              fontSize: width * 0.075,
              fontFamily: "Poppins_700Bold",
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
              letterSpacing: 4,
              color: "#000000",
            }}
          >
            WELCOME
          </Text>
          <Text
            style={{
              fontSize: width * 0.04,
              fontFamily: "Poppins_400Regular",
              lineHeight: 24,
              textAlign: "center",
              color: "#555555",
            }}
          >
            Where technology meets {"\n"} cleanliness
          </Text>

          <Pressable
            onPress={() => router.push("/(auth)/login")}
            style={{
              paddingVertical: height * 0.015,
              paddingHorizontal: width * 0.15,
              borderRadius: 50,
              alignItems: "center",
              marginTop: height * 0.03,
              backgroundColor: "#347433",
            }}
          >
            <Text
              style={{
                fontSize: width * 0.04,
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
            bottom: height * 0.06,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: width * 0.065,
              fontFamily: "Poppins_700Bold",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: 4,
              color: "#000000",
            }}
          >
            ECOBIN
          </Text>
          <Text
            style={{
              fontSize: width * 0.03,
              fontFamily: "Poppins_300Regular",
              marginTop: 2,
              color: "#888888",
            }}
          >
            City of Naga, Cebu
          </Text>
        </View>
      </Animated.View>

      {/* Indicator Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: height * 0.03,
          gap: 6,
        }}
      >
        <View
          style={{
            width: width * 0.1,
            height: 4,
            borderRadius: 2,
            backgroundColor: "gray",
          }}
        />
      </View>
    </View>
  );
}
