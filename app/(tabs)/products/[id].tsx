import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { fetchProducts } from "@/data/products";
import { useQuery } from "@tanstack/react-query";

export default function ProductDetail() {
  const { id, color } = useLocalSearchParams<{ id: string; color: string }>();
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) {
    return (
      <View className="h-96 flex items-center justify-center">
        <ActivityIndicator size={24} color={Colors.light.primary} />
      </View>
    );
  }
  if (error) {
    return (
      <View className="h-96 flex items-center justify-center">
        <Text className="text-red-500">Failed to fetch Product</Text>
      </View>
    );
  }
  const product = products.find((item) => item.id === id);
  if (!product) {
    return (
      <View>
        <Text>No Product Found</Text>
      </View>
    );
  }
  return (
    <View className="p-8">
      <View className="pt-12">
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View className="py-6 mt-8">
        <Text className={`text-2xl text-center font-bold ${color}`}>
          {product.name}
        </Text>
      </View>
      <View className="flex flex-row flex-wrap gap-4 px-16">
        <View className="w-full">
          <View className="overflow-hidden  rounded-2xl ">
            <Image
              className=" w-full h-32 object-cover"
              source={{
                uri: product.image,
              }}
            />
          </View>

          <View>
            <Text className="font-bold text-3xl pt-4">${product.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
