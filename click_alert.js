import {View,Text,Button,StyleSheet} from 'react-native';

export default function App(){
  return(
    <View style ={styles.Container}>
      <Text style ={styles.texto}> Me doa um estagio por favor!</Text>
      <Button title ="clique aq" onPress ={( )=> alert 
      ("adhajhdjakdakl")} />  
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
  flex: 1,
  alignItems : 'center',
  justifyContent: 'center',

  }, texto: {
    fontSize: '30pt,',
    fonteWeight: '700',
  }
});
