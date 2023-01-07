import { StyleSheet, Text, View, TextInput , Keyboard, TouchableOpacity, Animated , Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({placeholder}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [cancel , setCancel] = useState(false); 
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
  return (
        <View style = {[styles.search_bar]}>
            <AntDesign name="search1" size={19} color="black" style={{marginRight:5}}/>
            <TextInput 
            style= {styles.input}
            placeholder={placeholder}
            onPressIn = {(e)=>{
              console.log("Daragdlaa")
              setCancel(true);
            }}
            onSubmitEditing={()=> {
              setCancel(false);
              Keyboard.dismiss()
            }}
            />
          <TouchableOpacity>
            <AntDesign name="camerao" size={23} color="black"/>
          </TouchableOpacity>
          {cancel && <TouchableOpacity  onPress={()=> {setCancel(false); Keyboard.dismiss()}} style={{marginHorizontal:2}}>
            <Text style={{fontSize:20, color:'#65594B'}}>Cancel</Text>
          </TouchableOpacity>}
        </View>
          
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
      width:'100%',
      flexDirection:"row",
      alignItems:"center",
    },
    input:{
        fontSize:17,
        flex:1, 
    },
    search_bar:{
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