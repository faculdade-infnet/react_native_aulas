import { useState } from 'react';
import ProdutosListScreen from './screens/ProdutosListScreen';
import ProdutoFormScreen from './screens/ProdutoFormScreen';
import ProdutoShowScreen from './screens/ProdutoShow/ProdutoShowScreen';
import { NavigationContainer } from '@react-navigation/native';

// Função construtora
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Objeto do tipo stack para navegação
const Stack = createNativeStackNavigator();

export default function App() {      
   const [produtos, setProdutos] = useState([
     { id: 1, nome: "Arroz", preco: 20.50, local: "Mercado", data: "2024-10-24" },
     { id: 2, nome: "Sabonete", preco: 5.99, local: "Farmácia", data: "2024-10-24" },
     { id: 3, nome: "Café", preco: 12.75, local: "Mercado", data: "2024-10-24" },
     { id: 4, nome: "Remédio para dor", preco: 24.00, local: "Farmácia", data: "2024-10-24" },
     { id: 5, nome: "Leite", preco: 7.30, local: "Mercado", data: "2024-10-24" }
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
      <Stack.Navigator>
        <Stack.Screen 
          name="ProdutoList"
          options={()=>({
            title: "Lista de Produtos"
          })}
        >
          {(props) => <ProdutosListScreen {...props} produtos={produtos}/>}
        </Stack.Screen>
        <Stack.Screen 
          name="ProdutoForm" 
          options={()=>({
            title: "Cadastro de Produto"
          })}
        >
          {() => <ProdutoFormScreen onSubmit={onSubmit} />}
        </Stack.Screen>
        <Stack.Screen 
          name='ProdutoShow' 
          options={() => ({
            title: "Produto" 
          })}
          component={ProdutoShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}