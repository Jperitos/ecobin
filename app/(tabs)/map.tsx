import React, { useState } from "react";
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import MapView, { Callout, Marker } from "react-native-maps";
import { ProgressBar } from "react-native-paper";

type Bin = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  percentage: number;
  location: string;
};

const bins: Bin[] = [
  {
    id: "1",
    name: "Bin A",
    latitude: 10.2098,
    longitude: 123.758,
    percentage: 75,
    location: "Near Gate A",
  },
  {
    id: "2",
    name: "Bin B",
    latitude: 10.2102,
    longitude: 123.759,
    percentage: 40,
    location: "Beside Cafeteria",
  },
  {
    id: "3",
    name: "Bin C",
    latitude: 10.2085,
    longitude: 123.757,
    percentage: 90,
    location: "Main Lobby",
  },
];

export default function MapScreen() {
  const [region] = useState({
    latitude: 10.2098,
    longitude: 123.758,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleOpenStreetView = async (latitude: number, longitude: number) => {
    const url = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Cannot open Google Maps. Please check your device settings.");
    }
  };

  const filteredBins = bins.filter((bin) => {
    const matchesSearch =
      bin.name.toLowerCase().includes(search.toLowerCase()) ||
      bin.location.toLowerCase().includes(search.toLowerCase());

    let matchesFilter = true;
    if (filter === "<50") matchesFilter = bin.percentage < 50;
    else if (filter === "50-75") matchesFilter = bin.percentage >= 50 && bin.percentage <= 75;
    else if (filter === ">75") matchesFilter = bin.percentage > 75;

    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search bins or locations..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Map */}
      <MapView style={StyleSheet.absoluteFillObject} initialRegion={region}>
        {filteredBins.map((bin) => (
          <Marker key={bin.id} coordinate={{ latitude: bin.latitude, longitude: bin.longitude }}>
            <Callout tooltip>
              <View style={styles.callout}>
                <Text style={styles.title}>{bin.name}</Text>
                <Text>Location: {bin.location}</Text>
                <Text>Fill Level: {bin.percentage}%</Text>
                <ProgressBar
                  progress={bin.percentage / 100}
                  style={styles.progressBar}
                  color={bin.percentage > 75 ? "red" : bin.percentage >= 50 ? "orange" : "green"}
                />
                <TouchableOpacity
                  style={styles.mapButton}
                  onPress={() => handleOpenStreetView(bin.latitude, bin.longitude)}
                >
                  <Text style={styles.mapButtonText}>Open in Street View</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    zIndex: 2,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  pickerContainer: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 12,
    zIndex: 2,
    elevation: 3,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  callout: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 220,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 8,
  },
  mapButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  mapButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
