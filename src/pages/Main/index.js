import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Compoments */
import Card from './components/card';
import CardPlaces from './components/placeCard';

import styles from './styles';

class Main extends Component {
  state = {
    raphael: true,
    text: 'Search',
    destaque: [
      {
        id: 1,
        title: 'Irish Coffee',
        img:
          'https://images.unsplash.com/photo-1496560963059-71f771ddb41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        marked: true,
        likes: 34,
        icon: 'glass',
      },
      {
        id: 2,
        title: 'Vienna',
        img:
          'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        marked: false,
        likes: 857,
        icon: 'coffee',
      },
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 123,
        icon: 'beer',
      },
    ],
    place: [
      {
        id: 1,
        title: 'Irish Coffee',
        img:
          'https://images.unsplash.com/photo-1519608113288-6fc3b92c30ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        marked: true,
        likes: 7893,
      },
      {
        id: 2,
        title: 'Vienna',
        img:
          'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        marked: false,
        likes: 7893,
      },
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 7893,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Icon style={styles.icon} name="search" size={14} color="#bec2ce" />
          <Image
            source={{ uri: 'https://ak6.picdn.net/shutterstock/videos/16216756/thumb/1.jpg' }}
            style={styles.avatar}
            loadingIndicatorSource={<ActivityIndicator />}
          />
        </View>

        <View style={styles.mid}>
          <Text style={styles.title}>Destaque</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.destaque}
            keyExtractor={(item, index) => item.id}
            renderItem={destaque => <Card key={destaque.id} destaque={destaque} />}
          />
        </View>

        <View style={styles.bottom}>
          <Text style={styles.title}>Discover new places</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.place}
            keyExtractor={(item, index) => item.id}
            renderItem={place => <CardPlaces key={place.id} destaque={place} />}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Main);
