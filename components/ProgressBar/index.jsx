import { View, Text, StyleSheet } from "react-native";
import { ProgressBarComponent, progressProps } from "./ProgressBarComponent";

export default function ProgressBar({ progress }) {
   return (
      <View style={styles.progressBarContainer}>
         <Text style={styles.progressBarLabel}>{`${(progress * 100).toFixed(0)}%`}</Text>
         <ProgressBarComponent
            {...progressProps}
            progress={progress}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   progressBarContainer: {
      marginHorizontal: 10,
   },
   progressBarLabel: {
      textAlign: 'center',
      fontSize: 20,
   },
});