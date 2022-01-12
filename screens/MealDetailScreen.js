import React,{useEffect,useCallback} from "react";
import {View,StyleSheet,Text,Button,ScrollView,Image} from 'react-native';
import { MEAL } from "../data/dummy-data";
import { useDispatch,useSelector} from "react-redux";
import HeaderButton from "../components/HeaderButton";
import{toggle_favorite} from "../store/actions/meals";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
const MealDetailScreen = (props)=>{
        const mealId = props.navigation.getParam('mealId');
        const currentFavMeal = useSelector((state)=>state.meals.favoriteMeals.some((meal)=> meal.id  === mealId));
        const dispatch = useDispatch();

        const toggleFavoriteHandler = useCallback(()=>{
        
                dispatch(toggle_favorite(mealId));

        },[dispatch,mealId]);
        const displayData = MEAL.find((meal)=> meal.id === mealId);
    
        useEffect(()=>{
            props.navigation.setParams({toggle_fav:toggle_favorite});
        },[toggle_favorite]);

        useEffect(()=>{
            props.navigation.setParams({currentFav:currentFavMeal});
        },[]);
    return (
        <ScrollView>
            <Image source={{uri:displayData.imageUrl}} style={styles.Image}/>
            <View style={styles.details}>
                    <Text>{displayData.duration}</Text>
                    <Text>{displayData.complexity}</Text>
                    <Text>{displayData.affordability}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {
                displayData.ingredients.map((ingr)=>(
                    <Text style={styles.listItem} key={ingr}>{ingr}</Text>
                ))          
            }
            <Text style={styles.title}>Steps</Text>
            {
                displayData.steps.map((step)=>(
                    <Text style={styles.listItem} key={step}>{step}</Text>
                ))          
            }
        
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions =(navigationData)=>{

    const mealId = navigationData.navigation.getParam('mealId');
    const displayData = MEAL.find((meal)=> meal.id === mealId);
    const toggleFav = navigationData.navigation.getParam('toggle_fav');
    const curFav = navigationData.navigation.getParam('currentFav'); 
    return{
        title:displayData.title,
        headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favourite" iconName={curFav ? "ios-star":'ios-star-outline'} onPress={toggleFav}/>
        </HeaderButtons>
    }


};

const styles = StyleSheet.create({
    Image:{
        width:'100%',
        height:200,
    },
    title:{
        fontSize:20,
        textAlign:'center'
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around',
        backgroundColor:'rgba(0,0,0,0.5)',
        color:'white'
        
    },
    listItem:{
        marginHorizontal:20,
        marginVertical:10,
        borderColor:"#ccc",
        padding:10,
        borderWidth:1
    }

});

export default MealDetailScreen;