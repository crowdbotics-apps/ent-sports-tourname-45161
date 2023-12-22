import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const EventAnalyticsDashboard = () => {
  const dummyData = {
    ticketSales: 1200,
    participantRegistrations: 800,
    merchandiseSales: 500,
    userEngagement: 75
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ticket Sales</Text>
          <Text style={styles.cardValue}>{dummyData.ticketSales}</Text>
          <Image style={styles.cardImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Participant Registrations</Text>
          <Text style={styles.cardValue}>{dummyData.participantRegistrations}</Text>
          <Image style={styles.cardImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Merchandise Sales</Text>
          <Text style={styles.cardValue}>{dummyData.merchandiseSales}</Text>
          <Image style={styles.cardImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>User Engagement</Text>
          <Text style={styles.cardValue}>{dummyData.userEngagement}%</Text>
          <Image style={styles.cardImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  cardValue: {
    fontSize: 16,
    marginBottom: 10
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10
  }
});
export default EventAnalyticsDashboard;