import ProdutoForm from "../components/ProdutoForm";

// Tela que exibe o formulário para adicionar um novo produto
// onSubmit: Uma função do app.jsx para adicionar um novo produto à lista de produtos
export default function ProdutoFormScreen({ onSubmit }) {
    return (
        <ProdutoForm onSubmit={onSubmit} />
    )
}