export default TOGGLE_FAVORITE  = 'TOGGLE_FAVORITE';

export const toggle_favorite = (id) =>{
    return{
        type:TOGGLE_FAVORITE,
        mealId:id
    };
}