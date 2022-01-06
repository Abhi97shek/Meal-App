import React from "react";
import {View,StyleSheet,Text} from 'react-native';


const FavouriteScreen = (props)=>{

    return (
        <View style={StyleSheet.screen}>
            <Text> This is Favourite Meal Screen</Text>
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

export default FavouriteScreen;