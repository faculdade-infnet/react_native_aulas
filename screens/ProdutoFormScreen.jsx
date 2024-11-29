import { useState } from "react";
import ProdutoForm from "../components/ProdutoForm";
import { ActivityIndicator, View } from "react-native"

// Tela que exibe o formulário para adicionar um novo produto ao banco de dados
export default function ProdutoFormScreen() {
   //URL = https://react-native-infnet-default-rtdb.firebaseio.com/
   // Recurso produtos
   // uri = url + recurso
   // https://react-native-infnet-default-rtdb.firebaseio.com/produtos.json
   // GET, POST, PUT, PATCH, DELETE
   // Texto "{ 'props': 'valores' }"
   // const url = "https://react-native-infnet-default-rtdb.firebaseio.com/";
   // const resource = "produtos";  

   //Base URL para acessar o banco de dados no Firebase.
   const url = "https://react-native-infnet-default-rtdb.firebaseio.com/"
   // Recurso (endpoint) específico no banco
   const resource = "produtos"
   // Indica se o processo de envio está em andamento
   const [isLoading, setLoading] = useState(false);
   
   // Enviar um novo produto pelo formulário via POST no firebase
   // setLoading = true, exibe o circulo de carregamento, ao finalizar o envio, setLoading = false
   const onSubmit = (novoItem) => {
      setLoading(true);
      fetch(`${url}${resource}.json`, {
            method: "POST", // GET
            body: JSON.stringify(novoItem)
      })
      .then(async resp => {
            const id = await resp.json();        
            const listaProdutos = [...produtos];
            novoItem.id = id.name;
            listaProdutos.push(novoItem);
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