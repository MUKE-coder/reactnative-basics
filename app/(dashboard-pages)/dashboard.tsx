import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View className="p-16">
      <Text>Dashboard</Text>
      <Link className="text-2xl mb-3 text-blue-700" href="/(tabs)">
        Tabs Pages
      </Link>
    </View>
  );
}
