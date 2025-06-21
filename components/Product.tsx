import { useCartStore } from "@/store/useCart";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNotifications } from "react-native-notificated";

export interface ItemProps {
  id: string;
  name: string;
  price: number;
  color: string;
  image: string;
}
export default function Product({ item }: { item: ItemProps }) {
  const { notify } = useNotifications();
  const { addToCart } = useCartStore();
  function handleAddToCart() {
    console.log("Button clicked");
    addToCart(item);
    // Toast.show({
    //   type: "success",
    //   text1: "Item added to cart successfully",
    // });
    notify("success", {
      params: {
        description: "Item added to cart successfully",
        title: "Success",
      },
    });
  }
  return (
    <View className="w-[95%] overflow-hidden  rounded-2xl border border-gray-300 pb-2 mr-2">
      <Link
        href={{
          pathname: "/(tabs)/products/[id]",
          params: {
            id: item.id,
            color: item.color,
          },
        }}
        className="overflow-hidden  rounded-2xl "
      >
        <Image
          className=" w-full h-32 object-cover"
          source={{ uri: item.image }}
        />
      </Link>
      <View className="px-3 pb-2">
        <View>
          <Text className="py-2">{item.name}</Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="font-bold">${item.price}</Text>
          <TouchableOpacity onPress={handleAddToCart} className="">
            <Text className="font-bold">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
