import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';

const BookmarkedEventsScreen = () => {
  const [events, setEvents] = useState([{
    id: '1',
    name: 'Event 1',
    date: '2022-01-01',
    location: 'Location 1'
  }, {
    id: '2',
    name: 'Event 2',
    date: '2022-02-02',
    location: 'Location 2'
  }, {
    id: '3',
    name: 'Event 3',
    date: '2022-03-03',
    location: 'Location 3'
  } // Add more events as needed
  ]);

  const EventCard = ({
    event
  }) => <View style={styles.card}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{event.name}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.location}>{event.location}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={events} keyExtractor={item => item.id} renderItem={({
      item
    }) => <EventCard event={item} />} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  cardContent: {
    flex: 1,
    padding: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 16,
    color: '#888'
  },
  location: {
    fontSize: 16,
    color: '#888'
  }
});
export default BookmarkedEventsScreen;