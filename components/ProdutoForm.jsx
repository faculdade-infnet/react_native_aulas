import { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function ProdutoForm({onSubmit}) {    
    const [produtoNome, setProdutoNome] = useState('');
    const [produtoPreco, setProdutoPreco] = useState('');
    const [produtoLocal, setProdutoLocal] = useState('');
    const [produtoData, setProdutoData] = useState('');

    return (
        <View>
            <Text>Formulário de Cadastro:</Text>
            <TextInput 
                placeholder="Nome"
                keyboardType='default'
                onChangeText={setProdutoNome}
            />
            <TextInput
                placeholder="Preço"
                keyboardType='decimal-pad'
                onChangeText={setProdutoPreco}
            />
            <TextInput 
                placeholder="Local"
                keyboardType='num-pad'
                onChangeText={setProdutoLocal}
            />
            <TextInput 
                placeholder="Data"
                keyboardType='phone-pad'
                onChangeText={setProdutoData}
            />
            <Button title="Enviar" 
                // Armazena os valores dos inputs em uma variável e gera um novo id para o produto
                onPress={()=>{
                    onSubmit({
                        nome: produtoNome, 
                        preco: produtoPreco, 
                        local: produtoLocal, 
                        data: produtoData
                    })
                }}
            />
        </View>
    )
}

