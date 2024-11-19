import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';

// Função construtora
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Objeto do tipo stack para navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}