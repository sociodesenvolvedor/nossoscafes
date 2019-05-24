import React, { Component } from 'react';

import {
  View, ImageBackground, Text, Image, TouchableOpacity, Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

class Card extends Component {
  state = {
    text: 'Search',
    isModalVisible: false,
  };

  componentWillMount() {}

  goPage = () => {
    this.props.navigation.navigate('Places');
  };

  render() {
    return (
      <TouchableOpacity onPress={this.goPage} activeOpacity={0.9}>
        <ImageBackground
          source={{
            uri: `${this.props.destaque.item.img}`,
          }}
          imageStyle={{ borderRadius: 15 }}
          style={styles.imgBck}
        >
          <View style={styles.card}>
            <View style={styles.containerTitle}>
              <Image
                source={{
                  uri: `${this.props.destaque.item.logo}`,
                }}
                style={styles.logo}
              />
              <Text style={styles.title}>{this.props.destaque.item.title}</Text>
            </View>

            <View style={styles.containerTitle}>
              <Icon name="map-marker" size={16} color="#ffff" />
              <Text style={styles.local}>{this.props.destaque.item.local}</Text>
            </View>

            <View style={styles.containerTitle}>
              <Text style={styles.description}>{this.props.destaque.item.description}</Text>
            </View>

            <View style={styles.containerLikes}>
              <View style={styles.likes}>
                <TouchableOpacity activeOpacity={0.9}>
                  <Icon name="heart" size={12} color="#ffff" />
                </TouchableOpacity>

                <Text style={styles.titleLikes}>88783</Text>
              </View>
              <TouchableOpacity activeOpacity={0.9}>
                <Icon
                  name="bookmark"
                  size={18}
                  color={this.props.destaque.item.marked ? '#c83434' : '#ffff'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
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
