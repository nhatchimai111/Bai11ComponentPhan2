// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
export default class KhoaPham extends Component {
  render() {
    return (
      
      <View style={aoKPT.o}>

      </View>
    );
  }
}


// Khai báo Component
var aoKPT = StyleSheet.create({
  
  o:{

    width:200,
    height:100,
    backgroundColor:"green",
    color:"yellow",
    justifyContent:'center',
    alignItems:'center'
  }

});
