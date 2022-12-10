import { StyleSheet, Text, View, TextInput , Keyboard, TouchableOpacity, Animated , Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({scrollOffsetY}) => {

const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
    const animatedTranslateY = scrollOffsetY.interpolate({
      inputRange: [0, 60, 600, windowHeight],
      outputRange: [20, 0, 0, 0],
    })
  return (
    <Animated.View style={[styles.container ,{paddingTop:animatedTranslateY}]}>
      <Animated.View style = {[styles.search_bar, {opacity:1, }]}>
          <AntDesign name="search1" size={19} color="black" style={{marginRight:5}}/>
          <TextInput 
          style= {styles.input}
          placeholder="Title, author or ISBN"
          onSubmitEditing={Keyboard.dismiss}
        />
        
        {/* <Text>{keyboardStatus}</Text> */}
        <TouchableOpacity>
          <AntDesign name="camerao" size={23} color="black"/>
        </TouchableOpacity>
      </Animated.View>
        <Ionicons name="notifications-outline" size={22} color="black" style={{marginLeft:5, opacity:1}}/>
    </Animated.View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:15,
      height:90, 
      width:'100%',
      backgroundColor: '#E5E3D5',
      flexDirection:"row",
      alignItems:"center",
    },
    input:{
        fontSize:17,
        flex:1, 
    },
    search_bar:{
        // opacity:0, 
        flex:1, 
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:"#ffffff", 
        borderRadius:15,
        padding:5,  
        height:36,
        width:'80%', 
    }
})