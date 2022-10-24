import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  // const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const addGoalHandler = (data) => {
    setGoals((prevData) => {
      return [...prevData, data];
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} placeholder="Your Course Goal..." />

      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
        <FlatList
          data={goals}
          renderItem={(data) => <GoalItem data={data} />}
          keyExtractor={(item, i) => i}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
