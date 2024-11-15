import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ProdutoCard from './components/ProdutoCard';

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [produtoNome, setProdutoNome] = useState('');
  const [produtoPreco, setProdutoPreco] = useState('');
  const [produtoLocal, setProdutoLocal] = useState('');
  const [produtoData, setProdutoData] = useState('');

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
  return (
    <View style={styles.container}>
      <View>
        <Text>Produtos:</Text>
        {produtos.map(prod => <ProdutoCard prod={prod} />)}
      </View>
      <View>
        <Text>Formulário de Cadastro:</Text>
          <TextInput 
            placeholder="Nome"
            keyboardType='default'
            onChangeText={setProdutoNome}
          />
          <TextInput 
            placeholder="Preço"
            keyboardType='decimal-pad'
            onChangeText={setProdutoPreco}
          />
          <TextInput 
            placeholder="Local"
            keyboardType='num-pad'
            onChangeText={setProdutoLocal}
          />
          <TextInput 
            placeholder="Data"
            keyboardType='phone-pad'
            onChangeText={setProdutoData}
          />
          <Button title="Enviar" 
            // Armazena os valores dos inputs em uma variável e gera um novo id para o produto
            onPress={() => {
              const novoProduto = {
                nome: produtoNome,
                preco: produtoPreco,
                local: produtoLocal,
                data: produtoData
              }
              const listaProdutos = [...produtos];
              novoProduto.id = gerarNovoId();
              listaProdutos.push(novoProduto);
              setProdutos(listaProdutos);
          }}
          />
      </View>
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