import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

export default function ReceitaAleatoria({ navigation }) {
  const [palavra, setPalavra] = useState(null);
  const [loading, setLoading] = useState(true);

  const carregarPalavra = async () => {
    setLoading(true);
    // Exemplo usando uma API de Bíblia (ou você pode criar sua lista fixa)
    try {
      const res = await fetch('https://bible-api.com/john 3:16?translation=almeida');
      const data = await res.json();
      setPalavra(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarPalavra(); }, []);

  if (loading) return <ActivityIndicator size="large" color="#3182CE" style={{flex: 1}} />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Palavra Aleatoria</Text>
      <View style={styles.card}>
        <Text style={styles.textoVersiculo}>{palavra?.text}</Text>
        <Text style={styles.referencia}>{palavra?.reference}</Text>
      </View>
      
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#F5EFE6', // bege claro (fundo)
    alignItems: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5C3A21', // marrom escuro
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF', // branco suave pro versículo
    padding: 22,
    borderRadius: 15,
    elevation: 3,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D7C2B0', // bege borda
  },

  textoVersiculo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#4A2C1A', // marrom escuro
    textAlign: 'center',
    lineHeight: 26,
  },

  referencia: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5E3C', // marrom café destaque
    marginTop: 15,
    textAlign: 'right',
  },

  botao: {
    backgroundColor: '#8B5E3C', // marrom principal
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
