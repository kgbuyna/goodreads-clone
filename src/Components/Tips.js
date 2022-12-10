import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
const Tips = (props) => {
  // props.setTips();
  console.log(props);
  return (
    <View style={{flexDirection:'row' , backgroundColor:props.backgroundColor, color:props.color, width:305, height:130, padding:10, marginLeft:4, marginRight:15}}>
      <FontAwesome5 name="trophy" size={38} color="#F0BE6E" style={{alignSelf:'center', flex:3}}/>
      <View style={{justifyContent:'center', padding:10 , flex:13}}>
        <Text style={{fontSize:16, fontWeight:'800'}}>{props.title}</Text>
        <Text ellipsizeMode='tail' numberOfLines={3} style={{fontSize:15}}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={()=>{}} style={{flex:1}}>
        <View style={[StyleSheet.absoluteFillObject, { width: 2, height:23, backgroundColor:"#3f3f3f", transform: [{ rotate: "135deg" }]}]}/>
        <View style={{width:2, height:23, backgroundColor:"#3f3f3f",  transform: [{ rotate: "45deg" }]}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Tips

const styles = StyleSheet.create({})