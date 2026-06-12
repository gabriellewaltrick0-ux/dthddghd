import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Detalhes({ route, navigation }) {

  const { referencia, texto } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.ref}>{referencia}</Text>

      <Text style={styles.txt}>{texto}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5EFE6',
    padding: 25,
    justifyContent: 'center'
  },
  ref: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5D4037'
  },
  txt: {
    fontSize: 17,
    lineHeight: 26,
    color: '#3E2723'
  },
  botao: {
    marginTop: 30,
    backgroundColor: '#8D6E63',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
