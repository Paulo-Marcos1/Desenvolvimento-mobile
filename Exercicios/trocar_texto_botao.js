import {Text, View, Button, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function App(){
  const [texto, setTexto]= useState ("Olá, (Esta de dia, de tarde ou de noite?)");
  return(
    <View style={styles.Container}>
    <Text  style={styles.Texto}>{texto}</Text>
    <Button title = "Dia" onPress ={()=> setTexto("Olá, bom dia!")} />
    <Button title = "Tarde" onPress ={()=>setTexto("Olá, boa tarde!")}/>
    <Button title = "Noite" onPress = {()=>setTexto("Olá, boa noite!")}/>
    </View>
  )

}

const styles = StyleSheet.create({
  Container:{
  flex: 1,
  alignItems : 'center',
  justifyContent: 'center',
  },
  Texto: {
    fontSize: '30pt,',
    fonteWeight: '700',
  }
});
