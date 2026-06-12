import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const fazerLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(credenciaisUsuario => {
        navigation.navigate('Inicio', { nome: credenciaisUsuario.user.email });
      })
      .catch(erro => {
        setMensagemErro('E-mail ou senha incorretos.');
        console.error(erro.message);
      });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.titulo}>Celula Vida</Text>
        <Text style={styles.subtitulo}>Onde Deus é a nossa vida</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity 
          style={styles.botaoEsqueceu} 
          onPress={() => navigation.navigate('Esqueceuasenha')}
        >
          <Text style={styles.linkEsqueceu}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        {mensagemErro !== '' && (
          <Text style={styles.erro}>{mensagemErro}</Text>
        )}

        <View style={styles.footer}>
          <Text style={styles.textoNormal}>Não possui conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
            <Text style={styles.link}> Registre-se agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6', // bege claro (fundo suave)
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#5C3A21', // marrom escuro destaque
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 14,
    color: '#6B4F3A', // marrom médio
    marginBottom: 40,
    opacity: 0.9,
  },

  inputContainer: {
    width: '100%',
  },

  label: {
    color: '#4A2C1A', // marrom escuro
    fontWeight: '600',
    marginBottom: 5,
    marginLeft: 5,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#8B5E3C', // borda marrom
    backgroundColor: '#FFFFFF', // branco continua melhor pro campo
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#3B2A1F', // marrom escuro texto
  },

  botaoEsqueceu: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },

  linkEsqueceu: {
    color: '#8B5E3C', // marrom principal
    fontSize: 14,
    fontWeight: '500',
  },

  botao: {
    backgroundColor: '#8B5E3C', // marrom café
    width: '100%',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  erro: {
    color: '#B00020', // vermelho erro mais suave
    marginTop: 15,
    textAlign: 'center',
  },

  footer: {
    flexDirection: 'row',
    marginTop: 40,
  },

  textoNormal: {
    color: '#6B4F3A', // marrom médio
    fontSize: 15,
  },

  link: {
    color: '#8B5E3C',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

