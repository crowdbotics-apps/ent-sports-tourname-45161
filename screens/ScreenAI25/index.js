import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const challengesData = [{
  id: '1',
  title: 'Predict the Match Outcome',
  points: 50
}, {
  id: '2',
  title: 'Player Quiz',
  points: 30
}, {
  id: '3',
  title: 'Complete Event Tasks',
  points: 70
}];

const ChallengeItem = ({
  title,
  points
}) => <View style={styles.itemContainer}>
    <Image style={styles.itemImage} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.itemContent}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemPoints}>Earn {points} points</Text>
    </View>
    <TouchableOpacity style={styles.itemButton}>
      <Text style={styles.itemButtonText}>Participate</Text>
    </TouchableOpacity>
  </View>;

const ChallengesScreen = () => <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Fan Challenges/Contests</Text>
    <FlatList data={challengesData} keyExtractor={item => item.id} renderItem={({
    item
  }) => <ChallengeItem title={item.title} points={item.points} />} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16
  },
  itemContent: {
    flex: 1
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  itemPoints: {
    fontSize: 14,
    color: '#666'
  },
  itemButton: {
    backgroundColor: '#FF6347',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  itemButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
export default ChallengesScreen;