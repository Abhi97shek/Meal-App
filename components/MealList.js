import React from "react";
import {Stylsheet,View,FlatList, StyleSheet} from 'react-native';



const MealList = (props) =>{
        return(
            <View style={styles.list}>
                <FlatList 
                data={props.listData}
                renderItem={renderItem}
                keyExtractor={(item,index)=> item.id}
                style={{width:'100%'}}
                />
            </View>
        )


};

const styles = StyleSheet.create({
        list:{
            flex:1
        }
});


export default MealList;


