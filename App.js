import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [showTask, setShowTask] = useState([]);

  const handleadd = () => {
    setShowTask([...showTask, task]);
    setTask("");
  };
  const complete = (index) => {
    let item = [...showTask];
    item.splice(index, 1);
    setShowTask(item);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Task List</Text>
      </View>
      <View style={styles.taskitems}>
        {showTask.map((task, index) => {
          return (
            <ScrollView>
              <TouchableOpacity key={index} onPress={() => complete(index)}>
                <Task task={task} />
              </TouchableOpacity>
            </ScrollView>
          );
        })}
      </View>
      <KeyboardAvoidingView style={styles.input}>
        <TextInput
          style={styles.enterinput}
          placeholder="Write your task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleadd()}>
          <View style={styles.addWrapper}>
            <Text style={styles.add}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0D3DD",
  },
  heading: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    fontSize: 36,
  },
  taskitems: {
    marginLeft: 20,
    marginRight: 20,
    overflowY: "auto",
  },
  input: {
    paddingHorizontal: 5,
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  enterinput: {
    backgroundColor: "#fff",
    borderRadius: 23,
    width: 296,
    height: 42,
    padding: 10,
    paddingHorizontal: 25,
    fontSize: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  add: {
    fontSize: 36,
    alignItems: "center",
  },
});
