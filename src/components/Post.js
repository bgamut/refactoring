import React from 'react';
import {View,Text} from 'react-native'
//import Swiper from 'react-native-swiper'
import Swiper from 'react-native-web-swiper'
const Post = props => {
  const { post } = props;
  return (
    //<Swiper showsButtons={true}>
    //<Swiper>
    <View style={{
        flex:1,
        flexDirection:'row'
    }}>
       
            <View style={{
                        marginTop:2,
                        marginLeft:2,
                        //marginRight:2,
                        //padding:1,
                        paddingBottom:2,
                        height:22,
                        backgroundColor:'#ffffff',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'row',
                        flex:1,
                        fontSize:12,
                        borderColor:'#cfcfcf',
                        borderRadius:2,
                        color:'black',
                        borderWidth:1,
                        textAlign:'center',
                        }}>
                            
                <Text>
                    {post}
                </Text>
            </View>
            <View style={{
                        marginTop:2,
                        marginLeft:2,
                        //marginRight:2,
                        //padding:1,
                        paddingBottom:2,
                        height:22,
                        width:22,
                        backgroundColor:'#ffffff',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'row',
                        //flex:1,
                        fontSize:12,
                        borderColor:'#cfcfcf',
                        borderRadius:2,
                        color:'black',
                        borderWidth:1,
                        textAlign:'center',
                        }}>
                <Text>
                    O
                </Text>
            </View>
            <View style={{
                        marginTop:2,
                        marginLeft:2,
                        marginRight:2,
                        //padding:1,
                        paddingBottom:2,
                        height:22,
                        width:22,
                        backgroundColor:'#ffffff',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'row',
                        //flex:1,
                        fontSize:12,
                        borderColor:'#cfcfcf',
                        borderRadius:2,
                        color:'black',
                        borderWidth:1,
                        textAlign:'center',
                        }}>
                <Text>
                    X
                </Text>
            </View>
      
    </View>
    //</Swiper>
  );
};

export default Post;