import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import data from './screen/data'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name='Al-Quran'
                  component={data}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App