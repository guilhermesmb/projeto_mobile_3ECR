import { StyleSheet, View, Text } from "react-native";
import Input from "../components/input";
import Button from '../components/button';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home.jpg')}/>
      <Text>.</Text>
      <Text style={styles.title}>Cadastro de Funcionários</Text>
      
      <Input placeholder='E-mail'/>
      <Input placeholder='Senha' secureTextEntry/>

      <Button onPress={() => navigation.navigate('Login')}>Cadastrar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#121A2C',
    fontSize: 34,
    fontWeight: 'bold',
  },

image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
  
});
