import { CartScreen } from "@/components/screens/CartScreen";
import { router } from "expo-router";
import React from "react";

export default function Cart() {
  return (
    <CartScreen
      onBackPress={() => {
        router.back();
      }}
      onCheckout={() => {
        console.log("Proceed to checkout");
        // router.push("/checkout");
      }}
    />
  );
}
