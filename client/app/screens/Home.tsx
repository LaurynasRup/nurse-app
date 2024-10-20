import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E3C1',
    color: '#6AACA6',
    fontFamily: 'NotoSans',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#6AACA6',
    fontWeight: 'bold',
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
