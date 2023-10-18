import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input'

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/cadastro.jpg')}/>
      <Text>.</Text>
      <Text style={styles.title}>Cadastro de Funcionários</Text>
      
      <Input placeholder='E-mail'/>
      <Input placeholder='Senha' secureTextEntry/>

      <Button onPress={() => navigation.navigate('Login')}>Cadastrar</Button>
      <Button onPress={() => navigation.navigate('Login')}>Voltar</Button>
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
    fontSize: 28,
    fontWeight: 'bold',
  },

image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
  
});
