import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splace from "../../screens/splaceScrren";
import Tutorial from "../../screens/tutorialScrren";
import Login from "../../screens/loginScrren";
import Home from "../../screens/homeScreen";
import BottomTabs from "../bottomNavigation";
import Profile from "../../screens/profileScreen";
import Account from "../../screens/accountScreen";

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splace"
          component={Splace}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="tutorial"
          component={Tutorial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bottom"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="account"
          component={Account}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
