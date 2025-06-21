import { Colors } from "@/constants/Colors";
import { useCartStore } from "@/store/useCart";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function HomeHeader() {
  const { items } = useCartStore();
  const cartLength = items.length;
  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="text-xl font-bold">My Shop</Text>
      <View className="w-12 h-12 rounded-full border p-2 flex items-center relative justify-center border-gray-300">
        <MaterialIcons
          color={Colors.light.text}
          size={24}
          name="shopping-cart"
        />
        <View className="absolute -top-2 -right-2 bg-green-600 w-6 h-6 flex items-center justify-center rounded-full">
          <Text className="text-white">{cartLength || 0}</Text>
        </View>
      </View>
    </View>
  );
}
