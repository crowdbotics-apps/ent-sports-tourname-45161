import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';

const MerchandiseStore = () => {
  const merchandiseData = [{
    id: 1,
    name: 'Football Jersey',
    price: '$50',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    name: 'Basketball',
    price: '$30',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    name: 'Tennis Racket',
    price: '$70',
    image: 'https://tinyurl.com/42evm3m3'
  } // Add more merchandise data here
  ];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        {merchandiseData.map(item => <View key={item.id} style={styles.card}>
            <Image source={{
          uri: item.image
        }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Button title="Buy Now" onPress={() => alert('Purchase Successful')} />
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10
  }
});
export default MerchandiseStore;