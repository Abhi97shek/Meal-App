import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';


const CategoriesScreen = (props)=>{

    return (
        <View style={styles.screen}>
            <Text> This is Categories Screen</Text>
            <Button title="Go To Meals!" onPress={()=>{
                props.navigation.navigate('CategoryMeal');
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

export default CategoriesScreen;