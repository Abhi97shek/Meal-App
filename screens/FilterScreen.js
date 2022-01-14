import React,{useState,useCallback} from "react";
import { useDispatch } from "react-redux";
import {View,StyleSheet,Text,Switch,Button} from 'react-native';
import { HeaderButtons,Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import {set_filters} from "../store/actions/meals";
const FilterScreen = (props)=>{

    const [isGultenFree,setIsGultenFree] = useState(false);
    const [isLactoseFree,setIsLactoseFree] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVegetarian,setIsVegetarian] = useState(false);
    const dispatch = useDispatch();
    const savedFilter = useCallback(()=>{
        const appliedFilter ={
            gultenFree : isGultenFree,
            lactoseFree : isLactoseFree,
            isVegan : isVegan,
            isVegetarian:isVegetarian
        };

        dispatch(set_filters(appliedFilter));
    },[gultenFree,lactoseFree,isVegan,isVegetarian,dispatch]);

    const filterHandler =()=>{
        savedFilter();
    };

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
           
             <View style={styles.buttonContainer}>
                 <Button title="Save" onPress={filterHandler}/>
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
    },
    buttonContainer:{
        width:'20%',
        marginVertical:10
    }

});

export default FilterScreen;