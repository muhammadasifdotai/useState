import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App(): JSX.Element {
  // Logs a message to check if the entire component re-renders when the value changes.
  console.log('Alhamdulillah');
  
  // count will hold the current value.
  const [count, setCount] = useState<number>(0);

  // Function to handle incrementing the count.
  const handleIncrement = (): void => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity style={styles.increment} onPress={handleIncrement}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  increment: {
    borderWidth: 1,
    height: 70,
    width: 101,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    marginTop: 11,
    backgroundColor: 'orange',
  },
});
