import {MEALS} from "../../data/dummy-data";

import {SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";
const initalState = {
    meals:MEALS,
    filterMeals:MEALS,
    favoriteMeals:[]
};


const mealReducer = (state=initalState,action)=>{

    switch(action.type)
    {
        case TOGGLE_FAVORITE:{

            const existingIndex = state.favoriteMeals.findIndex((meal)=> meal.id === action.mealId);
            if(existingIndex >= 0)
            {
                const updatedMeals = [...state.favoriteMeals];
                updatedMeals.splice(existingIndex,1);
                    return {
                            ...state,favoriteMeals:updatedMeals
                    }
            }
            else
            {
                const findFavMeal = state.meals.find((meal)=>meal.id === action.mealId);
                return {
                       
                        ...state,favoriteMeals:state.favoriteMeals.concat(findFavMeal)
                }
            }
        }
        case SET_FILTERS:{
            const appliedFilters = action.filters;
            const filterMeals = state.meals.filter((meal)=>{
                if(appliedFilters.glutenFree && !meal.isGutenFree)
                {
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree)
                {
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian)
                {
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan)
                {
                    return false
                }
                return true;
            });
            return {
                ...state,filterMeals:filterMeals
            }
        }
        
        default:
            return state;
    }
   
}


export default mealReducer;