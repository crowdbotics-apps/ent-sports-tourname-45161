import React from 'react';
import { SafeAreaView, Text, Image, Button, StyleSheet } from 'react-native';

const TicketPurchaseScreen = () => {
  const eventDetails = {
    name: 'Football World Cup',
    date: '2022-12-01',
    location: 'Qatar',
    ticketPrice: '$100',
    seatingOptions: ['VIP', 'Regular', 'Economy']
  };
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>{eventDetails.name}</Text>
      <Text style={styles.details}>Date: {eventDetails.date}</Text>
      <Text style={styles.details}>Location: {eventDetails.location}</Text>
      <Text style={styles.details}>Ticket Price: {eventDetails.ticketPrice}</Text>
      <Text style={styles.details}>Seating Options:</Text>
      {eventDetails.seatingOptions.map((option, index) => <Text key={index} style={styles.details}>
          {option}
        </Text>)}
      <Button title="Purchase Ticket" onPress={() => alert('Ticket Purchased!')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  details: {
    fontSize: 18,
    marginBottom: 10
  }
});
export default TicketPurchaseScreen;