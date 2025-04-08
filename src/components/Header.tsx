import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Option menu dots here */}
      <View style={styles.menuOptionView}>
        <TouchableOpacity>
          <Text style={styles.menuDots}>...</Text>
        </TouchableOpacity>
      </View>

      {/* Header here */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <View style={styles.headerText}>
            <Text style={styles.nameText}>Georgia</Text>
            <Text style={styles.subtitle}>Let's start designing</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuOptionView: {
    height: '50%',
    flexDirection: 'row-reverse',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  header: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  headerText: {
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#dbdbdb',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
  },
  menuDots: {
    fontSize: 24,
    color: '#333',
  },
});

export default Header;
