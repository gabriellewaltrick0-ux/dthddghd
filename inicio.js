import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

export default function Inicio({ navigation }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) setEmail(user.email);
  }, []);

  const sairDaConta = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        navigation.replace('Login'); // volta pro login
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Célula Vida</Text>
      <Text style={styles.boasVindas}>
        Oii, seja bem-vinda {email || 'Irmão'}!
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Buscarreceitas')}
      >
        <Text style={styles.textoBotao}>Biblia Online</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Receitaaleatoria')}
      >
        <Text style={styles.textoBotao}> Palavra Aleatória</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Favoritos')}
      >
        <Text style={styles.textoBotao}> Pedidos de Oração</Text>
      </TouchableOpacity>

      {/* BOTÃO SAIR */}
      <TouchableOpacity style={styles.botaoSair} onPress={sairDaConta}>
        <Text style={styles.botaosair}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6', // bege claro (fundo suave)
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5C3A21', // marrom escuro destaque
    marginBottom: 5
  },

  boasVindas: {
    fontSize: 16,
    color: '#6B4F3A', // marrom médio
    marginBottom: 40
  },

  botao: {
    backgroundColor: '#8B5E3C', // marrom principal
    paddingVertical: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    elevation: 4
  },

  textoBotao: {
    color: '#FFFFFF', // branco para contraste
    fontSize: 16,
    fontWeight: 'bold'
  },

  botaoFavorito: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#8B5E3C'
  },

  textoBotaoFavorito: {
    color: '#8B5E3C',
    fontWeight: 'bold'
  },

  botaosair:{
     backgroundColor: '#8B5E3C',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: '60%',
    alignItems: 'center',
    color: 'white', 
  }
});
