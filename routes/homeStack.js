import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';


// for more details visit    https://reactnavigation.org/docs/


const stack = createNativeStackNavigator()

const vishal = 'hell vishal'

export default function HomeStack () {
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
               name="Home" 
               component={Home}
               options= { ({ navigation }) => ({
                  headerTitle: () => <Header navigation={navigation} />,  

                  headerStyle: {
                     backgroundColor: 'coral',
                     height: 60,
                   },

                  headerTintColor: 'blue',

                  headerTitleStyle: {
                     fontWeight: 'bold',
                     fontSize: 25,
                     //color: 'yellow',
                   }, 
                     })}    />
               
            <stack.Screen 
               name="Review" 
               component={ReviewDetails}
               options={{ title: 'Review Details' }}  />

          </stack.Navigator>
       );
}
