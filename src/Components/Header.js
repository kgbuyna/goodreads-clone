import { StyleSheet, View } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        width:'100%',
        backgroundColor: '#E4E0D8',
        height:65,
      }
})