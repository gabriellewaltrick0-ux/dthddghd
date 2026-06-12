import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

export default function Buscarreceitas({ navigation }) {

  const [query, setQuery] = useState('');

  const buscar = async () => {
    try {
      if (!query.trim()) {
        Alert.alert('Digite uma referência');
        return;
      }

      const res = await fetch(
        `https://bible-api.com/${query}?translation=almeida`
      );

      const data = await res.json();

      if (!data.text) {
        Alert.alert('Versículo não encontrado');
        return;
      }

      navigation.navigate('Detalhes', {
        referencia: data.reference,
        texto: data.text
      });

    } catch (erro) {
      Alert.alert('Erro ao conectar com a API');
      console.log(erro);
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Ex: joao 3:16"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao} onPress={buscar}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>

<TouchableOpacity
        style={styles.botao1}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    padding: 25,
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16
  },
  botao: {
    backgroundColor: '#8D6E63',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  botao1: {
    backgroundColor: '#8D6E63',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
