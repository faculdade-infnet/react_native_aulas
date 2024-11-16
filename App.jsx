import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProdutoForm from './components/ProdutoForm';
import ProdutoList from './components/ProdutoList';

export default function App() {
  const [produtos, setProdutos] = useState([]);

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

  const onSubmit = (novoProduto) => {        
    const listaProdutos = [...produtos];
    novoProduto.id = gerarNovoId();
    listaProdutos.push(novoProduto);
    setProdutos(listaProdutos);  
  } 

  return (
    <View style={styles.container}>
      <ProdutoList produtos={produtos} />
      <ProdutoForm onSubmit={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});