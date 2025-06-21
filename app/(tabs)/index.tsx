import HomeHeader from "@/components/HomeHeader";
import Product from "@/components/Product";
import { Colors } from "@/constants/Colors";
import { fetchProducts } from "@/data/products";
import { FlashList } from "@shopify/flash-list";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  color: string;
}

export const products: Product[] = [
  {
    id: "clh7ck9x50000qhyg4n2v8w1m",
    color: "text-green-600",
    image:
      "https://img.freepik.com/free-photo/one-black-sneaker-shoe-isolated-white_93675-131266.jpg?ga=GA1.1.852679718.1745466476&semt=ais_hybrid&w=740",
    name: "Nike Air Max 270",
    price: 129.99,
  },
  {
    id: "clh7ckb2x0001qhyg8j5m3k9p",
    color: "text-orange-600",
    image:
      "https://img.freepik.com/premium-photo/black-wireless-headphones-blue-background_176402-6166.jpg?ga=GA1.1.852679718.1745466476&semt=ais_hybrid&w=740",
    name: "Sony WH-1000XM5 Headphones",
    price: 349.99,
  },
  {
    id: "clh7ckd4z0002qhyg2p8n6r7q",
    color: "text-teal-600",
    image:
      "https://img.freepik.com/free-photo/male-self-care-items-arrangement_23-2150347137.jpg?ga=GA1.1.852679718.1745466476&semt=ais_hybrid&w=740",
    name: "Seiko Automatic Watch",
    price: 195.0,
  },
  {
    id: "clh7cke9a0003qhyg7m4k2s5t",
    color: "text-purple-600",
    image:
      "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?ga=GA1.1.852679718.1745466476&semt=ais_hybrid&w=740",
    name: "Apple MacBook Air M2",
    price: 1199.99,
  },
  {
    id: "clh7ckfb10004qhyg1x3h8d6u",
    color: "text-blue-600",
    image:
      "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745027.jpg?ga=GA1.1.852679718.1745466476&semt=ais_hybrid&w=740",
    name: "Patagonia Fleece Jacket",
    price: 89.5,
  },
];
export default function HomeScreen() {
  const { data, isLoading, error, isError } = useQuery({
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
        <Text className="text-red-500">Failed to fetch Products</Text>
      </View>
    );
  }
  // console.log(JSON.stringify(data, null, 2));
  return (
    <View className="p-8">
      <View className="py-6">
        <HomeHeader />
      </View>
      {/* <View className="flex flex-row flex-wrap gap-4">
        {products.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </View> */}
      <View className="w-full h-full ">
        <FlashList
          numColumns={2}
          data={data}
          estimatedItemSize={187}
          renderItem={({ item }) => <Product item={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </View>
  );
}
