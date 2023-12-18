import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Modal, StyleSheet, StatusBar } from 'react-native';
import * as Location from 'expo-location';

const fakeCleanersData = [
  { id: '1', name: 'João', rating: 4.8, image: 'url_da_imagem' },
  { id: '2', name: 'Maria', rating: 4.5, image: 'url_da_imagem' },
  { id: '3', name: 'Pedro', rating: 4.9, image: 'url_da_imagem' },
  // Adicione mais dados conforme necessário
];

const HomeScreen = ({ navigation }) => {
  const [cleaners, setCleaners] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setCleaners(fakeCleanersData);
  }, []);

  const renderCleanerItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cleanerItemContainer}
      onPress={() => navigation.navigate('CleanerProfile', { cleaner: item })}
    >
      <Image source={{ uri: item.image }} style={styles.cleanerImage} />
      <View style={styles.cleanerInfo}>
        <Text style={styles.cleanerName}>{item.name}</Text>
        <Text style={styles.cleanerRating}>Avaliação: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  const categories = ['Residencial', 'Comercial', 'Limpeza Pesada', 'Jardinagem', 'Organização'];

  const handleChooseLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
      setModalVisible(false); // Fechar o modal após escolher a localização
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Encontre Faxineiros na Cidade</Text>
        <View style={styles.addressBar}>
          <TouchableOpacity onPress={toggleModal} style={styles.chooseLocationButton}>
            <Text style={styles.chooseLocationButtonText}>Escolher Localização</Text>
          </TouchableOpacity>
          {currentLocation && (
            <Text style={styles.addressText}>{`${currentLocation.latitude}, ${currentLocation.longitude}`}</Text>
          )}
        </View>
        <View style={styles.categoriesMenu}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={cleaners}
        keyExtractor={(item) => item.id}
        renderItem={renderCleanerItem}
        style={styles.cleanersList}
      />

      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Escolher Localização</Text>
          <TouchableOpacity onPress={toggleModal} style={styles.closeModalButton}>
            <Text style={styles.closeModalButtonText}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChooseLocation} style={styles.chooseLocationButton}>
            <Text style={styles.chooseLocationButtonText}>Escolher Localização</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addressBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  chooseLocationButton: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#3498db',
    borderRadius: 8,
    alignItems: 'center',
  },
  chooseLocationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 16,
  },
  categoriesMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryItem: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cleanerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cleanerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  cleanerInfo: {
    flex: 1,
  },
  cleanerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cleanerRating: {
    fontSize: 14,
    color: '#666',
  },
  cleanersList: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  closeModalButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  closeModalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
