import { useEffect, useState } from 'react';
import { Platform, Pressable } from 'react-native';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ProdutosListScreen from './screens/ProdutosListScreen';
import ProdutoFormScreen from './screens/ProdutoFormScreen';
import ProdutoShowScreen from './screens/ProdutoShow/ProdutoShowScreen';

export default function App() {
  // Determina qual tela deve ser exibida. produtos/formulário/detalhes
  const [screen, setScreen] = useState(1);
  const [produto, setProduto] = useState(null);
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

  // Define o produto selecionado e muda para a tela de detalhes (screen = 3).
  const action = (prod) => {
    setProduto(prod);
  }

  // Quando produto selecionado, muda para tela detalhes (screen = 3).
  useEffect(() => {
    if (produto) setScreen(3);
  }, [produto]);

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        {/* Exibe a lista de produtos e permite selecionar um produto
         action = função que recebe o produto selecionado e muda para tela de detalhes */}
        {screen == 1 && <ProdutosListScreen produtos={produtos} action={action}/>}
        {/* Formulário para adicionar um produto */}
        {screen == 2 && <ProdutoFormScreen onSubmit={onSubmit} />}
        {/* Detalhes do produto selecionado */}
        {screen == 3 && <ProdutoShowScreen produto={produto} />}
      </View>
      {/* <ProdutoList produtos={produtos} />
      <ProdutoForm onSubmit={onSubmit} /> */}
      <View style={styles.navContainer}>
        <Pressable style={styles.navOption} onPress={() => setScreen(1)}><Text>Lista</Text></Pressable>
        <Pressable style={styles.navOption} onPress={() => setScreen(2)}>
          <Text>Formulário</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    ...Platform.select({
      android: { paddingTop: StatusBar.currentHeight, },
      default: { paddingTop: 12, },
    }),
    
  },
  screenContainer: {
    flexGrow: 1,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  navOption: {
    paddingVertical: 8,
    width: 100,
    backgroundColor: "#8ecae6",
    alignItems: 'center',
    borderRadius: 10,
  }
});