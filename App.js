import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* Redux */
import { Provider } from "react-redux";
import Store from './src/Store';
/* Components */
import HomeScreen from './src/Components/HomeScreen';
import AddTransaction from './src/Components/AddTransaction';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store ={ Store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  
                        options={{ title: 'Expense Tracker', }}
          />
          <Stack.Screen name="Add" component={AddTransaction} 
                        options={{ title: 'Add Expense', }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
