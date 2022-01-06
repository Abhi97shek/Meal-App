import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import MealNavigation from './navigation/MealNavigation';
import MealDetailScreen from './screens/MealDetailScreen';

const fetchFonts = ()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sansBold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);

  // if(!fontLoaded)
  // {
  //   return(
  //       <AppLoading 
  //         startAsync={fetchFonts} omFinish={()=>{setFontLoaded(true)}}    
  //         onError={(err)=>{console.log(err)}}
  //       />
  //   )
  // }


  return (
    <MealNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
