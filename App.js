import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/Welcome';
import MemberSing from './src/components/MemberSing';
import MemberResult from './src/components/MemberResult';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="WelcomeScreen" component={Welcome}/>
        <Stack.Screen name="MemberSingScreen" component={MemberSing}/>
        <Stack.Screen name="MemberResultScreen" component={MemberResult}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
