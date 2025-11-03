import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AirtimeScreen from '../screens/AirtimeScreen';
import DataScreen from '../screens/DataScreen';
import BillsScreen from '../screens/BillsScreen';
import HistoryScreen from '../screens/HistoryScreen';

// Navigation types
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
  Airtime: undefined;
  Data: undefined;
  Bills: undefined;
  History: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Airtime: undefined;
  Data: undefined;
  Bills: undefined;
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#7f8c8d',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Airtime"
        component={AirtimeScreen}
        options={{
          title: 'Airtime',
          headerStyle: {backgroundColor: '#3498db'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarLabel: 'Airtime',
        }}
      />
      <Tab.Screen
        name="Data"
        component={DataScreen}
        options={{
          title: 'Data',
          headerStyle: {backgroundColor: '#2ecc71'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarLabel: 'Data',
        }}
      />
      <Tab.Screen
        name="Bills"
        component={BillsScreen}
        options={{
          title: 'Bills',
          headerStyle: {backgroundColor: '#e74c3c'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarLabel: 'Bills',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'History',
          headerShown: false,
          tabBarLabel: 'History',
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
