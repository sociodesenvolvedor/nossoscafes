import React, { Component } from 'react';

import {
  View, Button, Image, Text,
} from 'react-native';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Explore extends Component {
  state = {
    region: null,
    marker: [
      {
        id: 1,
        local: {
          latitude: -19.919,
          longitude: -43.97,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        },
        title: 'Café do bom',
        description: 'É bom memos.',
      },
      {
        id: 2,
        local: {
          latitude: -11.922,
          longitude: -42.1,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        },
        title: 'Café do bom',
        description: 'É bom memos.',
      },
    ],
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        // const response = await Geocoder.from({ latitude, longitude });
        // const address = response.results[0].formatted_address;
        // const location = address.substring(0, address.indexOf(','));

        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      }, // sucesso
      () => {}, // erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }

  render() {
    const {
      region, destination, duration, location,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={region}
          origin={region}
          showsUserLocation
          loadingEnabled
          showsTraffic
          onLongPress={e => alert(e.nativeEvent)}
        >
          {this.state.marker.map(mk => (
            <MapView.Marker
              key={mk.id}
              coordinate={mk.local}
              title={mk.title}
              description={mk.description}
            >
              <Image
                source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                style={styles.logo}
              />
              <MapView.Callout style={styles.callout} tooltip>
                <View style={styles.container}>
                  <Text style={styles.title}>Nome do lugar</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor libero
                    libero, fringilla faucibus leo sagittis sed. Sed sodales, est vel vulputate
                    rhoncus, dolor turpis vulputate risus, id feugia
                  </Text>
                  <View style={styles.containerLikes}>
                    <View style={styles.likes}>
                      <Icon name="heart" size={18} color="#000000" />
                      <Text style={styles.nunmber}>9782</Text>
                    </View>
                    <Icon name="bookmark" size={18} color="#000000" />
                  </View>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
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
)(Explore);
