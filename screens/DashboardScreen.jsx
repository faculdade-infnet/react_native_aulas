import { View, Text, Button } from "react-native";

export default function DashboardScreen(props) {
  const navigation = props.navigation;
  const route = props.route;
  // Parametros que foram passados no objeto props
  // O nome dos pâmetrores devem ser os mesmos que foram passados no objeto props
  const params = route.params;

  return (
    <View>
        <Text>Dashboard</Text>
        <Text>{params.nome}</Text>
        <Text>{params.email}</Text>
        <Button 
          title="Ir para home"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}