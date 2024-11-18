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

type Props = StackScreenProps<RootStackParamList, 'feed'>;
const Stack = createStackNavigator();

export default function Feed({ navigation }:Props){
  return (
    <View style={styles.container}>
      
      <View style={styles.head}>
      <Text style={styles.titulo}> WIMB </Text>
      <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>

      <TouchableOpacity style={styles.onibus}
        onPress={() => navigation.navigate('info')}>
        <Text style={styles.numero}>
    351
    {"\n"}
    <Text style={styles.onibusTexto}>Shopping Internacional</Text>
  </Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>12 minutos</Text>
          </View>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 15,
  },

  voltar: {
    width: '100%',
  },

  icon: {
    fontSize: 30
  },

  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  subtitulo:{
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 40
  },

  head:{
    width: '110%',
    backgroundColor: '#EBCB4A',
    marginBottom: '3%'
  },

  caixaTextos:{
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    width: '80%'
  },

  tituloPagina:{
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 20,
    marginTop: 50,
  },

  subtituloPagina:{
    fontSize: 15,
    fontWeight:'light',
    marginBottom: 35
  },

  campo:{
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    margin: 15,
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    elevation: 5,
    paddingVertical: 10
  },

   enviar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 3,
    padding: 12,
    borderWidth: 0,
    width: '100%',
    backgroundColor:'#545454',
    marginBottom: 40,
    elevation: 5,
    paddingVertical: 15,
    height:'30%'
  },

  numero:{
    fontSize: 15,
    color: 'black',
    fontWeight: '700',

  },

  campoTitulo:{
    marginRight: 10, 
    textAlign: 'left'
  },

  onibus:{
    width: '110%',
    backgroundColor: 'white',
    height: '15%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    elevation: 5
   },
   onibusTexto: {
    fontWeight: '700',
    marginLeft: 7,
    flex: 1,
    fontSize: 12
   },
   horario:{
    backgroundColor: '#545454',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '45%',
    marginRight: -25
   },
  horarioTexto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12
  }
});
