import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  feed: undefined; // 'feed' não recebe parâmetros
  info: { bus: { number: string; route: string; eta: string } }; // 'info' recebe um objeto 'bus'
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
      });
      setCurrentTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text style={styles.clockText}>{currentTime}</Text>;
};

export default function Feed({ navigation }: Props) {
  const busData = [
    { number: '351', route: 'Shopping Internacional', eta: '12 min' },
    { number: '813', route: 'Terminal Cecap via Dutra', eta: '8 min' },
    { number: '433', route: 'Terminal São João', eta: '5 min' },
    { number: '330', route: 'Cidade Satélite', eta: '15 min' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WIMB</Text>
        <Text style={styles.subtitle}>Where Is My Bus</Text>
      </View>

      {/* Lista de ônibus */}
      {busData.map((bus, index) => (
        <TouchableOpacity
          key={index}
          style={styles.busCard}
          onPress={() => navigation.navigate('info', { bus })}>
          <View>
            <Text style={styles.busNumber}>{bus.number}</Text>
            <Text style={styles.busDetails}>{bus.route}</Text>
          </View>
          <View style={styles.routeDetails}>
            <TouchableOpacity style={styles.routeButton}>
              <Text style={styles.routeButtonText}>Ver Rota</Text>
            </TouchableOpacity>
            <View style={styles.etaBox}>
              <Text style={styles.etaText}>{bus.eta}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.footer}>
        <Clock />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F7F7F7',
  },
  header: {
    backgroundColor: '#FFD700',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 3,
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
    letterSpacing: 2,
  },
  busCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  busNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  busDetails: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  routeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  routeButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12,
  },
  etaBox: {
    backgroundColor: '#333',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  etaText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
  },
  clockText: {
    fontSize: 18,
    color: '#FFF',
  },
});
