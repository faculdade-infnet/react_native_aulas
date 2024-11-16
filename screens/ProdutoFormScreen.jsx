import ProdutoForm from "../components/ProdutoForm";

export default function ProdutoListScreen({onSubmit}) {
    return (
        <ProdutoForm onSubmit={onSubmit} /> 
    )
}