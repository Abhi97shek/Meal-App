import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Colors from '../constants/Colors';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import { Ionicons } from '@expo/vector-icons';
const MealsNavigation = createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeal:CategoryMealScreen,
    MealDetail: MealDetailScreen

},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const FavouriteNavigation = createStackNavigator({
    Favourite:FavouriteScreen,
    MealDetail:MealDetailScreen
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});
const MealFavTabNavigator = createMaterialBottomTabNavigator({
    Meal:{
        screen:MealsNavigation,
        navigationOptions:{
            tabBarIcon: (tabInfo)=>{
                return(
                    <Ionicons name='ios-restaurant' size={25} color={'white'}/>
                )
            },
           
        }
    },
    Favorites: {screen:FavouriteNavigation,
    navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return (
                <Ionicons name='ios-star' size={25} color={'white'}/>
            )
        }
    }}
},{
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
    shifting:true
});

export default createAppContainer(MealFavTabNavigator);