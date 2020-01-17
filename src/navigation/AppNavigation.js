import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'

import {NewsScreen} from '../screens/NewsScreen'
import {FeedbackScreen} from '../screens/FeedbackScreen'
import {AboutScreen} from '../screens/AboutScreen'
import {THEME} from '../theme'
import {MainScreenWrapper} from '../components/wrappers/MainScreenWrapper'

//Стили для хэдера
const navigatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: THEME.MAIN_COLOR
        },
        headerTintColor: '#fff'
    }
};

//Навигация по новостям
const NewsStack = createStackNavigator({
    MainScreen: MainScreenWrapper,
    NewsScreen: NewsScreen
}, navigatorOptions);

//Навигация обратной связи
const FeedbackStack = createStackNavigator({
    FeedbackScreen: FeedbackScreen
}, navigatorOptions);

//Навигация Инфо
const AboutStack = createStackNavigator({
    AboutScreen: AboutScreen
}, navigatorOptions);

//Боковое меню (drawer)
const MainDrawer = createDrawerNavigator({
    AllDrawer: {
        screen: NewsStack,
        navigationOptions: {
            drawerLabel: 'Все новости'
        },
        params: {
            category: 'all'
        }
    },
    PoliticsDrawer: {
        screen: NewsStack,
        navigationOptions: {
            drawerLabel: 'Новости политики'
        },
        params: {
            category: 'politics'
        }
    },
    MoviesDrawer: {
        screen: NewsStack,
        navigationOptions: {
            drawerLabel: 'Новости кино'
        },
        params: {
            category: 'movies'
        }
    },
    GamesDrawer: {
        screen: NewsStack,
        navigationOptions: {
            drawerLabel: 'Игровые новости'
        },
        params: {
            category: 'games'
        }
    },
}, {
    contentOptions: {
        itemsContainerStyle: {
            paddingTop: 100
        }
    }
});

//Нижние табы
const MainBottomTabs = createBottomTabNavigator({
    NewsSwitch: {
        screen: MainDrawer,
        navigationOptions: {
            tabBarLabel: 'Новости',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name='md-home' size={25} color={tintColor}/>
            )
        }
    },
    FeedbackSwitch: {
        screen: FeedbackStack,
        navigationOptions: {
            tabBarLabel: 'Обратная связь',
            tabBarIcon: ({tintColor}) => (
                <MaterialIcons name='feedback' size={25} color={tintColor}/>
            )
        }
    },
    AboutSwitch: {
        screen: AboutStack,
        navigationOptions: {
            tabBarLabel: 'Инфо',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name='md-information-circle' size={25} color={tintColor}/>
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#dfdfdf',
        labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
        },
        style: {
            backgroundColor: THEME.MAIN_COLOR,
            marginTop: 15,
            paddingTop: 6
        }
    }
});

export const AppNavigation = createAppContainer(MainBottomTabs);
