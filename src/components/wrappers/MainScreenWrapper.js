import React from 'react'
import {Text} from 'react-native'
import MainScreen from '../../screens/MainScreen'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../AppHeaderIcon'

export const MainScreenWrapper = ({navigation}) => {
    const category = navigation.dangerouslyGetParent().getParam('category');
    return <MainScreen category={category} navigation={navigation}/>
};

MainScreenWrapper.navigationOptions = ({navigation}) => {
    const category = navigation.dangerouslyGetParent().getParam('category');
    const HeaderTitleStyle = {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'open-sans-bold'
    };
    return {
        headerBackTitle: null,
        headerTitle: () => {
            switch (category) {
                case 'politics':
                    return <Text style={HeaderTitleStyle}>Новости политики</Text>;
                case 'games':
                    return <Text style={HeaderTitleStyle}>Игровые новости</Text>;
                case 'movies':
                    return <Text style={HeaderTitleStyle}>Новости кино</Text>;
                default:
                    return <Text style={HeaderTitleStyle}>Все новости</Text>;
            }
        },
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => navigation.openDrawer()}
                />
            </HeaderButtons>
        )
    }
};
