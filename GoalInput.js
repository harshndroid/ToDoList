import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function GoalInput(props) {
  const [entered, setEntered] = useState("");
  const inputHandler = (entered) => setEntered(entered);
  return (
    <View style={{ marginTop: 10 }}>
      <TextInput
        style={{ paddingBottom: 5, fontSize: 15 }}
        placeholder="What do you want to do?"
        onChangeText={inputHandler}
      />
      <View style={{paddingBottom:20}}>
        <Button title="Add" onPress={() => props.propsOnAddGoal(entered)} />
      </View>
    </View>
  );
}
