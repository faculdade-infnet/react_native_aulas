import { Pressable, FlatList, StyleSheet, Platform } from 'react-native';
import ProdutoCard from './ProdutoCard';

// Exibe uma lista de produtos com o map
// produtos: Um array de produtos
// action: Uma função do app.jsx para selecionar um produto e navegar para a tela de detalhes
export default function ProdutoList({ produtos, actionRemove, actionShow }) {   
   const createItemView = ({ item }) => (
      <ProdutoCard 
         prod={item}
         actionRemove={actionRemove}
         actionShow={actionShow}
      />
   );

   return (
      <FlatList
         data={produtos}                  // Array de produtos
         renderItem={createItemView}      // Função que renderiza cada item
         keyExtractor={(item) => item.id} // Gera a chave única para cada item
      />
   );
}

const styles = StyleSheet.create({
   pressableContainer: {
      // paddingHorizontal: 5,
      // paddingVertical: 3,
      // marginVertical: 2,      
      borderRadius: 5,
      ...Platform.select({
         android: { marginTop: 10 },
         ios: { marginTop: 15 },
         web: { marginTop: 20 },
      })
   },
});