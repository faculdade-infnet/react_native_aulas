import { Pressable, FlatList, StyleSheet, Platform } from 'react-native';
import ProdutoCard from './ProdutoCard';

// Exibe uma lista de produtos com o map
// produtos: Um array de produtos
// action: Uma função do app.jsx para selecionar um produto e navegar para a tela de detalhes
export default function ProdutoList({ produtos, action }) {
   const RenderItem = ({ item }) => (
      <Pressable key={item.id} 
         style={({ pressed }) => [
            { 
               backgroundColor: pressed ? '#f1faee' : '#F9F7F3'
            },
            styles.pressableContainer
         ]}
         onPress={() => action(item)}>
         <ProdutoCard prod={item} />
      </Pressable>
   )
   
   return (
      <FlatList
         data={produtos}                  // Array de produtos
         renderItem={RenderItem}          // Função que renderiza cada item
         keyExtractor={(item) => item.id} // Gera a chave única para cada item
      />
   );
}

const styles = StyleSheet.create({
   pressableContainer: {
      paddingHorizontal: 5,
      paddingVertical: 3,
      marginVertical: 2,
      border: '1px solid black',
      borderWidth: 1,
      borderColor: '#8d99ae',
      borderRadius: 5,
      ...Platform.select({
         android: { marginTop: 10 },
         ios: { marginTop: 15 },
         web: { marginTop: 20 },
      })
   },
});