import { useState } from 'react';
import ProdutosListScreen from './screens/ProdutosListScreen';
import ProdutoFormScreen from './screens/ProdutoFormScreen';
import ProdutoShowScreen from './screens/ProdutoShow/ProdutoShowScreen';
import { NavigationContainer } from '@react-navigation/native';

// Função construtora
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Objeto do tipo stack para navegação
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {      
   const [produtos, setProdutos] = useState([
     { id: 1, nome: "Arroz", preco: 20.50, local: "Mercado", data: "2024-10-24" },
     { id: 2, nome: "Sabonete", preco: 5.99, local: "Farmácia", data: "2024-10-24" },
     { id: 3, nome: "Café", preco: 12.75, local: "Mercado", data: "2024-10-24" },
     { id: 4, nome: "Remédio para dor", preco: 24.00, local: "Farmácia", data: "2024-10-24" },
     { id: 5, nome: "Leite", preco: 7.30, local: "Mercado", data: "2024-10-24" },
     { id: 6, nome: "Arroz", preco: 20.50, local: "Mercado", data: "2024-10-24" },
     { id: 7, nome: "Sabonete", preco: 5.99, local: "Farmácia", data: "2024-10-24" },
     { id: 8, nome: "Café", preco: 12.75, local: "Mercado", data: "2024-10-24" },
     { id: 9, nome: "Remédio para dor", preco: 24.00, local: "Farmácia", data: "2024-10-24" },
     { id: 10, nome: "Leite", preco: 7.30, local: "Mercado", data: "2024-10-24" },
     { id: 11, nome: "Arroz", preco: 20.50, local: "Mercado", data: "2024-10-24" },
     { id: 12, nome: "Sabonete", preco: 5.99, local: "Farmácia", data: "2024-10-24" },
     { id: 13, nome: "Café", preco: 12.75, local: "Mercado", data: "2024-10-24" },
     { id: 14, nome: "Remédio para dor", preco: 24.00, local: "Farmácia", data: "2024-10-24" },
     { id: 15, nome: "Leite", preco: 7.30, local: "Mercado", data: "2024-10-24" },
     { id: 16, nome: "Arroz", preco: 20.50, local: "Mercado", data: "2024-10-24" },
     { id: 17, nome: "Sabonete", preco: 5.99, local: "Farmácia", data: "2024-10-24" },
     { id: 18, nome: "Café", preco: 12.75, local: "Mercado", data: "2024-10-24" },
     { id: 19, nome: "Remédio para dor", preco: 24.00, local: "Farmácia", data: "2024-10-24" },
     { id: 20, nome: "Leite", preco: 7.30, local: "Mercado", data: "2024-10-24" },
   ]);
 
   // Gerar um ID único para um novo produto
   // último Id + 1
   const gerarNovoId = _ => {
     const listaProdutos = [...produtos];
     const ultimoIndice = listaProdutos.length - 1;
     if (ultimoIndice > 0) {
       const ultimoProd = listaProdutos[ultimoIndice];
       const ultimoId = ultimoProd.id;
       return ultimoId + 1;
     }
     return 1;
   }
 
   // Recebe um novo produto do formulário e gera um ID único e adiciona o produto à lista de produtos
   const onSubmit = (novoProduto) => {
     const listaProdutos = [...produtos];
     novoProduto.id = gerarNovoId();
     listaProdutos.push(novoProduto);
     setProdutos(listaProdutos);
   }

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
        >
          {() => <ProdutoFormScreen onSubmit={onSubmit} />}
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