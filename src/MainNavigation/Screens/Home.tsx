import { View, Text } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { PricingCard } from "@rneui/base";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 py-20 px-5">
      <View>
        <Text className="text-6xl text-slate-200">
          Expo React Native Starter
        </Text>
        <View className="flex flex-row gap-5 mt-5">
          <Skeleton animation="pulse" width={80} height={40} />
          <Skeleton animation="wave" width={80} height={40} />
          <Skeleton animation="none" width={80} height={40} />
        </View>
      </View>

      <PricingCard
        containerStyle={{
          marginLeft: 0,
          marginTop: 50,
        }}
        wrapperStyle={{
          margin: 0,
        }}
        color={"rgb(36, 161, 233)"}
        title="Free"
        price="$0"
        info={["For everyone", "lightly", "All Core Features"]}
        button={{ title: "GET STARTED", icon: "flight-takeoff" }}
      />
    </View>
  );
}
