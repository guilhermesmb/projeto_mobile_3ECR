import { StyleSheet, View, Text } from "react-native";
import Input from "../components/input";
import Button from '../components/button';

export default function Comanda() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Olá,</Text>
                <Text>Arthur</Text>
            </View>

            <View>
                <Input />
                <Button>confirmar</Button>
            </View>

            <Text>
                Digite o código da comanda para iniciar um pedido
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
});