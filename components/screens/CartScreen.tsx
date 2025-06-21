// premium-apps/ecommerce-app/screens/CartScreen.tsx
import { useCartStore } from "@/store/useCart";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { notify } from "react-native-notificated";
import { CartItemCard } from "../CartCard";

interface CartScreenProps {
  onBackPress: () => void;
  onCheckout: () => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  onBackPress,
  onCheckout,
}) => {
  const {
    items: cartItems,

    removeFromCart,
    getCartTotalPrice,
  } = useCartStore();

  const removeItem = (id: string) => {
    removeFromCart(id);
    notify("success", {
      params: {
        description: "Item removed from cart successfully",
        title: "Success",
      },
    });
  };

  const subtotal = getCartTotalPrice();
  const deliveryFee = 5.0;

  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <View className="flex-1 bg-gray-50">
        <SafeAreaView className="flex-1">
          <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
            <TouchableOpacity onPress={onBackPress}>
              <Ionicons name="arrow-back" size={24} color="#000000" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold ml-4">
              My cart
            </Text>
          </View>

          <View className="flex-1 items-center justify-center px-6">
            <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center mb-6">
              <Ionicons name="bag-outline" size={40} color="#9ca3af" />
            </View>

            <Text className="text-gray-900 text-xl font-bold mb-2">
              Your cart is empty
            </Text>
            <Text className="text-gray-500 text-center mb-8">
              Add some products to get started with your order.
            </Text>

            <TouchableOpacity
              onPress={onBackPress}
              className="bg-green-500 px-8 py-4 rounded-2xl"
            >
              <Text className="text-white font-semibold text-lg">
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100 mt-10">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={onBackPress}>
              <Ionicons name="arrow-back" size={24} color="#000000" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold ml-4">
              My cart
            </Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        <ScrollView
          className="flex-1 px-4 py-4"
          showsVerticalScrollIndicator={false}
        >
          {/* Cart Items */}
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} onRemove={removeItem} />
          ))}

          {/* Order Summary */}
          <View className="bg-white rounded-2xl p-4 mb-4">
            <Text className="text-gray-900 font-semibold text-lg mb-4">
              Order Summary
            </Text>

            <View className="space-y-3">
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Subtotal:</Text>
                <Text className="text-gray-900 font-semibold">
                  ${subtotal.toFixed(2)}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Delivery Fee:</Text>
                <Text className="text-gray-900 font-semibold">
                  ${deliveryFee.toFixed(2)}
                </Text>
              </View>

              <View className="h-px bg-gray-200" />

              <View className="flex-row justify-between">
                <Text className="text-gray-900 font-bold text-lg">Total:</Text>
                <Text className="text-gray-900 font-bold text-lg">
                  ${total.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Checkout Button */}
        <View className="px-4 pb-6 bg-white border-t border-gray-100">
          <TouchableOpacity
            onPress={onCheckout}
            className="bg-green-500 rounded-2xl py-4 items-center"
          >
            <Text className="text-white text-lg font-semibold">
              Checkout for ${total.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
