import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };

  function addGoalHandler() {
    setEnteredGoalText("");
    props.onAddGoal(enteredGoalText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder={props.placeholder}
        style={styles.textInput}
        value={enteredGoalText}
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccccccc",
    width: "70%",
    marginRight: 8,
    padding: 6,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black ",
  },
});
