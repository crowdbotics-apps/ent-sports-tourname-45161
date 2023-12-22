import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

const MerchandiseManagementScreen = () => {
  const [merchandise, setMerchandise] = useState([{
    id: '1',
    name: 'T-Shirt',
    price: '20',
    inventory: '100',
    image: 'https://tinyurl.com/42evm3m3',
    description: 'Sports Event T-Shirt'
  }, {
    id: '2',
    name: 'Cap',
    price: '15',
    inventory: '80',
    image: 'https://tinyurl.com/42evm3m3',
    description: 'Sports Event Cap'
  }]);

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={{
      uri: item.image
    }} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>Price: ${item.price}</Text>
      <Text style={styles.itemInventory}>Inventory: {item.inventory}</Text>
      <Button title="Edit" onPress={() => {}} />
      <Button title="Remove" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Merchandise Management</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Item Name" style={styles.input} />
        <TextInput placeholder="Price" style={styles.input} />
        <TextInput placeholder="Inventory" style={styles.input} />
        <TextInput placeholder="Image URL" style={styles.input} />
        <TextInput placeholder="Description" style={styles.input} />
        <Button title="Add Item" onPress={() => {}} />
      </View>
      <FlatList data={merchandise} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDescription: {
    fontSize: 14,
    color: '#666'
  },
  itemPrice: {
    fontSize: 16,
    color: '#333'
  },
  itemInventory: {
    fontSize: 16,
    color: '#333'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  }
});
export default MerchandiseManagementScreen;