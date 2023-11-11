import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import DayPlanning from './DayPlanning';
import { currentHomeId } from '../data/data';

interface PlanningProps {
  homeId?: string;
  userId?: string | null;
}

const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const Planning: React.FC<PlanningProps> = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const windowWidth = Dimensions.get('window').width;

  const getTodayDate = () => {
    return new Date().getDay();
  }

  const totalDays = daysOfWeek.length;
  const initialIndex = getTodayDate(); // Initial index pour placer le dimanche au milieu du carousel
  const [currentSliderIndex, setCurrentSliderIndex] = useState(initialIndex);

  useEffect(() => {
    if (scrollViewRef.current) {
      setCurrentSliderIndex(initialIndex); // Réinitialise l'index
      scrollViewRef.current.scrollTo({
        x: initialIndex * windowWidth,
        animated: false,
      });
    }
  }, [scrollViewRef, windowWidth]);

  const handleSliderChange = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    let index = Math.round(contentOffset.x / windowWidth);

    if (index <= 0) {
      // Passe au dernier slide (à la fin)
      index = totalDays;
      scrollViewRef.current?.scrollTo({
        x: (totalDays + initialIndex) * windowWidth,
        animated: false,
      });
    } else if (index >= totalDays + initialIndex + 1) {
      // Passe au premier slide (au début)
      index = initialIndex + 1;
      scrollViewRef.current?.scrollTo({
        x: windowWidth,
        animated: false,
      });
    }

    setCurrentSliderIndex(index);
  };

  // Double la liste des jours pour créer une boucle
  const daysList = [...daysOfWeek, ...daysOfWeek, ...daysOfWeek];

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleSliderChange}
        snapToInterval={windowWidth}
        contentContainerStyle={{ width: windowWidth * (daysList.length + initialIndex) }}
        onMomentumScrollEnd={(event) => {
          const contentOffset = event.nativeEvent.contentOffset;
          let index = Math.round(contentOffset.x / windowWidth);
          if (index === 0) {
            scrollViewRef.current?.scrollTo({
              x: (totalDays + initialIndex) * windowWidth,
              animated: false,
            });
          } else if (index === totalDays + initialIndex + 1) {
            scrollViewRef.current?.scrollTo({
              x: windowWidth,
              animated: false,
            });
          }
        }}
      >
        {daysList.map((day, index) => (
          <View key={index} style={[styles.carouselContainer, { width: windowWidth }]}>
            <Text>PAGE {index}</Text>
            <DayPlanning day={index % totalDays} homeId={currentHomeId} currentSlider={currentSliderIndex % totalDays}></DayPlanning>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Planning;
