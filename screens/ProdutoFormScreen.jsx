import { useState } from "react";
import ProdutoForm from "../components/ProdutoForm";
import { ActivityIndicator, View } from "react-native"

// Tela que exibe o formulário para adicionar um novo produto
export default function ProdutoFormScreen() {
    const url = "https://react-native-infnet-default-rtdb.firebaseio.com/"
    const resource = "produtos"
    const [isLoading, setLoading] = useState(false);
  
    // Recebe um novo produto do formulário e gera um ID único e adiciona o produto à lista de produtos
    const onSubmit = (novoProduto) => {
      setLoading(true);
      fetch(`${url}${resource}.json`, {
          method: "POST", // GET
          body: JSON.stringify(novoProduto)
      })
      .then(async resp => {
          const id = await resp.json();        
          const listaProdutos = [...produtos];
          novoProduto.id = id.name;
          listaProdutos.push(novoProduto);
          setProdutos(listaProdutos);
      })
      .catch(error => { Alert.alert(error.message); })
      .finally(_ => setLoading(false));
    }


    return (
        <View>
            <ProdutoForm onSubmit={onSubmit} />
            {isLoading && <ActivityIndicator size={"large"} />}
        </View>
    )
}