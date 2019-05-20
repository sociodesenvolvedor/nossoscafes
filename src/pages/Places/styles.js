import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  hero: {
    flex: 1,
    height: 200,
    width: Dimensions.get('window').width,
  },
  banner: {
    width: Dimensions.get('window').width - 60,
    height: 100,
    borderRadius: 10,
  },
  card: {
    minHeight: Dimensions.get('window').height / 3,
    justifyContent: 'space-between',
    bottom: 20,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  containerLocal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerLocalLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInfos: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerInfosDescription: {
    marginTop: 15,
    marginBottom: 2,
    marginLeft: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInfosText: {
    maxWidth: Dimensions.get('window').width / 5,
    justifyContent: 'center',
    marginLeft: 6,
  },
  containerSobre: {
    backgroundColor: '#f5f6f7',
    maxWidth: Dimensions.get('window').width,
    borderRadius: 10,
    paddingBottom: 15,
    paddingHorizontal: 5,
  },
  containerDestaque: {
    maxWidth: Dimensions.get('window').width,
    borderRadius: 10,
    paddingBottom: 15,
    paddingHorizontal: 5,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerAvaliacao: {
    backgroundColor: '#f5f6f7',
    maxWidth: Dimensions.get('window').width,
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  containerReview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  textLocal: {
    color: '#bec2ce',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.09,
    lineHeight: 18,
    marginLeft: 5,
  },
  title: {
    color: '#1e2432',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 34,
    paddingVertical: 5,
  },
  infosTitle: {
    color: '#1f2533',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: -0.09,
  },
  infoTextDescripiton: {
    color: '#bec2ce',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: -0.09,
  },
  textSobre: {
    color: '#bec2ce',
    fontFamily: 'Poppins',
    fontSize: 14,
  },

  // Modal
  containerModal: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 20,
    height: Dimensions.get('window').height / 2,
    padding: 10,
  },
  containerLikes: {
    flexDirection: 'row',
  },
  containerModalCenter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  likes: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleModal: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.09,
    marginLeft: 10,
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
  textModalCenter: {
    backgroundColor: '#3d3d3d30',
    padding: 10,
    color: '#ffffff',
    borderRadius: 10,
    fontFamily: 'Poppins',
    fontSize: 14,
    marginVertical: 10,
  },
});

export default styles;
