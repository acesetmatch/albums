import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import fetch from 'isomorphic-fetch';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //HTTP request
  //Lifecyle methods (instant)

  state = { albums: [] }; //class level property: Initializing
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(responseData => this.setState({ albums: responseData })); //Updates albums state
  }

// album is prop name to be passed down to Album detail
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );//maps into new array.
  }

  // key must be unique against all other elements in array

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
