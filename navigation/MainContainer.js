import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CommentScreen from './screens/CommentScreen';

//Screen names
const homeName = "መፈለጊያ";
const AboutName = "ስለ እኛ";
const CommentName = "አስተያየት";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'search' : 'search-outline';

            } else if (rn === AboutName) {
              iconName = focused ? 'information-circle' : 'information-circle-outline';

            } else if (rn === CommentName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline';

            } else if (rn === LogoutName) {
              iconName = focused ? 'log-out' : 'log-out-outline';

            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name={AboutName} component={AboutScreen} options={{ headerShown: false }} />
        <Tab.Screen name={CommentName} component={CommentScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;