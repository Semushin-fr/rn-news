import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/awesome.jpg')}
                style={styles.image}
            />
            <Text style={styles.text}>Standard: 5.123.12</Text>
            <Text style={styles.text}>Копирайт 2010-2019 RedFlag Software Ltd.</Text>
            <Text style={styles.text}>Все права защищены</Text>
        </View>
    )
};

AboutScreen.navigationOptions = () => {
    return {
        headerTitle: 'О нас',
        headerTitleStyle: {
            color: '#ffffff',
            fontSize: 20,
            fontFamily: 'open-sans-bold'
        }
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        marginBottom: 15
    }
});
