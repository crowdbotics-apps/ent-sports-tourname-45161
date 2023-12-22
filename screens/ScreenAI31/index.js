import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

const EventManagementTools = () => {
  const dummyData = {
    eventName: 'Basketball Tournament',
    participants: 20,
    location: 'New York, USA',
    date: '2022-12-12'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>{dummyData.eventName}</Text>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Participants: {dummyData.participants}</Text>
          <Text style={styles.infoText}>Location: {dummyData.location}</Text>
          <Text style={styles.infoText}>Date: {dummyData.date}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Schedule Event" onPress={() => {}} />
          <Button title="Register Participants" onPress={() => {}} />
          <Button title="Manage Logistics" onPress={() => {}} />
          <Button title="Send Updates" onPress={() => {}} />
          <Button title="Engage Participants" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20
  },
  infoContainer: {
    padding: 20
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10
  },
  buttonContainer: {
    padding: 20
  }
});
export default EventManagementTools;