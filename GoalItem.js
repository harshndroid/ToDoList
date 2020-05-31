import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View
        style={{
          backgroundColor: "powderblue",
          padding: 10,
          margin: 10,
        }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
