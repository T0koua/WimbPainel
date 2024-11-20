import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Importa o MapView e Marker

type Props = {
  route: {
    params: {
      bus: {
        number: string;
        route: string;
        eta: string;
      };
    };
  };
  navigation: any; // Adicionando a prop navigation
};

export default function BusInfo({ route, navigation }: Props) {
  const { bus } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Botão de Voltar com ícone e posicionamento ajustado */}
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Vai para a tela anterior
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Linha {bus.number}</Text>
        <Text style={styles.subtitle}>{bus.route}</Text>
      </View>

      {/* Card com Informações principais */}
      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Previsão de Chegada:</Text>
        <Text style={styles.infoText}>{bus.eta}</Text>

        <Text style={styles.infoLabel}>Descrição da Rota:</Text>
        <Text style={styles.infoText}>
          A linha {bus.number} conecta {bus.route}, passando por diversos pontos de interesse na cidade.
        </Text>
      </View>

      {/* Seção de Mapas ou Rotas */}
      <View style={styles.mapSection}>
        <Text style={styles.mapTitle}>Rota do Ônibus</Text>
        <MapView
          style={styles.mapImage}
          initialRegion={{
            latitude: -23.55052, // Exemplo: São Paulo
            longitude: -46.633308,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Adicione Marcadores para os pontos de origem e destino */}
          <Marker coordinate={{ latitude: -23.55052, longitude: -46.633308 }} title="Ponto de Partida" />
          <Marker coordinate={{ latitude: -23.567234, longitude: -46.645587 }} title="Ponto de Chegada" />
        </MapView>
      </View>

      {/* Espaço para outros detalhes, como horários ou mais informações */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Última atualização: 10 minutos atrás</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  backButtonContainer: {
    marginTop: 40, // Espaço acima do botão
    marginBottom: 20, // Espaço abaixo do botão
    alignItems: 'flex-start', // Alinha o botão à esquerda
  },
  backButton: {
    padding: 15,
    backgroundColor: '#EBCB4A', // Cor de fundo do botão
    borderRadius: 30, // Borda arredondada para o botão
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff', // Cor do texto do botão
    textAlign: 'center',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  mapSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 15,
    marginBottom: 20,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: 300, // Ajuste o tamanho do mapa
    borderRadius: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});
