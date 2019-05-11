import React, { Component } from 'react';

import {
  View, Text, TextInput, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

class Main extends Component {
  state = {
    raphael: true,
    text: 'Search',
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
          />
        </View>
        <View style={styles.mid}>
          <Text style={styles.title}>Destaque</Text>
          <View style={styles.midImg}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1496560963059-71f771ddb41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              }}
              style={styles.banner}
            />
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              }}
              style={styles.banner}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>Discover new places</Text>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.cardTopLeft}>
                <Icon name="map-marker" size={16} color="#bec2ce" />
                <Text style={styles.cardTitle}>Mont Blanc </Text>
              </View>
              <Icon name="bookmark" size={16} color="#1e2432" />
            </View>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
              }}
              style={styles.imgCoffee}
            />
          </View>
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
