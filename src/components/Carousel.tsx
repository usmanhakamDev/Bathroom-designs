import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

interface CarouselItem {
  id: string;
  image: any;
  title: string;
  desc: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: '1',
    image: require('../assets/images/bathroom1.png'),
    title: 'Harvest',
    desc: 'Bold design meets timeless beauty',
  },
  {
    id: '2',
    image: require('../assets/images/bathroom2.png'),
    title: 'Modern',
    desc: 'Bold design meets timeless beauty',
  },
  {
    id: '3',
    image: require('../assets/images/bathroom3.png'),
    title: 'Classic',
    desc: 'Bold design meets timeless beauty',
  },
];

const ITEM_WIDTH = screenWidth * 0.95; // Each item takes 95% of screen width

const DesignCarousel = () => {
  const renderItem = ({item}: {item: CarouselItem}) => {
    return (
      <View style={styles.slide}>
        <View style={styles.bottomSection}>
          <Text style={styles.designTitle}>{item?.title}</Text>
          <Text style={styles.designDescription}>{item?.desc}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.buttonText}>Apply to my room</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.darkOverlay} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={ITEM_WIDTH}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        activeSlideAlignment="start"
        contentContainerCustomStyle={styles.noSpaceAtEnd}
        layout={'default'}
        loop={false}
        snapToAlignment="start"
        firstItem={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: screenWidth - 25,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  imageContainer: {width: '100%', height: '100%', position: 'relative'},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
  },
  noSpaceAtEnd: {paddingRight: 0},
  bottomSection: {
    padding: 24,
    width: '100%',
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
  },
  designTitle: {
    fontSize: 32,
    fontWeight: '400',
    marginBottom: 8,
    color: 'white',
  },
  designDescription: {
    fontSize: 18,
    marginBottom: 24,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  applyButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  detailsButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 15,
    paddingHorizontal: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default DesignCarousel;
