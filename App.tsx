
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Splace from './src/screens/splaceScrren';
import RootNavigation from './src/navigation/rootNavigation';

function App() {
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