import HomePage from '@/pages/home';
import MyPage from '@/pages/my';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Iconify } from 'react-native-iconify';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'TsukuARdGothicStd-D': require('./assets/fonts/TsukuARdGothicStd-D.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Iconify icon="heroicons:home-solid" color={color} size={size}/>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My"
        component={MyPage}
        options={{
          tabBarLabel: 'My',
          tabBarIcon: ({ color, size }) => (
            <Iconify icon="heroicons:user-solid" color={color} size={size}/>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
