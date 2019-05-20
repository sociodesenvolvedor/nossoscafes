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
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor libero libero, fringilla faucibus leo sagittis sed. Sed sodales, est vel vulputate rhoncus, dolor turpis vulputate risus,',
        title: 'Irish Coffee',
        img:
          'https://images.unsplash.com/photo-1496560963059-71f771ddb41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        marked: true,
        likes: 34,
        icon: 'glass',
      },
      {
        id: 2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor libero libero, fringilla faucibus leo sagittis sed. Sed sodales, est vel vulputate rhoncus, dolor turpis vulputate risus,',
        title: 'Vienna',
        img:
          'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        marked: false,
        likes: 857,
        icon: 'coffee',
      },
      {
        id: 3,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor libero libero, fringilla faucibus leo sagittis sed. Sed sodales, est vel vulputate rhoncus, dolor turpis vulputate risus,',
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
        logo:
          'https://instagram.fcpq4-1.fna.fbcdn.net/vp/34284900ef1ffc3c704e0b4d50bf4246/5D76B1A0/t51.2885-19/s150x150/60022882_318868829012972_9048317527876173824_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor libero libero, fringilla faucibus leo sagittis sed. Sed sodales, est vel vulputate rhoncus, dolor turpis vulputate risus,',
        title: 'Irish Coffee',
        local: 'Bairro tal',
        img:
          'https://images.unsplash.com/photo-1519608113288-6fc3b92c30ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        marked: true,
        likes: 7893,
      },
      {
        id: 2,
        logo:
          'https://instagram.fcpq4-1.fna.fbcdn.net/vp/f10b86fe315e62f297dc57f61b8f9d67/5D5EC234/t51.2885-19/s150x150/59039773_398418957682743_5176407083217584128_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor libero libero, fringilla faucibus leo sagittis sed. Sed sodales, est vel vulputate rhoncus, dolor turpis vulputate risus,',
        title: 'Vienna',
        local: 'Bairro tal',
        img:
          'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        marked: false,
        likes: 7893,
      },
      {
        id: 3,
        logo: 'https://facebook.github.io/react/logo-og.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor libero libero, fringilla faucibus leo sagittis sed. Sed sodales, est vel vulputate rhoncus, dolor turpis vulputate risus,',
        title: 'Affogato',
        local: 'Bairro tal',
        img: 'https://www.dietdoctor.com/wp-content/uploads/2016/06/DD-183.jpg',
        marked: true,
        likes: 7893,
      },
    ],
  };

  componentWillMount() {
    // console.tron.log(this.props);
  }

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
        <View style={styles.mid}>
          <Text style={styles.title}>Destaque</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.destaque}
            keyExtractor={(item, index) => item.id}
            renderItem={destaque => (
              <Card key={destaque.id} destaque={destaque} navigation={this.props.navigation} />
            )}
          />
        </View>

        <View style={styles.bottom}>
          <Text style={styles.title}>Discover new places</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.place}
            keyExtractor={(item, index) => item.id}
            renderItem={place => (
              <CardPlaces key={place.id} destaque={place} navigation={this.props.navigation} />
            )}
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
