import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Card extends Component {
  state = {};

  goPage = () => {
    this.props.navigation.navigate('Places');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goPage} activeOpacity={0.9}>
          <Image
            style={styles.img}
            source={{
              uri:
                'https://images.unsplash.com/photo-1519608113288-6fc3b92c30ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
            }}
          />
        </TouchableOpacity>

        <View style={styles.containerRight}>
          <View style={styles.containerTitle}>
            <Icon name="map-marker" size={18} color="#000000" />
            <TouchableOpacity onPress={this.goPage} activeOpacity={0.9}>
              <Text style={styles.title}>Caucasus Mountains, Georgia</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerLikes}>
            <View style={styles.likes}>
              <TouchableOpacity activeOpacity={0.9}>
                <Icon name="heart" size={18} color="#000000" />
              </TouchableOpacity>

              <Text style={styles.nunmber}>9782</Text>
            </View>
            <TouchableOpacity activeOpacity={0.9}>
              <Icon name="bookmark" size={18} color="#000000" />
            </TouchableOpacity>
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
