import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NurseAppSvg from './svg/NurseAppSvg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E3C1',
    fontFamily: 'NotoSans',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#6AACA6',
    fontWeight: 'bold',
  },
});

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NurseAppSvg />
    </SafeAreaView>
  );
};

export default Splash;
