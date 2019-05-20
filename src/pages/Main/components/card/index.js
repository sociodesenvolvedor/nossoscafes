import React, { Component } from 'react';

import {
  View, ImageBackground, Text, TouchableOpacity,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

class Card extends Component {
  state = {
    text: 'Search',
  };

  componentWillMount() {
    console.tron.log(this.props);
  }

  goPage = () => {
    this.props.navigation.navigate('Places');
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.goPage()}>
        <ImageBackground
          source={{
            uri: `${this.props.destaque.item.img}`,
          }}
          imageStyle={{ borderRadius: 15 }}
          style={styles.imgBck}
        >
          <View style={styles.card}>
            <View style={styles.containerTitle}>
              <Icon name={this.props.destaque.item.icon} size={12} color="#ffff" />
              <Text style={styles.title}>{this.props.destaque.item.title}</Text>
            </View>

            <View style={styles.containerLikes}>
              <View style={styles.likes}>
                <Icon name="heart" size={12} color="#ffff" />
                <Text style={styles.titleLikes}>{this.props.destaque.item.likes}</Text>
              </View>
              <Icon
                name="bookmark"
                size={18}
                color={this.props.destaque.item.marked ? '#c83434' : '#ffff'}
              />
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
