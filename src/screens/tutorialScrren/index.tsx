import React, { useState, useRef } from 'react';
import { View, Image, FlatList, Dimensions, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from '../../assets';
import { slides } from '../../api/tutorialjson';
import strings from '../../utils/strings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tutorial = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);



  const handleCompleteTutorial = async () => {
    try {
      await AsyncStorage.setItem('hasSeenTutorial', 'true');
      navigation.reset({
        index: 0,
        routes: [{ name: 'login' }],
      });
    } catch (error) {
      console.error('Error saving tutorial status:', error);
    }
  };


  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
     handleCompleteTutorial();
    }
  };

  const handleSkip = () => {
    handleCompleteTutorial();
  };

  // const handleHome = () => {
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'login' }],
  //   });
  // };

  const renderItem = ({ item }) => (
    <View style={[styles.slide]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderPaginationDots = () => (
    <View style={styles.paginationDotsContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            { opacity: currentIndex === index ? 1 : 0.5 },
          ]}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.header1} >
          {slides[currentIndex].key !== 'k1' && (
            <Image source={Icon.left_arrow} style={styles.leftarrow} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.header1} onPress={handleSkip}>
          <Text style={styles.Skip}>{strings.skip}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / Dimensions.get('window').width
            );
            setCurrentIndex(index);
          }}
        />
        {renderPaginationDots()}
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonimage} onPress={handleNext}>
          <Text style={styles.buttonText}>{strings.next}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Tutorial;
