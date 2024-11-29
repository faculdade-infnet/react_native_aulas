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

   const animatedRotateStyle = useAnimatedStyle(() => ({      
      transform: [
         { rotate: `${angle.value}rad` }//,
         //{ scale: scale.value }
      ]      
   }))

   // Scale Hook do reanimated
   const scale = useSharedValue(1);          // Scala 
   const startScale = useSharedValue(0);     // Scala inicial
   const gesturePinch = Gesture.Pinch()
      .onUpdate((event) => {
         scale.value = startScale.value + event.scale;     // Atualiza a escala inicial + scala atual
      })
      .onEnd(() => {
         startScale.value = scale.value         // Salva a ultimo valor da escala como valor inicial
      })
   
   const animatedScaleStyle = useAnimatedStyle(() => ({      
      transform: [
         { scale: scale.value }
      ]      
   }))   

   // Evento de toque
   const gestureTap = Gesture.Tap()
        .onEnd(() => {
            Alert.alert("Gesto manipulado.");
      });
      
   /* Todos os gestos em conjunto*/
   //  const animatedStyle = useAnimatedStyle(() => ({      
   //       transform: [
   //          { scale: scale.value },
   //          { rotate: `${angle.value}rad` }    
   //       ]      
   // }))
   
   // Simultaneous = permite todos so gestos ao mesmo tempo
   // Race = prioriza o primeiro da lista
   const gestureCompose = gestureTap;
   // const gestureCompose = Gesture.Race(gestureTap);
   // const gestureCompose = Gesture.Simultaneous(gestureRotate, gesturePinch, gestureTap);

   return (
      <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <GestureDetector gesture={gestureTap}>
                <Animated.View style={[styles.animatedBoxTap]} />
            </GestureDetector> */}
            {/* <GestureDetector gesture={gestureCompose}>
                <Animated.View style={[styles.animatedBoxRotate, animatedRotateStyle]} />
            </GestureDetector> */}
            {/* <GestureDetector gesture={gestureCompose}>
                <Animated.View style={[styles.animatedBoxScale, animatedScaleStyle]} />
            </GestureDetector> */}
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
   animatedBoxTap: {
      backgroundColor: 'red',
      width: 100,
      height: 100,
   },
   animatedBoxRotate: {
      backgroundColor: 'blue',
      width: 100,
      height: 100,
   },
   animatedBoxScale: {
      backgroundColor: 'green',
      width: 100,
      height: 100,
   }
})