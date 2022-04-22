import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const EmotionsHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('DetectEmotion');
        }}
        title="Detect Emotion"
        color="#841584"
      />
      <Button
        onPress={() => {
          navigation.navigate('ReadPhycology');
        }}
        title="Read about psychology"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default EmotionsHome;
