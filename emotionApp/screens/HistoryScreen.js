import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from '@react-navigation/native';

const HistoryScreen = () => {
  const [docs,setDocs] = useState([])
 const isFocus = useIsFocused()
  useEffect(()=>{
    getDetails()
  },[isFocus])

  const getDetails = async()=>{
    const emo = [];
   await firestore()
    .collection('emotionss')
    .get()
    .then(querySnapshot => { 
      querySnapshot.forEach(documentSnapshot => {
        console.log(documentSnapshot.data())
        emo.push(documentSnapshot.data().emotion + '   ' +documentSnapshot.data().date);
      });
    });
    setDocs(emo)
  }

  return (
   <View>
            <FlatList
        data={docs}
        renderItem={(item)=><Text style={{fontWeight:'bold'}}>{item.item}</Text>}
        keyExtractor={(item,index) => index}
      />
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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

export default HistoryScreen;
