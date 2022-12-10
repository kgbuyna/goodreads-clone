import { StyleSheet, Text, View , FlatList, Animated} from 'react-native'

import React, {useState, useRef} from 'react'

import NavigationBar from '../Components/NavigationBar';
import SearchBar from '../Components/SearchBar'
import Tips from '../Components/Tips';
import Item from '../Components/Item';
import Tip from '../Data/Tip';
import Books from '../Data/Books';
const HomeScreen = () => {
    const [tip, setTips] = useState(Tip);
    const [books, setBooks] = useState(Books);
    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    const renderBook = (book) => <Item {...book.item}/>
     
    const renderItem = ({item}) =>  <Tips {...item}  setTips = {setTips}/>
  return (
      <Animated.View style = {styles.container}>
          <SearchBar scrollOffsetY = {scrollOffsetY}/>
            <FlatList
              ListHeaderComponent ={<FlatList
                horizontal={true}
                data={tip}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />}
              onScroll = {(event) => {
                scrollOffsetY.setValue(event.nativeEvent.contentOffset.y); 
              }}
              data = {books}
              renderItem = {renderBook}
              keyExtractor={(book) => book.key}
              style={{paddingHorizontal:15}}
            />
    </Animated.View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:"#F8F9F4",
      height:'100%',
      width:'100%',
    },
});

export default HomeScreen