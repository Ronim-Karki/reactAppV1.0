// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import SignUp from './Components/SignUp';

import Input from './Components/Input';
import TabView from './navigation/TabView';
import { AppProvider } from './Components/context';
import ItemsPosted from './ListViews/ItemsPosted';
// const AppContainer = createAppContainer(Navigator);
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Input" component={Input} />
          <Stack.Screen name="Tab" component={TabView} />
          <Stack.Screen name="Items Posted" component={ItemsPosted} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
