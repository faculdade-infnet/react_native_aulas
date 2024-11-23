import { View, Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import ProdutoList from "../components/ProdutoList";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";

// Tela que exibe a lista de produtos
// navigation: Uma do React Navigate pra navegar entre telas
export default function ProdutosListScreen({ navigation }) {  
  const url = "https://react-native-infnet-default-rtdb.firebaseio.com/"
  const resource = "produtos"

  const [produtos, setProdutos] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  /*{
      "xpto": { id: 4, nome: "Remédio para dor", preco: 24.00, local: "Farmácia", data: "2024-10-24" },
      "xyz": { id: 5, nome: "Leite", preco: 7.30, local: "Mercado", data: "2024-10-24" }
  }*/

  // Requisição GET com API, processa dados e atualizar o estado do componente
  useEffect(() => {
    setLoading(true);
    fetch(`${url}${resource}.json`)     // GET
        .then(res => res.json())        // Processa dados recebidos
        .then(prods => {
            const produtosIds = Object.keys(prods);
            const produtos = Object.values(prods);
            const total = produtos.length;
            let progress = 0;
            let listaProdutos = [];
            produtosIds.forEach((id, index) => {
                listaProdutos.push({ id, ...produtos[index]});  // Monta um objeto combinando os atributos
                progress = (index + 1) / total;                 // Calcula o progresso, item a item
                setProgress(progress);                           // Atualiza o progresso  
            });
            setProdutos(listaProdutos);
        })
        .catch(error => setMessage(error.message))
        .finally(setLoading(false));
  }, []);

  // Cria navegação para tela 'ProdutoShow' e passa o produto selecionado como parâmetro.
  // Define o produto selecionado e muda para a tela de detalhes.
  const action = (produto) => {
    navigation.navigate('ProdutoShow', produto);
  }

  return (
    <View style={styles.container}>
      {/* isLoading = true, exibe um indicador de carregamento (ActivityIndicator). */}
      {isLoading && <ActivityIndicator size="large" />}
      {/* isLoading = false e message != null, exibe mensagem. */}
      {!isLoading && message && <Text>{message}</Text>}
      {/* BarraDeProgresso cujo valor exibido é controlado pela variável progress. valor entre 0 e 1*/}
      <ProgressBar progress={progress} />
      {/* isLoading = false e produtos tiver elementos, exibe View com lista de produtos. */}
      {!isLoading && produtos.length > 0 && (
          <View style={styles.listContainer}>
              <ProdutoList produtos={produtos} action={action} />
          </View>)}
      {/* isLoading = false e produtos == 0, exibe mensagem "Nenhum produto cadastrado". */}
      {!isLoading && produtos.length == 0 && (<Text>Nenhum produto cadastrado.</Text>)}
      <View style={styles.navContainer}>
          <Pressable
              style={styles.navOption}
              onPress={() => {
                  navigation.navigate('ProdutoForm');
              }}
          >
              <Text style={styles.navOptionLabel}>+</Text>
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
  },
  listContainer: {
      flex: 1,
  },
  navContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
  },
  navOption: {
      paddingVertical: 8,
      width: 30,
      backgroundColor: "#8ecae6",
      alignItems: "center",
      borderRadius: 50,
  },
  navOptionLabel: {
      fontSize: 20,
  }
});