import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';
import { MEAL } from "../data/dummy-data";

const MealDetailScreen = (props)=>{
        const mealId = props.navigation.getParam('mealId');

        const displayData = MEAL.find((meal)=> meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{displayData.title}</Text>
            {/* <Text> This is Meal Detail Screen</Text>

            <Button title="Go Back To Main!" onPress={()=>{
                props.navigation.popToTop();
            }}/> */}
        </View>
    )
};

MealDetailScreen.navigationOptions =(navigationData)=>{

    const mealId = navigationData.navigation.getParam('mealId');
    const displayData = MEAL.find((meal)=> meal.id === mealId);

    return{
        title:displayData.title
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