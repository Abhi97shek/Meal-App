import React from "react";
import {View,StyleSheet,Text,Button,Platform} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
const CategoryMealScreen = (props)=>{
    const catId = props.navigation.getParam('categoryId');
    const selectedData = CATEGORIES.find((cat)=> cat.id === catId);
    
   
    return (
        <View style={styles.screen}>
            <Text> This is Category Meal Screen</Text>
            <Text>{selectedData.title}</Text>
            <Button title="Go to Meal Details!" onPress={()=>{
                props.navigation.navigate('MealDetail')
            }}/>
            <Button title="Go Back!" onPress={()=>{
                props.navigation.goBack();
            }} />
        </View>
    )
};
CategoryMealScreen.navigationOptions = navigationData=>{
    let catId = navigationData.navigation.getParam('categoryId');
    const selectedData = CATEGORIES.find((cat)=> cat.id === catId);

    return {
        title:selectedData.title
        
    }
};
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default CategoryMealScreen;