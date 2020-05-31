import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const goalHandler = (inputText) => {
    if (inputText) {
      setGoals((array) => [
        ...array,
        { id: Math.random().toString(), value: inputText },
      ]);
    }
  };
  const removeGoalHandler = (goalId) => {
    setGoals((array) => {
      return array.filter((array) => array.id !== goalId);
    });
  };

  return (
    <View style={style.root}>
      <GoalInput propsOnAddGoal={goalHandler} />
      <Text style={{textAlign:"center"}}>Tap on the task to delete it.</Text>
      <FlatList
        style={{
          backgroundColor: "#fff",
          marginTop: 20,
          elevation: 100,
          borderRadius: 5,
        }}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={() => removeGoalHandler(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:15,
  },
});
