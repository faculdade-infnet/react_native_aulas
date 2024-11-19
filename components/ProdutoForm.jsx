import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Exibir um formulário para cadastrar um novo produto
export default function ProdutoForm({ onSubmit }) {
    // Estado para armazenar os valores dos campos do formulário
    const [produtoNome, setProdutoNome] = useState('');
    const [produtoPreco, setProdutoPreco] = useState('');
    const [produtoLocal, setProdutoLocal] = useState('');
    const [produtoData, setProdutoData] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header1}>Cadastro de Produto</Text>
            <TextInput style={styles.textInput}
                placeholder='Nome'
                keyboardType='default'
                onChangeText={setProdutoNome}
            />
            <TextInput style={styles.textInput}
                placeholder='Preço'
                keyboardType='decimal-pad'
                onChangeText={setProdutoPreco}
            />
            <TextInput style={styles.textInput}
                placeholder='Local'
                keyboardType='default'
                onChangeText={setProdutoLocal}
            />
            <TextInput style={styles.textInput}
                placeholder='Data'
                keyboardType='default'
                onChangeText={setProdutoData}
            />
            <Button
                title='Salvar'
                onPress={() => {
                    const novoProduto = {
                        nome: produtoNome,
                        preco: +produtoPreco,
                        local: produtoLocal,
                        data: produtoData,
                    };
                    onSubmit(novoProduto);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    header1: {
        fontSize: 26,
        textAlign: 'center',
        margin: 6,
    },
    textInput: {
        fontSize: 20,
        padding: 10,
        margin: 4,
        backgroundColor: "#ced4da",
        borderBottomWidth: 1,
        borderBottomColor: "#6c757d",
        borderRadius: 5,
    }
})