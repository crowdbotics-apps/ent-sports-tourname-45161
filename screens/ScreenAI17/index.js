import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const PlayerProfile = () => {
  const playerData = {
    name: 'John Doe',
    age: 28,
    sport: 'Basketball',
    achievements: ['MVP 2020', 'Best Scorer 2019', 'Rookie of the Year 2018'],
    stats: {
      gamesPlayed: 82,
      pointsPerGame: 25.6,
      assistsPerGame: 7.3,
      reboundsPerGame: 10.2
    },
    performanceHistory: [{
      year: '2020',
      points: 2056,
      assists: 598,
      rebounds: 836
    }, {
      year: '2019',
      points: 1987,
      assists: 567,
      rebounds: 812
    }, {
      year: '2018',
      points: 1876,
      assists: 543,
      rebounds: 798
    }]
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image style={styles.profileImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.profileName}>{playerData.name}</Text>
          <Text style={styles.profileSport}>{playerData.sport}</Text>
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.profileDetail}>Age: {playerData.age}</Text>
          <Text style={styles.profileDetail}>Games Played: {playerData.stats.gamesPlayed}</Text>
          <Text style={styles.profileDetail}>Points Per Game: {playerData.stats.pointsPerGame}</Text>
          <Text style={styles.profileDetail}>Assists Per Game: {playerData.stats.assistsPerGame}</Text>
          <Text style={styles.profileDetail}>Rebounds Per Game: {playerData.stats.reboundsPerGame}</Text>
        </View>
        <View style={styles.profileAchievements}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {playerData.achievements.map((achievement, index) => <Text key={index} style={styles.achievement}>
              {achievement}
            </Text>)}
        </View>
        <View style={styles.profileHistory}>
          <Text style={styles.sectionTitle}>Performance History</Text>
          {playerData.performanceHistory.map((yearData, index) => <View key={index} style={styles.yearData}>
              <Text style={styles.year}>{yearData.year}</Text>
              <Text style={styles.yearDetail}>Points: {yearData.points}</Text>
              <Text style={styles.yearDetail}>Assists: {yearData.assists}</Text>
              <Text style={styles.yearDetail}>Rebounds: {yearData.rebounds}</Text>
            </View>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  profileSport: {
    fontSize: 18,
    color: '#888',
    marginTop: 5
  },
  profileDetails: {
    padding: 20
  },
  profileDetail: {
    fontSize: 16,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  profileAchievements: {
    padding: 20
  },
  achievement: {
    fontSize: 16,
    marginBottom: 10
  },
  profileHistory: {
    padding: 20
  },
  yearData: {
    marginBottom: 20
  },
  year: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  yearDetail: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default PlayerProfile;