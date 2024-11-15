import { View, Text } from 'react-native';
export default function ProdutoCard({ prod }) {
    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{prod.nome}</Text>
                <Text>R$ {Number(prod.preco).toFixed(2)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{prod.local}</Text>
                <Text>{prod.data}</Text>
            </View>
        </View>
    );
}