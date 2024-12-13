import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "../../assets";
import { vh, vw } from "../../utils/dimensions";
import Home from "../../screens/homeScreen";
import Debts from "../../screens/debtsScreen";
import Strategy from "../../screens/strategyScreen";
import Plan from "../../screens/planScreen";
import Track from "../../screens/trackScreen";

type TabParamList = {
  Home: undefined;
  Debts: undefined;
  Strategy: undefined;
  Plan: undefined;
  Track: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Georgia",
          fontWeight: "300",
          marginTop: 10,
        },
        tabBarStyle: {
          backgroundColor: "white",
          height: vh(90),
          paddingHorizontal: 10,
        },
        tabBarActiveTintColor: "#00DEE3",
        tabBarInactiveTintColor: "#BABCB6",
        tabBarIcon: ({ focused,}) => {
          let iconName: ImageSourcePropType;

          switch (route.name) {
            case "Home":
              iconName = Icon.home;
              break;
            case "Debts":
              iconName = Icon.debts;
              break;
            case "Strategy":
              iconName = Icon.strategy;
              break;
            case "Plan":
              iconName = Icon.plan;
              break;
            case "Track":
              iconName = Icon.track;
              break;
            default:
              iconName = Icon.home;
          }

          return (
            <Image
              source={iconName}
              style={
                {
                  width: vw(25),
                  height: vh(25),
                  tintColor: focused ? "#00DEE3" : "#BABCB6",
                  marginTop: 10,
                } as ImageStyle
              }
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Debts" component={Debts} />
      <Tab.Screen name="Strategy" component={Strategy} />
      <Tab.Screen name="Plan" component={Plan} />
      <Tab.Screen name="Track" component={Track} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
