import { Text, View } from "react-native";
import ProdutoCard from "./ProdutoCard";


export default function ProdutoList({produtos}) {
    return (
        <View>
            <Text>Produtos:</Text>
            {produtos.map((prod, i) => <ProdutoCard key={i} prod={prod} />)}
        </View>
    )
}