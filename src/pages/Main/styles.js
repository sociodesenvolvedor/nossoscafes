import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 291,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#edeef0',
    flex: 1,
    color: '#bec2ce',
  },
  icon: {
    right: 25,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },
  title: {
    color: '#1e2432',
    fontSize: 21,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 5,
  },
  midImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  banner: {
    height: 100,
    width: (Dimensions.get('window').width - 70) / 2,
    borderRadius: 15,
  },
  card: {},
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  cardTopLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#bec2ce',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.09,
    lineHeight: 18,
    marginLeft: 5,
  },
  imgCoffee: {
    height: 420,
    width: '100%',
    borderRadius: 8,
  },
});

export default styles;
