import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="items-center justify-center h-screen px-4">
      <Text className="text-rose-700 text-2xl text-center font-light">
        Welcome to Expo Starter Pack!
      </Text>
    </SafeAreaView>
  );
}
