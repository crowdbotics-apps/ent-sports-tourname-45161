import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';

const LiveScoreboard = () => {
  const [scores, setScores] = useState([{
    id: '1',
    teamA: 'Team 1',
    teamB: 'Team 2',
    scoreA: 0,
    scoreB: 0
  }, {
    id: '2',
    teamA: 'Team 3',
    teamB: 'Team 4',
    scoreA: 0,
    scoreB: 0
  } // Add more dummy data as needed
  ]);
  useEffect(() => {// Update scores here
  }, []);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Live Scoreboard</Text>
      <FlatList data={scores} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.scoreCard}>
            <View style={styles.team}>
              <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <Text style={styles.teamName}>{item.teamA}</Text>
            </View>
            <Text style={styles.score}>{item.scoreA} - {item.scoreB}</Text>
            <View style={styles.team}>
              <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <Text style={styles.teamName}>{item.teamB}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  scoreCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%'
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  teamName: {
    fontSize: 18,
    color: '#333'
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default LiveScoreboard;