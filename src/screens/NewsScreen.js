import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native'
import Carousel from 'react-native-anchor-carousel'
import {Ionicons} from '@expo/vector-icons'

import NewsService from '../services/NewsService'
import {Spinner} from '../components/Spinner'

const {width} = Dimensions.get('window');
const newsService = new NewsService();

export const NewsScreen = ({navigation}) => {
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        const id = navigation.getParam('id');
        newsService.getNewsItem(id).then(item => setNewsItem(item));
    }, []);

    const renderItem = ({item, index}) => {
        const {uri} = item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index);
                }}
            >
                <ImageBackground
                    defaultSource={require('../../assets/images/loading-blur.png')}
                    source={{uri: uri}}
                    style={styles.imageBackground}
                />
            </TouchableOpacity>
        );
    };
    if (!newsItem) {
        return <Spinner/>
    }
    const images = JSON.parse(newsItem.images);
    return (
        <ScrollView>
            <View style={styles.carouselContainer}>
                <Carousel
                    style={styles.carousel}
                    data={images}
                    renderItem={renderItem}
                    itemWidth={0.5 * width}
                    inActiveOpacity={0.3}
                    containerWidth={width}
                    ref={function(c) {
                        this.numberCarousel = c;
                    }}
                />
            </View>
            <View>
                <Text style={styles.newsViewTitle}>{newsItem.title}</Text>
                <Text style={styles.newsViewText}>
                    {newsItem.text}
                </Text>
            </View>
        </ScrollView>
    )
};

NewsScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: navigation.getParam('title'),
        headerTitleStyle: {
            color: '#ffffff',
            fontSize: 20,
            fontFamily: 'open-sans-bold'
        },
        headerBackImage: <Ionicons name='md-arrow-round-back' size={24} color='#fff' />,
        headerLeftContainerStyle: {
            paddingLeft: 25
        }
    }
};

const styles = StyleSheet.create({
    carouselContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        height: 200
    },
    carousel: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB'
    },
    newsViewTitle: {
        fontSize: 22,
        fontFamily: 'open-sans-bold',
        marginBottom: 15,
        paddingLeft: 10,
    },
    newsViewText: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        fontFamily: 'open-sans-regular'
    }
});
