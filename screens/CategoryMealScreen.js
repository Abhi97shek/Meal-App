import React from "react";
import {View,StyleSheet,Text,Button,Platform,FlatList} from 'react-native';
import { CATEGORIES,MEAL } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Colors from "../constants/Colors";
const CategoryMealScreen = (props)=>{

    const renderMealItem = (itemData)=>{

       
        return (

            <MealItem title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} afford={itemData.item.affordability} imageUrl={itemData.item.imageUrl}/>

           
        );

    };
    const catId = props.navigation.getParam('categoryId');
    const displayData = MEAL.filter((meal)=> meal.categoryIds.indexOf(catId)>=0);
    
   
    return (
        <View style={styles.screen}>

            <FlatList 
            data={displayData}
            renderItem={renderMealItem}
            keyExtractor={item => item.id}
            style={{width:'100%',padding:10}}
            />

      
            {/* <Text> This is Category Meal Screen</Text>
            <Text>{selectedData.title}</Text>
            <Button title="Go to Meal Details!" onPress={()=>{
                props.navigation.navigate('MealDetail')
            }}/>
            <Button title="Go Back!" onPress={()=>{
                props.navigation.goBack();
            }} /> */}
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