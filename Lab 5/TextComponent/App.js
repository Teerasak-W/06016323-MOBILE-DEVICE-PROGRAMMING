import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "orange", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};
export default ViewBoxesWithColorAndText;