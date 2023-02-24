import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import About from '../screens/about';
import Header from '../shared/header';

// for more details visit    https://reactnavigation.org/docs/

const stack = createNativeStackNavigator()

export default function AboutStack () {
    return (
          <stack.Navigator
             screenOptions={{
                 headerStyle: {
                   backgroundColor: 'lightyellow',
                 },

                 headerTintColor: 'orange',

                 headerTitleStyle: {
                   fontWeight: 'bold',
                   fontSize: 27,
                 },
               }}     >
               
            <stack.Screen 
               name="About" 
               component={About}
               options={ ({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} />
               })}  />

          </stack.Navigator>
       );
}
