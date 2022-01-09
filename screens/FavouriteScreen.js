import React from "react";
import {View,StyleSheet,Text,FlatList} from 'react-native';
import { MEAL } from "../data/dummy-data";
import MealItem from "../components/MealItem";


const FavouriteScreen = (props)=>{

    const renderFavMeal = (itemData)=>{
        return(
            <MealItem title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} afford={itemData.item.affordability} 
            imageUrl={itemData.item.imageUrl} onSelectMeal={()=>{props.navigation.navigate('MealDetail',{
                mealId:itemData.item.id
            })}}/>
        )
    };


    const MealsData = MEAL.filter((meal)=> meal.id  === 'm1' || meal.id === 'm2');

    return (
        <View style={StyleSheet.screen}>
            <FlatList 
            data={MealsData}
            renderItem={renderFavMeal}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});
FavouriteScreen.navigationOptions = {

    headerTitle:'Favourite Meal!'
};
export default FavouriteScreen;