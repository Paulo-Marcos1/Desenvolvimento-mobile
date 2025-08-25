import {View,Text,Button,StyleSheet} from 'react-native';
import {useState} from 'react';

export default function App(){
  const [texto, setText] = useState('Me doa um estagio');
  return(
    <View style ={styles.Container}>
      <Text style ={styles.texto}>{texto}</Text>
      <Button title ="Doação" onPress ={( )=> setText( "Ainda Estou desempregado")} />  
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
