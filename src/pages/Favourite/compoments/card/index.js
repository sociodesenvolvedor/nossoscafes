import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Card extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://images.unsplash.com/photo-1519608113288-6fc3b92c30ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
          }}
        />

        <View style={styles.containerRight}>
          <View style={styles.containerTitle}>
            <Icon name="map-marker" size={18} color="#000000" />
            <Text style={styles.title}>Caucasus Mountains, Georgia</Text>
          </View>
          <View style={styles.containerLikes}>
            <View style={styles.likes}>
              <Icon name="heart" size={18} color="#000000" />
              <Text style={styles.nunmber}>9782</Text>
            </View>
            <Icon name="bookmark" size={18} color="#000000" />
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
)(Card);
