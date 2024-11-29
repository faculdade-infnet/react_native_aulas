import { View, Text, Alert, StyleSheet } from 'react-native';
import Styles from './ProdutoShowStyle';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

// Tela que exibe os detalhes de um produto
// produto: O produto que será exibido, com pprops(nome, preço, local, data, etc)
export default function ProdutoShowScreen({ route }) {
   // route.params = é um objeto(produto) com os parâmetros passados na navegação
   const { nome, preco, local, data } = route.params;

   // Rotation Hook do reanimated
   const angle = useSharedValue(0);          // Angulo de rotação
   const startAngle = useSharedValue(0);     // Angulo inicial
   const gestureRotate = Gesture.Rotation()
   .onStart(() => {
      startAngle.value = angle.value         // Salva o angulo inicial
   })
   .onUpdate((event) => {
      angle.value = startAngle.value + event.rotation;     // Atualiza o angulo de rotação
   })

   // Rotation Hook do reanimated
   const scale = useSharedValue(1);          // Scala 
   const startScale = useSharedValue(0);     // Scala inicial
   const gesturePinch = Gesture.Pinch()
      .onUpdate((event) => {
         scale.value = startScale.value + event.scale;     // Atualiza a escala inicial + scala atual
      })
      .onEnd(() => {
         startScale.value = scale.value         // Salva a ultimo valor da escala como valor inicial
      })
   
   const animatedStyle = useAnimatedStyle(() => ({      
         transform: [{ rotate: `${angle.value}rad` }]      
   }))

   // Evento de toque, existem vários outro eventos, no local de Tap   
   /* const gestureTap = Gesture.Tap()
        .onEnd(() => {
            Alert.alert("Gesto manipulado.");
      }); */


   const gestureCompose = Gesture.Race(gestureRotate, gesturePinch);

   return (
      <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <GestureDetector gesture={gesturePinch}>
                <Animated.View style={[styles.animatedBox, animatedScaleStyle]} />
            </GestureDetector>
        </GestureHandlerRootView>       
      // <View style={Styles.container}>
      //    <Text style={Styles.header2}>{nome}</Text>
      //    <Text style={Styles.header3}>R$ {preco}</Text>
      //    <Text style={Styles.text}>{local}</Text>
      //    <Text style={Styles.text}>{data}</Text>
      // </View>
   );
}

const styles = StyleSheet.create({
   animatedBox: {
      backgroundColor: '#386641',
      width: 100,
      height: 100,
   }
})