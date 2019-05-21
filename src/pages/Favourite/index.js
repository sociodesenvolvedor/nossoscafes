import React, { Component } from 'react';

import {
  View, Text, FlatList, TextInput, Image, ActivityIndicator,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

/* Compoments */
import Card from './compoments/card';

import styles from './styles';

class Favourite extends Component {
  state = {
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
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 123,
        icon: 'beer',
      },
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 123,
        icon: 'beer',
      },
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 123,
        icon: 'beer',
      },
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 123,
        icon: 'beer',
      },
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 123,
        icon: 'beer',
      },
      {
        id: 3,
        title: 'Affogato',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 123,
        icon: 'beer',
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
  };

  top = () => (
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
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Produtos</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.destaque}
          keyExtractor={(item, index) => item.id}
          renderItem={destaque => (
            <Card key={destaque.id} destaque={destaque} navigation={this.props.navigation} />
          )}
        />
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
)(Favourite);
