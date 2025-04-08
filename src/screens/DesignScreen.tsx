import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import DesignCarousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DesignScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header here */}
      <View style={styles.headerContainer}>
        <Header />
      </View>

      {/* Carousel here */}
      <View style={styles.carouselContainer}>
        <DesignCarousel />
      </View>

      {/* Footer here */}
      <View style={styles.bottomSection}>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: '24%',
    width: '100%',
  },
  carouselContainer: {
    height: '56%',
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  bottomSection: {
    height: '20%',
    width: '100%',
    marginTop: 50,
  },
});

export default DesignScreen;
