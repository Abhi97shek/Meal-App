import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";


const renderGridItem=(itemData)=>{

    return (
    <View style={styles.gridItems}>
        <Text>{itemData.item.title}</Text>
    </View>
    )
};
const CategoriesScreen = (props)=>{

    return (
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
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