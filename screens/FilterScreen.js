import React,{useState} from "react";
import {View,StyleSheet,Text,Switch} from 'react-native';


const FilterScreen = (props)=>{

    const [isGultenFree,setIsGultenFree] = useState(false);
    const [isLactoseFree,setIsLactoseFree] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVegetarian,setIsVegetarian] = useState(false);
   
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.filterContainer}>
                    <Text>Gluten-Free</Text>
                    <Switch 
                    trackColor={{true:'green'}}
                    thumbColor={'red'}
                    value={isGultenFree} onValueChange={newValue=>setIsGultenFree(newValue)}/>
            </View>
            <View style={styles.filterContainer}>
                    <Text>Lactose-Free</Text>
                    <Switch 
                    trackColor={{true:'green'}}
                    thumbColor={'red'}
                    value={isLactoseFree} onValueChange={newValue=>setIsLactoseFree(newValue)}/>
            </View>
            <View style={styles.filterContainer}>
                    <Text>Vegan</Text>
                    <Switch 
                    trackColor={{true:'green'}}
                    thumbColor={'red'}
                    value={isVegan} onValueChange={newValue=>setIsVegan(newValue)}/>
            </View>
            <View style={styles.filterContainer}>
                    <Text>Vegetarian</Text>
                    <Switch 
                    trackColor={{true:'green'}}
                    thumbColor={'red'}
                    value={isVegetarian} onValueChange={newValue=>setIsVegetarian(newValue)}/>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        
        alignItems:'center'
    },
    filterContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'80%'
    },
    title:{
        fontSize:22,
        margin:20,
        textAlign:'center'
    }

});

export default FilterScreen;