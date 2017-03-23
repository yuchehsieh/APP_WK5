
import React from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
//import Header from './src/components/Header';
//import AlbumList from './src/components/AlbumList';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

const wk5 = () => (
    <ScrollView
          directionalLockEnabled={false}
          horizontal={true}
        >
          <Page1 />
          <Page2 />
          <ScrollView
          directionalLockEnabled={false}
          horizontal={true}
        >
          <Page3 />
        </ScrollView> 
        </ScrollView>      
        
    );

AppRegistry.registerComponent('wk5', () => wk5);
