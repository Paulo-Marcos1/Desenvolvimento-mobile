import * as React from 'react';
import {Text , View , StyleSheet,TextInput } from 'react-native';
import {Button} from 'react-native-paper';

export default class App extends React.Component{
  
  state ={

    peso: 90,
    altura:1.75,
    imc: 0,
    legenda: "Sei la"
  };

  calcularMC = () => {

    const resultado = this.state.peso / (this.state.altura.replace(',','.') * this.state.altura.replace(',','.'));
    this.setState({
      imc: resultado
    });
    if(resultado < 18){
      this.setState({
        legenda: 'magreza'
      });
    
    }else if (resultado >= 18.5 && resultado < 25){
      this.setState({
        legenda:'normal'
      });
      }else if (resultado >= 25 && resultado <30){
        this.setState({
          legenda: 'sobrepeso'
        });
      }else if (resultado >= 30 && resultado < 40){
        this.setState({
          legenda: 'obesidade'
        });

      }else if (resultado >=40){
        this.setState({
          legenda: 'obesidade grave'
        });
      }
    

  }
  render(){ 
    
    
    return(
      <View style = {styles.app}>
        <Text style ={styles.title}>Seu imc</Text>
        <View style={styles.resultado}>
          <Text style={styles.imc}>{this.state.imc.toFixed(2)}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>
        <View >
          <TextInput style ={styles.input1}
            onChangeText={valor=>{this.setState({peso:valor.replace('.',',')});
            }}/>
        </View>
        <View >
          <TextInput style ={styles.input2}
            onChangeText={valor=>{this.setState({altura:valor});}}/>
        </View>
        <Button style = {styles.botao} onPress={this.calcularMC}>
          Calcular
        </Button>
      </View>
      

    );
    }
  }

const styles = StyleSheet.create({
  app:{
    backgroundColor: 'black',
    alignItems:'center',
    padding:90,
    flex: 1
  },
  title: {
    color:'white',
    textAlign: 'center',
    fontWeight: 700,
    marginTop: 15,
    fontSize: 18,
  },
  resultado:{
    width: 140,
    backgroundColor: 'purple',
    borderRadius: 10,
    alignItems:'center',
    padding:8,

  },
  imc:{

    fontSize: 22,
    fontWeight: 'bold',
    color:'white',

  },
  diagnostico:{
    fontSize: 16,
    fontWeight: 500,
    color: 'white',
    

  },input1:{
    backgroundColor:'white',
    margin:5,
    padding:5
  },input2:{
    backgroundColor:'white',
    margin:5,
    padding:5
    },
  botao:{
    backgroundColor:"white",
  
  }
});
