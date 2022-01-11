import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import MealNavigation from './navigation/MealNavigation';
import MealDetailScreen from './screens/MealDetailScreen';
import { createStore,combineReducers } from 'redux';
import mealReducer from './store/reducers/meals';
import { Provider } from 'react-redux';



const rootReducer = combineReducers({
  meals:mealReducer
});

const store = createStore(rootReducer);

const fetchFonts = ()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sansBold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

 

  return (
    <Provider store={store}>
      <MealNavigation />
    </Provider>
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
