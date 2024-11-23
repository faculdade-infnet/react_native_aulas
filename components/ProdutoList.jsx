import { Pressable, FlatList } from 'react-native';
import ProdutoCard from './ProdutoCard';

// Exibe uma lista de produtos com o map
// produtos: Um array de produtos
// action: Uma função do app.jsx para selecionar um produto e navegar para a tela de detalhes
export default function ProdutoList({ produtos, action }) {
    const RenderItem = ({ item }) => (
        <Pressable key={item.id} onPress={() => action(item)}>
            <ProdutoCard prod={item} />
        </Pressable>
    )
    return (
        <FlatList
            data={produtos} // Array de produtos
            renderItem={RenderItem} // Função que renderiza cada item
            keyExtractor={(item) => item.id} // Gera a chave única para cada item
        />
    );
}