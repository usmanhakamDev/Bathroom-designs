import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.bottomSection}>
      <Text style={styles.featuredText}>Featuring Premium Bathroom Brands</Text>

      {/* Brand Logos */}
      <View style={styles.brandsContainer}>
        <Image
          source={require('../assets/logos/kohler.png')}
          style={styles.brandLogo}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/logos/james-martin.png')}
          style={styles.brandLogo}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/logos/toto.png')}
          style={styles.brandLogo}
          resizeMode="contain"
        />
      </View>

      {/* This empty view is the background with opacity */}
      <View style={[styles.bottomNav, styles.halfOpacity]} />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <TouchableOpacity
          style={[styles.navButtonContainer, styles.navButtonActive]}>
          <Image
            source={require('../assets/icons/home.png')}
            resizeMode="contain"
            style={styles.navButtonHome}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonContainer}>
          <Image
            source={require('../assets/icons/stars.png')}
            resizeMode="contain"
            style={styles.navButtonHome}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  featuredText: {
    fontSize: 18,
    color: '#9E9E9E',
    marginBottom: 30,
    fontWeight: '500',
  },
  brandsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
  },
  brandLogo: {
    height: 18,
    width: screenWidth / 3,
    opacity: 0.7,
  },
  bottomNav: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  bottomNavContainer: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#000',
    borderRadius: 30,
    opacity: 1,
    position: 'absolute',
    top: 0,
    zIndex: 10,
    padding: 5,
  },
  halfOpacity: {opacity: 0.5},
  navButtonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 20,
  },
  navButtonActive: {
    backgroundColor: '#31312B',
  },
  navButtonHome: {
    height: 20,
    width: 20,
  },
  navButtonStars: {
    height: 25,
    width: 25,
  },
});

export default Footer;
