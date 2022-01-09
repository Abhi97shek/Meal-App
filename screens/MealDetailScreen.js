import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';
import { MEAL } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
const MealDetailScreen = (props)=>{
        const mealId = props.navigation.getParam('mealId');

        const displayData = MEAL.find((meal)=> meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{displayData.title}</Text>

        </View>
    )
};

MealDetailScreen.navigationOptions =(navigationData)=>{

    const mealId = navigationData.navigation.getParam('mealId');
    const displayData = MEAL.find((meal)=> meal.id === mealId);

    return{
        title:displayData.title,
        headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favourite" iconName="star-outline" />
        </HeaderButtons>
    }


};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default MealDetailScreen;