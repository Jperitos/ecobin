import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type BackButtonProps = {
  label?: string;
  iconColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function BackButton({
  label = 'Back',
  iconColor = '#2e7d32',
  textColor = '#2e7d32',
  style,
  textStyle,
}: BackButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={router.back} style={[styles.backButton, style]}>
      <Ionicons name="arrow-back" size={24} color={iconColor} />
      <Text style={[styles.backText, { color: textColor }, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});
