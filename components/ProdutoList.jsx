import { View, Text, Pressable } from 'react-native';
import ProdutoCard from './ProdutoCard';

// Exibe uma lista de produtos com o map
// produtos: Um array de produtos
// action: Uma função do app.jsx para selecionar um produto e navegar para a tela de detalhes
export default function ProdutoList({ produtos, action }) {
    return (
        <View>
            <Text>Produtos</Text>
            {produtos?.map(prod => (
                <Pressable key={prod.id} onPress={() => action(prod)}>
                    <ProdutoCard prod={prod} />
                </Pressable>
            ))}
        </View>
    );
}