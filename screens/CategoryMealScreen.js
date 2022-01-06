import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';


const CategoryMealScreen = (props)=>{

    return (
        <View style={styles.screen}>
            <Text> This is Category Meal Screen</Text>
            <Button title="Go to Meal Details!" onPress={()=>{
                props.navigation.navigate('MealDetail')
            }}/>
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

export default CategoryMealScreen;