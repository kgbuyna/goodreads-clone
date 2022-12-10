import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Feather, MaterialCommunityIcons, Entypo , AntDesign } from '@expo/vector-icons';

const NavigationBar = ({navigation}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-around', height:'8%', borderTopColor:'#E1E1DE', borderWidth:1}}>
        <TouchableOpacity style={{justifyContent:'center'}}>
            <Feather name="home" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center'}}>    
            <MaterialCommunityIcons name="bookshelf" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>My Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center'}}>
            <Entypo name="compass" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center'}}>
            <AntDesign name="search1" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center'}}>
            <Feather name="more-horizontal" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9' , marginTop:4 }}>More</Text>
        </TouchableOpacity>
    </View>
  )
}

export default NavigationBar

const styles = StyleSheet.create({})