import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.39,
    marginBottom: 10,
  },
  description: {
    color: '#bec2ce',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.09,
    marginBottom: 10,
    lineHeight: 18,
  },
  nunmber: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.39,
    marginLeft: 5,
  },

  containerLikes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
