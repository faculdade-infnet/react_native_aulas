import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Pressable } from 'react-native';

// Exibir um formulário para cadastrar um novo produto
export default function ProdutoForm({ onSubmit }) {
   // Estado para armazenar os valores dos campos do formulário
   const [produtoNome, setProdutoNome] = useState('');
   const [produtoPreco, setProdutoPreco] = useState('');
   const [produtoLocal, setProdutoLocal] = useState('');
   const [produtoPromocao, setProdutoPromocao] = useState(false);
   const [produtoData, setProdutoData] = useState(new Date());
   const [dateTimePickerShow, setDateTimePickerShow] = useState(false);

   const listaLocais = [
       { label: 'Mercado', value: 'Mercado' },
       { label: 'Farmácia', value: 'Farmácia' },
       { label: 'Padaria', value: 'Padaria' },
       { label: 'Bar', value: 'Bar' },
       { label: 'Lanchonete', value: 'Lanchonete' },
   ]

   return (
      <View style={styles.container}>
         <Text style={styles.header1}>Cadastro de Produto</Text>
         <TextInput style={styles.textInput}
            placeholder='Nome'
            keyboardType='default'
            value={produtoNome}
            onChangeText={setProdutoNome}
         />
         <TextInput style={styles.textInput}
            placeholder='Preço (R$)'
            keyboardType='decimal-pad'
            // returnKeyType='send'
            //secureTextEntry={true}
            value={produtoPreco}
            onChangeText={setProdutoPreco}
         />
         {/* <TextInput style={styles.textInput}
            placeholder='Local'
            keyboardType='default'
            value={produtoLocal}
            onChangeText={setProdutoLocal}
         /> */}
         {/* Botçao para exibir lista com seleeção de local */}
         <View style={styles.textInput}>
            <Text>Local</Text>
            <Picker
               selectedValue={produtoLocal}
               onValueChange={setProdutoLocal}
            >
               <Picker.Item label='Selecione uma Opção' value='' />
               {listaLocais
                  .map(local => <Picker.Item label={local.label} value={local.value} />)
               }
            </Picker>
         </View>
         {/* <TextInput style={styles.textInput}
            placeholder='Data (AAAA-MM-DD)'
            keyboardType='default'
            value={produtoData}
            onChangeText={setProdutoData}
         /> */}
         {/* Botão para exibir seleção de data */}
         <Pressable onPress={() => setDateTimePickerShow(true)}>
            <View>
               <Text>Data</Text>
               <Text>{produtoData.toLocaleDateString('pt-BR')}</Text>
            </View>
         </Pressable>
         {dateTimePickerShow && <DateTimePicker
            // mode='date'
            // display='spinner'
            minimumDate={new Date('2024-11-01')}
            maximumDate={new Date()}
            value={produtoData}
            onChange={(_, date) => {               
               setDateTimePickerShow(false);
               date && setProdutoData(date);
            }}
         />}    
         {/* Option select para ativar/desativar a promoção */}
         <View style={[styles.textInput, {flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}]}>
            <Text>Promoção: </Text>
            <Text>Não</Text>
            <Switch
               value={produtoPromocao}
               onValueChange={setProdutoPromocao}
               // disabled={false}
               />
            <Text>Sim</Text>
         </View>
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