import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex flex-1 mt-16">
      <Text className="text-blue-600 font-bold text-3xl">home</Text>
      <Link className="text-2xl mb-3 text-blue-700" href="/(tabs)">
        Tabs Pages
      </Link>
      <Link
        className="text-2xl mb-3 text-blue-700"
        href="/(dashboard-pages)/dashboard"
      >
        Dashboard Pages
      </Link>
    </View>
  );
}
