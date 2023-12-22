import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const ParticipantFitnessTracker = () => {
  const dummyData = {
    distance: '26.2 miles',
    pace: '7:30 min/mile',
    calories: '2000 kcal',
    heartRate: '140 bpm'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Participant Fitness Tracker</Text>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>Distance: {dummyData.distance}</Text>
          <Text style={styles.dataText}>Pace: {dummyData.pace}</Text>
          <Text style={styles.dataText}>Calories: {dummyData.calories}</Text>
          <Text style={styles.dataText}>Heart Rate: {dummyData.heartRate}</Text>
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
    color: '#333',
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  dataContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20
  },
  dataText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10
  }
});
export default ParticipantFitnessTracker;