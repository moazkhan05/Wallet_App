import React from 'react';
import { View , Text , StyleSheet , FlatList  } from 'react-native';
import {  Container , CheckBox , Body , Left , Right, ListItem } from 'native-base';

import { useSelector } from 'react-redux';

/*Components*/
import Card from './Card';
import EmptyTrans from './EmptyTrans';

/*FlatList Data*/

const List = ( props ) => {
    return(
        <View style= {{ marginVertical: 3, paddingHorizontal : 30 , paddingVertical :15  }}>
            <ListItem>
                <Left>
                    <CheckBox style= {{ marginLeft:-10 }}/>
                </Left>
                <Body>
                    <Text style= {{ fontSize: 20 , fontWeight:'700', marginLeft: -80 }}>{props.title}</Text>
                </Body>
                <Right>
                    <Text style= {{ fontSize: 15 , fontWeight:'400' , color : props.price >0 ? 'green' : 'red' }}>
                                    {props.price}
                    </Text>
                </Right>
            </ListItem>
        </View>
    );
};

/*Flat List end*/

const HomeScreen = ({ navigation }) => {
    const { transactions } = useSelector((state) => state.transactions);

    return (
        <Container>
            
                <Card navigation= {navigation}/>

                {/* <EmptyTrans /> */}
                <FlatList 
                    style={{marginTop:200}} data={ transactions } renderItem= {({item}) =>(
                    <List title={item.title} price={item.price} id={item.id}/>
                    )}
                    keyExtractor = { (item) => item.id.toString()}
                />
        </Container>
    )
}

const styles = StyleSheet.create({
    Card:{
        flex:1,
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20
    },
    Box:{
        width:'100%' , 
        height:189 , 
        borderRadius:15 , 
        flexDirection: 'row' , 
        padding:20
    },
    CurrentBalance:{
        fontSize:15 , 
        fontFamily: 'Lato-Regular' ,
        fontWeight: '600',
        color: '#fff'
    },
    Balance:{
        fontSize:32 ,
        fontFamily: 'Lato-Medium' ,
        fontWeight: '700',
        color: '#fff'
    },
    CardNumber:{
        marginTop:65,
        fontSize:18 ,
        fontFamily: 'Lato-Medium' ,
        fontWeight: '700',
        color: '#bbbb'
    },
    AddBtn:{
        padding:15,
        marginTop:32,
        marginLeft:30,
        backgroundColor:'black',
        justifyContent:'center',
    },
    AddBtnText:{
        color:"#fff",
        fontSize:23,
    }
});

export default HomeScreen
