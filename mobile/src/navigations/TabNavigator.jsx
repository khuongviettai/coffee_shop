import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Icon from '../utils/Icon';
import {colors} from '../constants/theme';
import PromoScreen from '../screens/PromoScreen';
import HomeNavigator from './HomeNavigator';
import ProductNavigator from './ProductNavigator';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';

const tabs = [
  {
    title: 'Home',
    name: 'Home',
    screen: HomeNavigator,
  },
  {
    title: 'Coffee',
    name: 'Coffee',
    screen: ProductNavigator,
  },
  {
    title: 'Tìm kiếm',
    name: 'Search',
    screen: SearchScreen,
  },
  {
    title: 'Ưu đãi',
    name: 'Gift',
    screen: PromoScreen,
    tabBarBadge: 4,
  },
  {
    title: 'Cá nhân',
    name: 'Profile',
    screen: AccountScreen,
  },
];
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({name, screen, title, tabBarBadge}, index) => {
          return (
            <Tab.Screen
              key={index}
              name={name}
              component={screen}
              options={{
                tabBarBadge: tabBarBadge,
                tabBarIcon: ({focused}) => {
                  return (
                    <View>
                      <Icon
                        icon={name}
                        size={40}
                        style={{
                          tintColor: focused ? colors.mainColor : colors.gray,
                        }}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 12,
                          marginTop: -2,
                          color: focused ? colors.mainColor : colors.gray,
                        }}>
                        {title}
                      </Text>
                    </View>
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
