import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import {colors} from './styles/colors';
import CreatePage from './pages/CreatePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreatePage}
          options={{
            title: 'Create',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
