import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splace from "../../screens/splaceScrren";
import Tutorial from "../../screens/tutorialScrren";
import Login from "../../screens/loginScrren";
import BottomTabs from "../bottomNavigation";
import Profile from "../../screens/profileScreen";
import Account from "../../screens/accountScreen";
import { ScreenNames } from "../screeenName";
import Otp from "../../screens/otpScreen";
import Detail from "../../screens/detailScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={ScreenNames.Splace}
          component={Splace}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={ScreenNames.Tutorial}
          component={Tutorial}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name={ScreenNames.login}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={Otp}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.Bottom}
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.profile}
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.account}
          component={Account}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
