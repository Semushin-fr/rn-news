import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

export const NewsItem = ({ newsItem }) => {
    const {preview, title, text} = newsItem;
    return (
        <View style={styles.newsItem}>
            <Image
                defaultSource={require('../../assets/images/loading-blur.png')}
                source={{uri: preview}}
                style={{width: 100, height: 100, marginRight: 10}}
            />
            <View style={{flex: 2}}>
                <Text style={styles.newsItemTitle}>
                    {title}
                </Text>
                <Text style={styles.newsItemText}>
                    {text}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    newsItem: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15
    },
    newsItemTitle: {
        fontSize: 13,
        fontFamily: 'open-sans-bold',
        marginBottom: 5
    },
    newsItemText: {
        fontSize: 13,
        fontFamily: 'open-sans-regular'
    }
});
