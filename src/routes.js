import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

/* Imports */
import Ionicons from 'react-native-vector-icons/FontAwesome';

/* Rotas Chave */
import Main from '~/pages/Main';
import Explore from '~/pages/Explore';
import Favourite from '~/pages/Favourite';

/* Rodas Complementares */
import Places from '~/pages/Places';

const MainStack = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      title: 'Home',
    },
  },
  Places: {
    screen: Places,
    navigationOptions: {
      title: 'Place',
    },
  },
});

const Routes = createBottomTabNavigator(
  {
    Explore,
    Main: MainStack,
    Favourite,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Explore') {
          iconName = 'map';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Main') {
          iconName = 'coffee';
        } else if (routeName === 'Favourite') {
          iconName = 'bookmark';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={18} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#707070',
      inactiveTintColor: '#bec2ce',
    },
  },
);

export default createAppContainer(Routes);
