import { useCartStore } from "@/store/useCart";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}
interface CartItemCardProps {
  item: CartItem;
  onRemove: (id: string) => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,

  onRemove,
}) => {
  const { incrementQuantity, decrementQuantity } = useCartStore();
  const increaseQuantity = () => {
    incrementQuantity(item.id);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      decrementQuantity(item.id);
    }
  };

  return (
    <View className="flex-row bg-white rounded-2xl p-4 mb-3 border border-gray-100">
      <Image
        source={{ uri: item.image }}
        className="w-20 h-20 rounded-xl bg-gray-50"
        resizeMode="contain"
      />

      <View className="flex-1 ml-4">
        <View className="flex-row justify-between items-start mb-2">
          <View className="flex-1 pr-2">
            <Text className="text-gray-900 font-semibold text-base mb-1">
              {item.name}
            </Text>
          </View>

          <TouchableOpacity onPress={() => onRemove(item.id)} className="p-1">
            <Ionicons name="close" size={20} color="#ef4444" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-gray-900 font-bold text-lg">
            ${(item.price * item.quantity).toFixed(2)}
          </Text>

          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={decreaseQuantity}
              className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center"
            >
              <Ionicons name="remove" size={16} color="#6b7280" />
            </TouchableOpacity>

            <Text className="mx-4 text-gray-900 font-semibold text-base">
              {item.quantity}
            </Text>

            <TouchableOpacity
              onPress={increaseQuantity}
              className="w-8 h-8 rounded-full bg-green-500 items-center justify-center"
            >
              <Ionicons name="add" size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
