import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].secondary,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: Colors[colorScheme ?? "light"].tabBarBorder,
          height: Platform.OS === "ios" ? 88 : 120,
          paddingBottom: Platform.OS === "ios" ? 25 : 12,
          paddingTop: 8,
          paddingHorizontal: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 8,
          ...Platform.select({
            ios: {
              position: "absolute",
              backgroundColor: `${
                Colors[colorScheme ?? "light"].tabBarBackground
              }F8`, // 97% opacity
              backdropFilter: "blur(20px)",
            },
            default: {
              backgroundColor: Colors[colorScheme ?? "light"].tabBarBackground,
            },
          }),
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
          marginTop: 4,
          fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name="house.fill"
              color={
                focused
                  ? Colors[colorScheme ?? "light"].tabIconSelected
                  : Colors[colorScheme ?? "light"].tabIconDefault
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name="magnifyingglass"
              color={
                focused
                  ? Colors[colorScheme ?? "light"].tabIconSelected
                  : Colors[colorScheme ?? "light"].tabIconDefault
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name="cart.fill"
              color={
                focused
                  ? Colors[colorScheme ?? "light"].tabIconSelected
                  : Colors[colorScheme ?? "light"].tabIconDefault
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name="person.fill"
              color={
                focused
                  ? Colors[colorScheme ?? "light"].tabIconSelected
                  : Colors[colorScheme ?? "light"].tabIconDefault
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products/[id]"
        options={{
          title: "Detail Page",
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name="person.fill"
              color={
                focused
                  ? Colors[colorScheme ?? "light"].tabIconSelected
                  : Colors[colorScheme ?? "light"].tabIconDefault
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
