import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
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
    marginBottom: 5,
    paddingHorizontal: 30,
  },
});

export default styles;
