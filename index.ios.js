// Index.ios.js - place code in here for IOS!!!

// Import a library to create a Component
// Nothing is Global. Must Import to make any library accessible

import React from 'react';

// Text property of library
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  // Component Nesting
  // Wrap components with View Tag
  // Fill the content area of the full deivce
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
