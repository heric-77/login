import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MaterialBottomTab = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
      
      <Stack.Screen
        name="HomeNavigation"
        component={createMaterialBottomTabNavigator}
        options={{
          headerShown: false,
          title: "Tela do aplicativo",
        }}
      />
    </Stack.Navigator>
  );
};


export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Home2" component={HomeScreen} />
      <Tab.Screen name="Home3" component={HomeScreen} />
    </Tab.Navigator>
  );
};