import { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import ProdutoListScreen from './screens/ProdutoListScreen';
import ProdutoFormScreen from './screens/ProdutoFormScreen';

export default function App() {
  const [screen, setScreen] = useState(1);  
  const [produtos, setProdutos] = useState([]);

  const gerarNovoId = _ => {
    const listaProdutos = [...produtos];
    return 1;
  }

  const onSubmit = (novoProduto) => {        
    const listaProdutos = [...produtos];
    novoProduto.id = gerarNovoId();
    listaProdutos.push(novoProduto);
    setProdutos(listaProdutos);  
  } 

  return (
    <View style={styles.container}>
      <View>
        {screen === 1 && <ProdutoListScreen produtos={produtos} />}
        {screen === 2 && <ProdutoFormScreen onSubmit={onSubmit} />}      
      </View>
      <View style={styles.navContainer}>
        <Pressable onPress={() => setScreen(1)} style={styles.navOption} >
            <Text>Lista</Text>
        </Pressable>
        <Pressable onPress={() => setScreen(2)} style={styles.navOption} >
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
    paddingTop: 20,
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