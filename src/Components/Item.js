import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Item = (props) => {
    return (
       <View style={{backgroundColor:"#ffffff", borderColor:"#E1E1DE" , borderWidth: 1 , marginTop:15, padding:10, height:185}}>
        <Text style={{marginBottom:8, fontWeight:"500"}}>Trending This Week in <Text style={{color:"#215A5A"}}>{props.categories[0]}</Text></Text>
        <View style={{flexDirection:'row'}}>
        <Image
      style={{width: 80, height: 110, marginRight:10}}
      source={{uri: props.img}}/>
          <View style={{justifyContent:"space-between", flex:1}}>
            <Text style={{fontSize: 16, fontFamily:'Georgia'}}>{props.title}</Text>
            <Text style={{fontSize:12, color:"#6F6F6F"}}>by {props.authors[0]}</Text>
            <View style={{backgroundColor:"#46AA71", flexDirection:"row", width:145, borderRadius:5}}>
              <TouchableOpacity style={{ width:120 , height:30, justifyContent:'center', alignItems:'center', padding:5}}> 
                  <Text style={{color:"#ffffff", fontWeight:"600", fontSize:12}}>Want to Read</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:25, alignItems:'center',height:30, justifyContent:'center', borderLeftColor:"#409E6A", borderLeftWidth:1 }}>
                  <AntDesign name="caretdown" size={8} color="#ffffff"/>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row"}}>
              <Text style={{color:"#727272", fontSize:14}}>Rate this book: </Text>
              <TouchableOpacity style={{flexDirection:"row"}}>
                <Entypo name="star" size={16} color="#E4E4E4" />
                <Entypo name="star" size={16} color="#E4E4E4" />
                <Entypo name="star" size={16} color="#E4E4E4" />
                <Entypo name="star" size={16} color="#E4E4E4" />
                <Entypo name="star" size={16} color="#E4E4E4" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})