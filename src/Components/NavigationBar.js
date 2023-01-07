import { StyleSheet, Text, View ,TouchableOpacity, Dimensions} from 'react-native'
import React, {useState, useRef} from 'react'
import { Feather, MaterialCommunityIcons, Entypo , AntDesign } from '@expo/vector-icons';

// const [tip, setTips] = useState(Tip);
const NavigationBar = ({navigation, screen}) => {
  return (

    <View style={{flexDirection:'row', justifyContent:'space-around', height:'8%', borderTopColor:'#E1E1DE', borderWidth:1}}>
        {
        screen === 1 && <View style={{width:"20%", height:3, backgroundColor:"#000000", position:"absolute", top:1, left:0}}/>
        }
        <TouchableOpacity style={{justifyContent:'center'}}  onPress={()=>{navigation.navigate('Home')}}>
            <Feather name="home" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>Home</Text>
        </TouchableOpacity>
        {
        screen === 2 &&  <View style={{width:"20%", height:3, backgroundColor:"#000000", position:"absolute", top:1, left:Dimensions.get('window').width/5}}/> 
        }
        <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{navigation.navigate('MyBooks')}}>    
            <MaterialCommunityIcons name="bookshelf" size={22} color="#A9A9A9" style={{alignSelf:'center'} }/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>My Books</Text>
        </TouchableOpacity>
        {
        screen === 3 && <View style={{width:"20%", height:3, backgroundColor:"#000000", position:"absolute", top:1, left:2*Dimensions.get('window').width/5}}/> 
        }
        <TouchableOpacity style={{justifyContent:'center'}}>
            <Entypo name="compass" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>Discover</Text>
        </TouchableOpacity>
        {
            screen === 4 && <View style={{width:"20%", height:3, backgroundColor:"#000000", position:"absolute", top:1, left:3*Dimensions.get('window').width/5}}/> 
        }
        <TouchableOpacity style={{justifyContent:'center'}}>
            <AntDesign name="search1" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9', marginTop:4 }}>Search</Text>
        </TouchableOpacity>
        {screen === 5 && <View style={{width:"20%", height:3, backgroundColor:"#000000", position:"absolute", top:1, left:4*Dimensions.get('window').width/5}}/> 
        }
        <TouchableOpacity style={{justifyContent:'center'}}>
            <Feather name="more-horizontal" size={22} color="#A9A9A9" style={{alignSelf:'center'}}/>
            <Text style={{fontSize:11, color:'#A9A9A9' , marginTop:4 }}>More</Text>
        </TouchableOpacity>
    </View>
  )
}

export default NavigationBar

const styles = StyleSheet.create({})