import ProdutoList from "../components/ProdutoList";

// Tela que exibe a lista de produtos
// produtos: Um array de produtos que será exibido.
// action: Uma função do app.jsx para selecionar um produto e navegar para a tela de detalhes
export default function ProdutosListScreen({ produtos, action }) {
    return (
        <ProdutoList produtos={produtos} action={action}/>
    );
}