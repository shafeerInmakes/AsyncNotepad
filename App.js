

import React, { useState } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

import  AsyncStorage  from '@react-native-async-storage/async-storage';

function App() {
  const [task, setTask] = useState("");

  const add = async () => {
    try {
      await AsyncStorage.setItem("dailyTask", "Today Task");
    }
    catch (e) {
      console.error(e)
    }
  }

  const get = async () => {
    try {
      const value = await AsyncStorage.getItem("dailyTask");
      if (value != null) {
        setTask(value)
      } else {
        setTask("No Task")
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> {task}</Text>
      <View style={styles.button}>
        <Button
          title="ADD"
          onPress={add}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="GET"
          onPress={get}
        />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 40
  },
  button: {
    margin: 20,
    width: 250
  }

});

export default App;
