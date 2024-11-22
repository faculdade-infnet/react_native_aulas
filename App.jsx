// #region Imports
import { useState } from 'react';
import ProdutosListScreen from './screens/ProdutosListScreen';
import ProdutoFormScreen from './screens/ProdutoFormScreen';
import ProdutoShowScreen from './screens/ProdutoShow/ProdutoShowScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Objeto do tipo stack para navegação
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// #endregion Imports

export default function App() {    
  //URL = https://react-native-infnet-default-rtdb.firebaseio.com/
  // Recurso produtos
  // uri = url + recurso
  // https://react-native-infnet-default-rtdb.firebaseio.com/produtos.json
  // GET, POST, PUT, PATCH, DELETE
  // Texto "{ 'props': 'valores' }"
  // const url = "https://react-native-infnet-default-rtdb.firebaseio.com/";
  // const resource = "produtos";
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Arroz", preco: 20.50, local: "Mercado", data: "2024-10-24" },
    { id: 2, nome: "Sabonete", preco: 5.99, local: "Farmácia", data: "2024-10-24" },
    { id: 3, nome: "Café", preco: 12.75, local: "Mercado", data: "2024-10-24" },
    { id: 4, nome: "Remédio para dor", preco: 24.00, local: "Farmácia", data: "2024-10-24" },
    { id: 5, nome: "Leite", preco: 7.30, local: "Mercado", data: "2024-10-24" }
  ]);
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="ProdutoList"
          options={()=>({
            title: "Lista de Produtos"
          })}
        >
          {(props) => <ProdutosListScreen {...props} produtos={produtos}/>}
        </Drawer.Screen>
        <Drawer.Screen 
          name="ProdutoForm" 
          options={()=>({
            title: "Cadastro de Produto"
          })}
          component={ProdutoFormScreen}
        >
        </Drawer.Screen>
        <Drawer.Screen 
          name='ProdutoShow' 
          options={() => ({
            title: "Produto" 
          })}
          component={ProdutoShowScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}