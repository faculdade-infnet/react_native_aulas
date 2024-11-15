import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
     <Image style={styles.imagem}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png"
        }}        
      />
      {nomes.map((nome, i) => <Text key={i}>{nome}</Text>)}
      <Text>Informe seu nome:</Text>
      <TextInput placeholder="Nome completo" onChangeText={setNome}/>
      <Button style={styles.paragraph} title="Enviar" 
        onPress={() => {
          const listaNomes = [...nomes];
          listaNomes.push(nome);
          setNomes(listaNomes);
      }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imagem:{    
    width: 50, 
    height: 50,
  },
  paragraph: {
    width: '100%',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});