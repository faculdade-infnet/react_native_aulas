import { View, Text, Button } from "react-native";

export default function DashboardScreen(props) {
  const navigation = props.navigation;

  return (
    <View>
        <Text>Dashboard</Text>
        <Button 
          title="Ir para home"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}