import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';

const DetectEmotion = () => {
  const [image, setImage] = useState('');
  const capture = () => {
    ImagePicker.openCamera({
      cropping: false,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
      firestore()
        .collection('emotionss')
        .add({
          emotion: 'excited',
          date: new Date(),
        })
        .then(() => {
          alert('User added!');
        });
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Button
        onPress={() => {
          capture();
        }}
        title="Capture"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 350,
    width: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
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

export default DetectEmotion;
