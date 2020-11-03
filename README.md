# Wallet_APP
Wallet_app is a react native application that is used to track expense records. This application is built watching tutorials from BoltSkills.
https://www.youtube.com/watch?v=jluConB3sro&list=PLr5IOV1YXoFXufIk1q1pRkI0LbnpF1EV9

### Features 
Add Expense


### Learning Outcomes
eact UI Components
React Navigation
Redux
Animations

Let's Start with React Native.

What is React Native?
React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React along with native platform capabilities.
You can learn once and use everywhere , whether for Android , iOS, macOS, Windows and Webs

Lets begin
#### Choose desired location in your computer
~\RN_Projects
#### Open Command Line an initialize RN project

npx react-native init <app_name>


## Add dependicies 
that will be used in this app by using CLI 

###### npm install redux
Redux is an open-source JavaScript library for managing application state.
###### npm install redux-thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
###### npm install react-redux
middleware to connect react and redux
###### npm install native-base
NativeBase is an open source framework to build React Native apps over a single JavaScript codebase for Android and iOS.
###### npm install react-native-gesture
React Native Gesture Handler provides native-driven gesture management APIs for building best possible touch-based experiences in React Native
###### npm install react-native-svg
react-native-svg provides SVG support to React Native on iOS and Android, and a compatibility layer for the web. // shapes
###### npm install react-native-vector-icons
icons library
###### npm install react-native-reanimated
animations
###### npm install @react-navigation/native
for navigations between screens 
###### npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
all dependencies that will be needed for navigations
###### npm install @react-navigation/stack
command for stack navigations (other navigations are tab navigation and drawer navigations)

#### Move into the folder and open code editor to make changes

Visit to : https://reactnavigation.org/docs/hello-react-navigation

create a directory src/Components
components directory will hold all our screens and ui components
create HomeScreen.js in it

//In HomeScreen.js

import React from 'react';
import {View,Text} from 'react-native';
function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen


import HomeScreen.js in App.js

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 

### Boom the app is running

Add another screen AddTransaction.js

Now Move towards Redux 

What is Redux?
Redux is a predictable state container for JavaScript apps.
It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.


Create Store directory in src and add index.js file

create subdirectory as Reducers and add two files
1. index.js
2. Transaction.js

