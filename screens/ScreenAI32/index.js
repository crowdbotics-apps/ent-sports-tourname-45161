import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';

const EventCreationScreen = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [sportType, setSportType] = useState('');
  const [participantCategories, setParticipantCategories] = useState('');
  const [registrationFees, setRegistrationFees] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  const handleCreateEvent = () => {// Handle event creation logic here
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create New Event</Text>
      <TextInput style={styles.input} placeholder="Event Name" value={eventName} onChangeText={setEventName} />
      <TextInput style={styles.input} placeholder="Date" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Time" value={time} onChangeText={setTime} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
      <TextInput style={styles.input} placeholder="Sport Type" value={sportType} onChangeText={setSportType} />
      <TextInput style={styles.input} placeholder="Participant Categories" value={participantCategories} onChangeText={setParticipantCategories} />
      <TextInput style={styles.input} placeholder="Registration Fees" value={registrationFees} onChangeText={setRegistrationFees} />
      <TextInput style={styles.input} placeholder="Other Information" value={otherInfo} onChangeText={setOtherInfo} />
      <Button title="Create Event" onPress={handleCreateEvent} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  }
});
export default EventCreationScreen;