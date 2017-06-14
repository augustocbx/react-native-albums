// Index.ios.js


// Import a libray to help crate a Component
import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album_list';

// Create a Component
const App = () => (
  <View>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
