import React from "react";
import {View,StyleSheet,Text,Button,Platform,FlatList} from 'react-native';
import { CATEGORIES,MEAL } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";


const CategoryMealScreen = (props)=>{

    const MealInfo = useSelector((state)=>state.meals.filterMeals);
 
    const catId = props.navigation.getParam('categoryId');
    const displayData = MealInfo.filter((meal)=> meal.categoryIds.indexOf(catId)>=0);
    const renderMealItem = (itemData)=>{

       
        return (

            <MealItem title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} afford={itemData.item.affordability} 
            imageUrl={itemData.item.imageUrl} onSelectMeal={()=>{props.navigation.navigate('MealDetail',{
                mealId:itemData.item.id
            })}}/>

           
        );

    };
   
    
   
    return (
        <View style={styles.screen}>

            <FlatList 
            data={displayData}
            renderItem={renderMealItem}
            keyExtractor={item => item.id}
            style={{width:'100%',padding:10}}
            />


        </View>
    )
};
CategoryMealScreen.navigationOptions = navigationData=>{
    let catId = navigationData.navigation.getParam('categoryId');
    let mealColor = navigationData.navigation.getParam('categoryColor');
    const selectedData = CATEGORIES.find((cat)=> cat.id === catId);

    return {
        title:selectedData.title,
        headerStyle:{
            backgroundColor:mealColor
        }
      
        
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