import { View, Text, Pressable, StyleSheet } from 'react-native';
import ProdutoList from "../components/ProdutoList";

// Tela que exibe a lista de produtos
// navigation: Uma do React Navigate pra navegar entre terlas
// produtos: Um array de produtos que será exibido.
export default function ProdutosListScreen({navigation, produtos }) {
    // Cria navegação para tela 'ProdutoShow' e passa o produto selecionado como parâmetro.
    // Define o produto selecionado e muda para a tela de detalhes.
    const action = (produto)=>{
        navigation.navigate('ProdutoShow', produto)
    }

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <ProdutoList produtos={produtos} action={action}/>
            </View>
            <View style={styles.navContainer}>                
                <Pressable style={styles.navOption}
                    onPress={() => {
                        navigation.navigate('ProdutoForm')
                    }}>
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
      alignItems: 'center',
      borderRadius: 50,
    },
    navOptionLabel: {
      fontSize: 20,
    },
  });