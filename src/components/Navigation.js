import React from 'react'
import Home from '../screens/Home'
import Trending from '../screens/Trending'
import WallView from '../screens/WallView'
import Icon from 'react-native-vector-icons/MaterialIcons';

import DStyle from '../configs/styles'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const configs = {
  icon: {
    color: DStyle.colors.text,
    size: 23
  }
}


const routes = {
    Home: {
    screen: Home,
    navigationOptions: {
      title: 'Newests',
      header: null,
      tabBarIcon: () => <Icon
        name="public"
        size={configs.icon.size}
        color={configs.icon.color}
      />
    }
  },
  Trend: {
    screen: Trending,
    navigationOptions: {
      title: 'Trending',
      header: null,
      tabBarIcon: () => <Icon
        name="trending-up"
        size={configs.icon.size}
        color={configs.icon.color}
      />
    }
  },
  Categories: {
    screen: WallView,
    navigationOptions: {
      title: 'Categories',
      header: null,
      tabBarIcon: () => <Icon
        name="view-carousel"
        size={configs.icon.size}
        color={configs.icon.color}
      />
    }
  },
  Favorites: {
    screen: WallView,
    navigationOptions: {
      title: 'Favorites',
      header: null,
      tabBarIcon: () => <Icon
        name="favorite"
        size={configs.icon.size}
        color={configs.icon.color}
      />
    }
  },
  Settings: {
    screen: WallView,
    navigationOptions: {
      title: 'Settings',
      header: null,
      tabBarIcon: () => <Icon
        name="settings"
        size={configs.icon.size}
        color={configs.icon.color}
      />
    }
  },
}

const config = {
    initialRouteName: 'Home',
    activeColor: DStyle.colors.text,
    inactiveColor: DStyle.colors.subText,
    barStyle: { backgroundColor: DStyle.colors.main },
  }

const StackNavigator = createMaterialBottomTabNavigator(routes, config)

export default StackNavigator;