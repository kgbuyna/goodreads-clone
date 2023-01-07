import { StyleSheet, FlatList, Animated} from 'react-native'

import React, {useState, useRef, useEffect} from 'react'

import NavigationBar from '../Components/NavigationBar';
import SearchBar from '../Components/SearchBar'
import Tips from '../Components/Tips';
import Item from '../Components/Item';
import Tip from '../Data/Tip';
import Header from '../Components/Header';
import SwipableHeader from '../Components/SwipableHeader'
import axios from 'axios'

const HomeScreen = ({navigation}) => {
    const [tip, setTips] = useState(Tip);
    
    const [data , setData] = useState("");
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    
    const renderBook = (book) => <Item {...book.item}/>   
    const renderItem = ({item}) =>  <Tips {...item}  setTips = {setTips}/>

    useEffect(() => {
      async function getBooks() {
        await axios
          .get("http://167.172.80.128", {
            headers: {
              "Content-Type": "application/json"
            },
          })
          .then((response) => {
            setData(response.data.data);
            console.log(response.data.data[0]);
          })
          .catch((err) => {
            console.log(err, "error");
          });
      }
      getBooks();
    }, []);
      
  return (
      <Animated.View style = {styles.container}>
        {/* <Header/> */}
        <SwipableHeader scrollOffsetY = {scrollOffsetY}>
          <SearchBar placeholder={'Title, author or ISBN'} style={{fontSize:17}}/>
        </SwipableHeader>
          <FlatList
              ListHeaderComponent ={<FlatList
                horizontal={true}
                data={tip}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />}
              // onRefresh = {onRefresh}
              onScroll = {(event) => {
                scrollOffsetY.setValue(event.nativeEvent.contentOffset.y); 
              }}
              renderItem = {renderBook}
              data = {data}
              keyExtractor={(book) => book.key}
              style={{paddingHorizontal:15}}
            />
            <NavigationBar screen ={1} navigation={navigation}/>
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