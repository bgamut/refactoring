import React,{Component,Context,useContext} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Swiper from './components/Swiper'
//import ScrollableHeader from './components/ScrollableHeader'
 
import DefaultFlatList from './components/DefaultFlatList'
//import {FlatList} from 'react'
import {ContextController} from './context'
import {View,Text,ScrollView,Dimensions} from 'react-native'

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    return(
      <ContextController>
        
        {/* <AddPost/> 
        <View style={{flex: 1,
            height:100
          }}>
            <Swiper loop={true} autoplayTimeout = '5'>
                <View style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(20,20,20,0.3)"
                  }}>
                    <Text>Slide 1</Text>
                </View>
                <View style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(110,110,110,0.3)"
                }}>
                    <Text>Slide 2</Text>
                </View>
                <View style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(200,200,200,0.3)"
                }}>
                    <Text>Slide 3</Text>
                </View>
            </Swiper>
        </View> 
        <Posts/> */}
        {/* <ScrollableHeader/> */}
        <View style={{
          height:Window.innerHeight,
          width:Window.innerWidth,
          paddingTop:2,
          paddingRight:10,
          paddingLeft:10
        }}>
        {/* <View style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}> */}
          <AddPost/> 
          <View
            style={{
              flex: 1,
              height:100,
              marginTop:1,
              paddingLeft:2,
              paddingRight:2,
            }}
          >
            <Swiper loop={true} autoplayTimeout={5}>
              <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,20,20,0.3)"
                }}>
                  <Text>Slide 1</Text>
              </View>
              <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(110,110,110,0.3)"
              }}>
                  <Text>Slide 2</Text>
              </View>
              <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(200,200,200,0.3)"
              }}>
                  <Text>Slide 3</Text>
              </View>
          </Swiper>
          </View>
          <DefaultFlatList/>
          {/* <View 
            style={{
              height:Window.innerHeight-140

            }}
          >
            <ScrollView 
              //onScroll={handleScroll}
              scrollEventThrottle={1}
              setVerticalScrollBarEnabled={false}
              setHorizontalScrollBarEnabled={false}
              //onScrollBeginDrag={console.log('began')}
              //onScrollEndDrag={console.log('ended')}
              //onMomentumScrollBegin={console.log('momentum started')}
              //onMomentumScrollEnd={console.log('momentum end')}
              style={{
                //height:Dimensions.get('window').height*2,
                backgroundColor:'transparent'
              }}
            >
              
              <Posts/>
            </ScrollView>
            
          </View> */}
          {/* <View>
            <AddPost/> 
          </View> */}
        </View>
      </ContextController>
    )
  }
}

const appStyle = {
  flex:1,
  margin:0,
  borderColor:'#000000',
  //borderWidth:5,
  // shadowColor: 'rgba(1, 1, 1, 1)',
  // shadowOffset: {width: 0, height: 0},
  // shadowRadius: 20,
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'space-evenly',
  height:22,
};
export default App;
