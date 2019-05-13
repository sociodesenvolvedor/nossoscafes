import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  containerLikes: {
    flexDirection: 'row',
  },
  likes: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgBck: {
    height: Dimensions.get('window').height / 1.8,
    width: Dimensions.get('window').width - 60,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.45,
    lineHeight: 38,
    marginLeft: 5,
  },
  titleLikes: {
    marginLeft: 5,
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.29,
    lineHeight: 20,
  },
});

export default styles;
