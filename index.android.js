// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import component trong thư mục component
import KhoaPham from "./components/KhoaPham.js"

// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai11ComponentPhan2 extends Component {
  render() {
    return (

      <View>
        <KhoaPham/>

      </View>
    );
  }
}


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai11ComponentPhan2', () => Bai11ComponentPhan2);
