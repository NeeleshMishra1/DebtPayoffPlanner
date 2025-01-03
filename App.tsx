
import React from 'react';
import { LogBox, StyleSheet, Text, View, } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';

function App() {
  LogBox.ignoreAllLogs()
  return (
    <RootNavigation/>
  );
}

export default App;

const style = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
})