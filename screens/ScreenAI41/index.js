import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const EditEventDetails = () => {
  const [eventName, setEventName] = useState('Basketball Tournament');
  const [eventDate, setEventDate] = useState('2022-12-12');
  const [eventTime, setEventTime] = useState('12:00');
  const [eventVenue, setEventVenue] = useState('Madison Square Garden');
  const [participantDetails, setParticipantDetails] = useState('Open for all');
  const [ticketPrice, setTicketPrice] = useState('50');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Edit Event Details</Text>
      <TextInput style={styles.input} onChangeText={setEventName} value={eventName} placeholder="Event Name" />
      <TextInput style={styles.input} onChangeText={setEventDate} value={eventDate} placeholder="Event Date" />
      <TextInput style={styles.input} onChangeText={setEventTime} value={eventTime} placeholder="Event Time" />
      <TextInput style={styles.input} onChangeText={setEventVenue} value={eventVenue} placeholder="Event Venue" />
      <TextInput style={styles.input} onChangeText={setParticipantDetails} value={participantDetails} placeholder="Participant Details" />
      <TextInput style={styles.input} onChangeText={setTicketPrice} value={ticketPrice} placeholder="Ticket Price" />
      <Button title="Save Changes" onPress={() => alert('Changes saved!')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  }
});
export default EditEventDetails;