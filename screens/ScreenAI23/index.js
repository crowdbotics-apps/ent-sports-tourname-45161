import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList } from 'react-native';
const amenitiesData = [{
  id: '1',
  name: 'Restaurant',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Parking Lot',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  name: 'Public Transportation',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '4',
  name: 'Restroom',
  image: 'https://tinyurl.com/42evm3m3'
}];

const AmenitiesScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nearby Amenities</Text>
      <FlatList data={amenitiesData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: item.image
      }} />
            <Text style={styles.name}>{item.name}</Text>
          </View>} />
      <Text style={styles.directionsTitle}>Directions</Text>
      <Text style={styles.directionsText}>Directions to the event venue from your current location will be displayed here.</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: 50,
    height: 50
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10
  },
  directionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10
  },
  directionsText: {
    fontSize: 16,
    color: '#666'
  }
});
export default AmenitiesScreen;