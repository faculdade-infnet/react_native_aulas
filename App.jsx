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
   return (
      <NavigationContainer>
         <Drawer.Navigator>
         <Drawer.Screen 
            name="ProdutoList"
            options={()=>({
               title: "Lista de Produtos"
            })}
         >
            {(props) => <ProdutosListScreen {...props}/>}
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