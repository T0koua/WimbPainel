import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  feed: undefined;
  info: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'feed'>;
const Stack = createStackNavigator();

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }); // Formata apenas horas e minutos
      setCurrentTime(timeString);
    };

    updateClock(); // Atualiza imediatamente ao carregar
    const interval = setInterval(updateClock, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <View style={styles.clockContainer}>
      <Text style={styles.clockText}>{currentTime}</Text>
    </View>
  );
};

export default function Feed({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.titulo}> WIMB </Text>
        <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>

      <TouchableOpacity
        style={styles.onibus}
        onPress={() => navigation.navigate('info')}>
        <Text style={styles.numero}>
          351
          {'\n'}
          <Text style={styles.onibusTexto}>Shopping Internacional
          {'\n'}
          </Text>
        </Text>
        <TouchableOpacity  style={styles.verRota}>
          <Text>Aperta</Text>
        </TouchableOpacity>        
        <View style={styles.horario}>
        <Text style={styles.horarioTexto}>12 minutos</Text>
        </View>
      </TouchableOpacity>

      {/* Relógio no final da tela */}
      <View style={styles.relógio}>
        <Clock />
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
  head: {
    width: '110%',
    backgroundColor: '#EBCB4A',
    marginBottom: '3%',
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  subtitulo: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 40,
  },
  onibus: {
    width: '110%',
    backgroundColor: 'white',
    height: '15%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
  },
  numero: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
  },
  onibusTexto: {
    fontWeight: '200',
    marginLeft: 7,
    flex: 1,
    fontSize: 15,
  },
  verRota: {
    width: 50,
    height: 10,
    backgroundColor: '#EBCB4A'
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
    fontSize: 15,
  },
  relógio: {
    position: 'absolute', // Posiciona de forma fixa
    bottom: 0, // Distância do final da tela
    alignSelf: 'center', // Centraliza horizontalmente
    padding: 10,
    backgroundColor: '#545454',
    width: '110%',
    height: '10%'
  },
  clockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockText: {
    fontSize: 40,
    fontWeight: '500',
    color: 'white',
    letterSpacing: 5
  },
});
