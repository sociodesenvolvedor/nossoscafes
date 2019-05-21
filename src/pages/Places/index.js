import React, { Component } from 'react';

import {
  View, Text, ScrollView, Image, TouchableOpacity, ImageBackground,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

import styles from './styles';

class Places extends Component {
  state = {
    isModalVisible: false,
    starCount: 3.5,
  };

  handleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  onStarRatingPress = (rating) => {
    this.setState({ starCount: rating });
    alert(`Bom voto de: ${rating}`);
  };

  modal = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Modal
        isVisible={this.state.isModalVisible}
        onSwipeComplete={this.handleModal}
        swipeDirection={['up', 'down']}
      >
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/20/1c/9b/201c9b755cd6ead3d62fdc54d122460e.jpg',
          }}
          imageStyle={{ borderRadius: 15 }}
          style={styles.containerModal}
        >
          <View style={styles.containerModalCenter}>
            <View style={styles.containerTitle}>
              <Icon name="coffee" size={12} color="#ffff" />
              <Text style={styles.titleModal}>Café do bom</Text>
            </View>

            <Text style={styles.textModalCenter}>
              Under the hood react-native-modal uses react-native original Modal component. Before
              reporting a bug, try swapping react-native-modal with react-native original Modal
              component and, if the issue persists, check if it has already been reported as a
              react-native issue.
            </Text>

            <View style={styles.containerLikes}>
              <View style={styles.likes}>
                <TouchableOpacity>
                  <Icon name="heart" size={12} color="#ffff" />
                </TouchableOpacity>

                <Text style={styles.titleLikes}>123</Text>
              </View>
              <TouchableOpacity>
                <Icon name="bookmark" size={18} color="#ffff" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Modal>
      <Modal
        isVisible={this.state.isModalVisible}
        onSwipeComplete={this.handleModal}
        swipeDirection={['up', 'lef', 'right', 'down']}
      >
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/20/1c/9b/201c9b755cd6ead3d62fdc54d122460e.jpg',
          }}
          imageStyle={{ borderRadius: 15 }}
          style={styles.containerModal}
        >
          <View style={styles.containerModalCenter}>
            <View style={styles.containerTitle}>
              <Icon name="coffee" size={12} color="#ffff" />
              <Text style={styles.titleModal}>Café do bom</Text>
            </View>

            <Text style={styles.textModalCenter}>
              Under the hood react-native-modal uses react-native original Modal component. Before
              reporting a bug, try swapping react-native-modal with react-native original Modal
              component and, if the issue persists, check if it has already been reported as a
              react-native issue.
            </Text>

            <View style={styles.containerLikes}>
              <View style={styles.likes}>
                <Icon name="heart" size={12} color="#ffff" />
                <Text style={styles.titleLikes}>123</Text>
              </View>
              <Icon name="bookmark" size={18} color="#ffff" />
            </View>
          </View>
        </ImageBackground>
      </Modal>
    </ScrollView>
  );

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.modal()}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri:
                'http://s3.amazonaws.com/img.iluria.com/user_layout_theme/24E4E/slideshow1.jpg?r=0.612025',
            }}
            style={styles.hero}
          />
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1557798748-69ed070cc14c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
            }}
            style={styles.hero}
          />
        </ScrollView>

        <View style={styles.card}>
          <View style={styles.containerLocal}>
            <View style={styles.containerLocalLeft}>
              <Icon style={styles.icon} name="map-marker" size={14} color="#bec2ce" />
              <Text style={styles.textLocal}>Calle de Loidi, 4, 20160 Lasarte</Text>
            </View>
            <TouchableOpacity>
              <Icon style={styles.icon} name="bookmark" size={14} color="#bec2ce" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Climbing Mont Blanc</Text>
          <View style={styles.containerAvaliacao}>
            <View style={styles.containerReview}>
              <View style={styles.flexRow}>
                <Icon style={styles.icon} name="trophy" size={14} color="#bec2ce" />
                <Text style={styles.textLocal}>Avaliaçõa Geral</Text>
              </View>
              <View style={styles.flexRow}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={14}
                  iconSet="FontAwesome"
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor="#ffb400"
                  emptyStarColor="#bec2ce"
                />
              </View>
            </View>
            <View style={styles.containerReview}>
              <View style={styles.flexRow}>
                <Icon style={styles.icon} name="cutlery" size={14} color="#bec2ce" />
                <Text style={styles.textLocal}>Comida</Text>
              </View>
              <View style={styles.flexRow}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={14}
                  iconSet="FontAwesome"
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor="#ff6c00"
                  emptyStarColor="#bec2ce"
                />
              </View>
            </View>
            <View style={styles.containerReview}>
              <View style={styles.flexRow}>
                <Icon style={styles.icon} name="bell" size={14} color="#bec2ce" />
                <Text style={styles.textLocal}>Serviços</Text>
              </View>
              <View style={styles.flexRow}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={14}
                  iconSet="FontAwesome"
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor="#ff6c00"
                  emptyStarColor="#bec2ce"
                />
              </View>
            </View>
            <View style={styles.containerReview}>
              <View style={styles.flexRow}>
                <Icon style={styles.icon} name="money" size={14} color="#bec2ce" />
                <Text style={styles.textLocal}>Preço</Text>
              </View>
              <View style={styles.flexRow}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={14}
                  iconSet="FontAwesome"
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor="#ff6c00"
                  emptyStarColor="#bec2ce"
                />
              </View>
            </View>
            <View style={styles.containerReview}>
              <View style={styles.flexRow}>
                <Icon style={styles.icon} name="home" size={14} color="#bec2ce" />
                <Text style={styles.textLocal}>Ambiente</Text>
              </View>
              <View style={styles.flexRow}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={14}
                  iconSet="FontAwesome"
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor="#ff6c00"
                  emptyStarColor="#bec2ce"
                />
              </View>
            </View>
          </View>
          <View style={styles.containerInfos}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.containerInfosDescription}>
                <Icon style={styles.icon} name="cutlery" size={22} color="#bec2ce" />
                <View style={styles.containerInfosText}>
                  <Text style={styles.infosTitle}>Cozinha</Text>
                  <Text style={styles.infoTextDescripiton}>Americana, Bar, Frutos do mar.</Text>
                </View>
              </View>
              <View style={styles.containerInfosDescription}>
                <Icon style={styles.icon} name="eye" size={22} color="#bec2ce" />
                <View style={styles.containerInfosText}>
                  <Text style={styles.infosTitle}>Deitas</Text>
                  <Text style={styles.infoTextDescripiton}>Tradicional, Vegetariano, Veganos.</Text>
                </View>
              </View>
              <View style={styles.containerInfosDescription}>
                <Icon style={styles.icon} name="wheelchair-alt" size={22} color="#bec2ce" />
                <View style={styles.containerInfosText}>
                  <Text style={styles.infosTitle}>Acessibilidade</Text>
                  <Text style={styles.infoTextDescripiton}>Acesso a todos os ambientes.</Text>
                </View>
              </View>
              <View style={styles.containerInfosDescription}>
                <Icon style={styles.icon} name="globe" size={22} color="#bec2ce" />
                <View style={styles.containerInfosText}>
                  <Text style={styles.infosTitle}>Site</Text>
                  <Text style={styles.infoTextDescripiton}>www.site.com.br</Text>
                </View>
              </View>
              <View style={styles.containerInfosDescription}>
                <Icon style={styles.icon} name="whatsapp" size={22} color="#bec2ce" />
                <View style={styles.containerInfosText}>
                  <Text style={styles.infosTitle}>Whatsapp</Text>
                  <Text style={styles.infoTextDescripiton}>(00) 99821509211</Text>
                </View>
              </View>
              <View style={styles.containerInfosDescription}>
                <Icon style={styles.icon} name="envelope-open" size={22} color="#bec2ce" />
                <View style={styles.containerInfosText}>
                  <Text style={styles.infosTitle}>Email</Text>
                  <Text style={styles.infoTextDescripiton}>contato@site.com.br</Text>
                </View>
              </View>
              <View style={styles.containerInfosDescription}>
                <Icon style={styles.icon} name="clock-o" size={22} color="#bec2ce" />
                <View style={styles.containerInfosText}>
                  <Text style={styles.infosTitle}>Hórarios</Text>
                  <Text style={styles.infoTextDescripiton}>Seg-Sab 8h00 às 22h00</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.containerSobre}>
            <Text style={styles.title}>Sobre</Text>
            <Text style={styles.textSobre}>
              Mont Blanc, Italian Monte Bianco, mountain massif and highest peak (15,771 feet [4,807
              metres]) in Europe. Located in the Alps, the massif lies along the French-Italian
              border and reaches into Switzerland. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets co
            </Text>
          </View>

          <View style={styles.containerDestaque}>
            <Text style={styles.title}>Destaques</Text>
            <TouchableOpacity onPress={this.handleModal}>
              <Image
                source={{
                  uri:
                    'http://s3.amazonaws.com/img.iluria.com/user_layout_theme/24E4E/slideshow1.jpg?r=0.612025',
                }}
                style={styles.banner}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Places);
