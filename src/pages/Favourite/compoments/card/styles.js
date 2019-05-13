import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#e8e8e8',
  },
  img: {
    width: 70,
    height: 90,
    borderRadius: 12,
  },
  title: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.39,
    marginLeft: 5,
  },
  nunmber: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.39,
    marginLeft: 5,
  },
  containerRight: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
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
