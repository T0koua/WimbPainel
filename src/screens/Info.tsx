import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
  feed: undefined;
  info: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'info'>;
const Stack = createStackNavigator();

export default function Info({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('feed')}>
        <Feather name="arrow-left" style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.rota}></View>

      <TouchableOpacity
        style={styles.onibus}
        onPress={() => navigation.navigate('info')}
      >
        <Text style={styles.numero}>
          351
          {'\n'}
          <Text style={styles.onibusTexto}>Shopping Internacional</Text>
        </Text>
        <View style={styles.horario}>
          <Text style={styles.horarioTexto}>12 minutos</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.conteudo}>
        <View style={styles.conteudoLeft}>
          {/* Aqui você pode colocar conteúdo específico */}
        </View>
        <View style={styles.conteudoRight}>
          {/* Aqui você pode colocar conteúdo específico */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 15,
  },

  voltar: {
    width: '100%',
  },

  icon: {
    fontSize: 30,
  },

  rota: {
    width: '110%',
    height: '50%',
    backgroundColor: 'grey',
  },
  onibus: {
    width: '110%',
    backgroundColor: 'white',
    height: '10%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
  },
  onibusTexto: {
    fontWeight: '200',
    marginLeft: 7,
    flex: 1,
    fontSize: 15,
  },
  horario: {
    backgroundColor: '#545454',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: '45%',
    marginRight: -25,
  },
  horarioTexto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  numero: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
  },
  conteudo: {
    width: '100%', // Garantir que a View ocupe toda a largura
    height: '30%',
    flexDirection: 'row', // Importante para que as Views fiquem lado a lado
    backgroundColor: 'red',
  },
  conteudoLeft: {
    width: '50%', // 50% da largura da View pai
    height: '100%', // 100% da altura da View pai
    backgroundColor: 'red', // Cor de fundo para visualização
  },
  conteudoRight: {
    width: '50%', // 50% da largura da View pai
    height: '100%', // 100% da altura da View pai
    backgroundColor: 'green', // Cor de fundo para visualização
  },
});
