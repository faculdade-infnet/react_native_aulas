import { View, Text, StyleSheet, Platform } from 'react-native';

// Exibir um card com os dados de um produto
// prod: objeto com os dados do produto
export default function ProdutoCard({ prod }) {
   return (
      <View style={styles.container}>
         {/* {Platform.OS == 'web' ? <Text>Web</Text> : <Text>Android</Text>} */}
         <View style={styles.cardHeader}>
            <Text style={styles.cardTextH3}>{prod.nome}</Text>
            <Text style={styles.cardTextH4}>R$ {prod.preco.toFixed(2)}</Text>
         </View>
         <View style={styles.cardFooter}>
            <Text>{prod.local}</Text>
            <Text>{prod.data}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({     
   cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   cardTextH3: {
      fontSize: 18,
   },
   cardTextH4: {
      fontSize: 16,
   }
});