import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from './components/button';
import Input from './components/input'

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/home.png')}/>
      <Text>Sistema</Text>
      <Text style={styles.title}>Comanda</Text>
      
      <Input placeholder='e-mail'/>
      <Input placeholder='senha' secureTextEntry/>

      <Button>Entrar</Button>
      <Button>Criar Conta</Button>

      <StatusBar style="auto" />
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
