import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from "react-native";

const MealItem = ({title,duration,complexity,afford,imageUrl,onSelectMeal})=>{

        return (
            <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal}>
            <View style={{...styles.mealRow,...styles.mealHeader}}>
                <ImageBackground source={{uri:imageUrl}} style={styles.bgImg}>
                <Text style={styles.title}>{title}</Text>
                </ImageBackground>
            </View >
            <View style={{...styles.mealRow,...styles.mealDetails}}>
                <Text>{duration}m</Text>
                <Text>{complexity.toUpperCase()}</Text>
                <Text>{afford.toUpperCase()}</Text>
            </View>
            </TouchableOpacity>
            </View>
        )



};


const styles = StyleSheet.create({
    mealRow:{
        flexDirection:'row'
    },
    mealItem:{
        width:'100%',
        height:200,
        backgroundColor:'#f5f5f5',
        marginBottom:10,
        borderRadius:10,
        overflow:"hidden"
    },
    mealHeader:{
        height:'85%'
    },
    mealDetails:{
        height:'15%',
       paddingHorizontal:10,
       justifyContent:'space-between',
       alignContent:'center'
    },
    bgImg:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    title:{
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    }
});




export default MealItem;