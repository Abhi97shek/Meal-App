import React from "react";
import {View,StyleSheet,Text,Button,TouchableOpacity,Platform} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";


const CategoriesScreen = (props)=>{


    const renderGridItem=(itemData)=>{

        return (
            <TouchableOpacity style={styles.gridItems} onPress={()=>props.navigation.navigate('CategoryMeal')}>  
                  <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
    
        )
    };
    
    return (
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
};
CategoriesScreen.navigationOptions = {
    title: 'Meal Categories',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor


};
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItems:{
        flex:1,
        margin:15,
        height:150
    }

});

export default CategoriesScreen;