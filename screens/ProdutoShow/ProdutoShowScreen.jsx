import { View , Text } from 'react-native';
import Styles from './ProdutoShowStyle';

// Tela que exibe os detalhes de um produto
// produto: O produto que será exibido, com pprops(nome, preço, local, data, etc)
export default function ProdutoShowScreen({ produto }) {
    const { nome, preco, local, data } = produto;
    return (
        <View style={Styles.container}>
            <Text style={Styles.header2}>{nome}</Text>
            <Text style={Styles.header3}>R$ {preco}</Text>
            <Text style={Styles.text}>{local}</Text>
            <Text style={Styles.text}>{data}</Text>
        </View>
    );
}