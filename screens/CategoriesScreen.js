import React from "react";
import {View,StyleSheet,Text,Button,TouchableOpacity,Platform,TouchableNativeFeedback} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { HeaderButtons,Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const CategoriesScreen = (props)=>{


    const renderGridItem=(itemData)=>{

        return (
            <View style={styles.gridItems}>
            <TouchableNativeFeedback  onPress={()=>props.navigation.navigate('CategoryMeal',{
                categoryId: itemData.item.id,
                categoryColor:itemData.item.color

            })}>  
                  <View style={{...styles.containerMeal,...{backgroundColor:itemData.item.color}}}>
                    <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
    
        )
    };
    
    return (
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
};
CategoriesScreen.navigationOptions = {
    title: 'Meal Categories',
    headerLeft:<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="HameBurger" iconName="ios-menu" ></Item>
</HeaderButtons>
    


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
    },
    containerMeal:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:5,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        
        fontSize:16
    }

});

export default CategoriesScreen;