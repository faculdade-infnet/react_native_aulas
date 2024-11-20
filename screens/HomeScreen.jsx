import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const navigation = props.navigation;
  return (
    <View>
        <Text>Home</Text>
        <Button 
          title="Ir para dashboard"
          onPress={() => navigation.navigate('Dashboard')}
        />
    </View>
  )
}