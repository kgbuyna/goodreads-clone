import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 , AntDesign , Ionicons  } from '@expo/vector-icons';
import NavigationBar from '../Components/NavigationBar'
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
export default function MyBooksScreen({navigation}){
  return (
    <View>
      <Header style={{paddingTop:25}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <AntDesign name="plus" size={25} color="black" />
            <Text style={{fontSize:17}}>My Books</Text>
            <Ionicons name="notifications-outline" size={22} color="black" style={{marginLeft:5}}/>
        </View>
      </Header>
      <SearchBar placeholder={'Search books on your shelves'} style={{fontSize:16}}/>
      <NavigationBar screen ={2} navigation={navigation}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        // padding:10,
        paddingTop:18,
        flex:1, 
        flexDirection:'column',
        width:"100%", 
        height:"100%", 
    }
})