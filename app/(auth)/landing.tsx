import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Pressable, Text, View, useWindowDimensions } from "react-native";

export default function WelcomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height } = useWindowDimensions();

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
          paddingHorizontal: 24,
          opacity: fadeAnim,
        }}
      >
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            top: height * 0.1,
          }}
        >
          <Image
            source={require("@/assets/images/adaptive-icon.png")}
            style={{ width: 250, height: 250, resizeMode: "contain", marginTop: 50 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: height * 0.25,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Poppins_700Bold",
              marginBottom: 10,
              textAlign: "center",
              letterSpacing: 3,
              color: "#000000",
            }}
          >
            WELCOME
          </Text>
          <Text
            style={{
              fontSize: 16,
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
              paddingVertical: 10,
              paddingHorizontal: 28,
              borderRadius: 50,
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "#347433",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_400Regular",
                color: "#ffffff",
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 40,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Poppins_700Bold",
              letterSpacing: 4,
              color: "#000000",
            }}
          >
            ECOBIN
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_300Regular",
              marginTop: 2,
              color: "#888888",
            }}
          >
            City of Naga, Cebu
          </Text>
        </View>
      </Animated.View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 40,
          gap: 6,
        }}
      >
        <View
          style={{
            width: 20,
            height: 4,
            borderRadius: 2,
            backgroundColor: "gray",
          }}
        />
      </View>
    </View>
  );
}
