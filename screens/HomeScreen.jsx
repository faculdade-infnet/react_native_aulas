import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const navigation = props.navigation;
  return (
    <View>
        <Text>Home</Text>
        <Button 
          title="Ir para dashboard"
          // (Nome da rota, parâmetros)
          onPress={() => navigation.navigate(
            'Dashboard', 
            {            
            email: "samuelhermany@hotmail.com",
            }
          )}
        />
    </View>
  )
}