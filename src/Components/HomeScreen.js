import React from 'react';
import  LinearGradient from "react-native-linear-gradient";
import { View , Text , StyleSheet , FlatList } from 'react-native';
import { Button , Container , CheckBox , Body , Right } from 'native-base';
import Animated from 'react-native-reanimated'
function HomeScreen() {
    return (
        
        <Animated.View 
        style = {{
                    flex:1,
                    alignItems:'center',
                    paddingVertical:10,
                    paddingHorizontal:20
                }}
        >
            <LinearGradient
                colors = {[ '#FAA3d3' , '#EFC90A' , '#F1CB0C']}
                // start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                style = {{ ...styles.Box }}
            >

                <View></View>
            </LinearGradient>
        </Animated.View>
        
    )
}

const styles = StyleSheet.create({
    Box:{
        width:'100%' , 
        height:189 , 
        borderRadius:15 , 
        flexDirection: 'row' , 
        padding:20
    }
});

export default HomeScreen
