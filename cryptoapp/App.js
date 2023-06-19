import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './Routes/Index';
import Modal from './components/Modal/Modal';
import { colorPallet } from './logic/ColorPallet';

export default function App() {

  const Stack = createNativeStackNavigator();

  //Main app root

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Root'
        screenOptions={{
          headerTintColor: colorPallet.color_6,
            headerStyle: {
            backgroundColor: colorPallet.color_1
            },
          }}>
          <Stack.Group>
            {/*Main screen*/}
            <Stack.Screen name='Root' component={Index}/>
          </Stack.Group>

          <Stack.Group screenOptions={{ 
            presentation: 'modal'
          }}>
            {/*Show the modal screens of the App*/}
            <Stack.Screen name='Modal' component={Modal}/>
          </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
