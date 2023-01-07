import { StyleSheet, Text, View, TextInput , Keyboard, TouchableOpacity, Animated , Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen';


const SwipableHeader = (props) => {
  console.log(props.children)
  const windowHeight = Dimensions.get('window').height;
  // Searchbar center гээд байрлуулаад байгаа болохоор харагдсаар байна. Тэгэхээр энэний opacity -г л 0 болгохоос өөр аргагүй гэж бодож байна. Homescreen дээр байгаа bar чинь дээшээ зүгээр гүйж байна шд. Тэгсэн чинь минийх болохоор тэгэхгүй байгаад байгаа юм аа. Үүнийг яаж засах вэ? 
    const animatedY = props.scrollOffsetY.interpolate({
      inputRange: [0, 60, 61, windowHeight],
      outputRange: [0, -1, -1, -1],
    })

    
  return (
      <Header>
        {props.children}
      </Header> 
      {/* <Text>Hello</Text> */}
       {/* <Animated.View style={[{position:'absolute', left:0, top:animatedY}]}> */}
       {/* </Animated.View> */}
  )
}

export default SwipableHeader

const styles = StyleSheet.create({
    container:{
      width:'100%',
      flexDirection:"row",
      alignItems:"center",
    },
})