import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {TouchableOpacity, FlatList} from 'react-native'

import {newsLoaded, newsRequested} from '../store/actions/news'
import {Spinner} from '../components/Spinner'
import WithNewsService from '../components/hoc/WithNewsService'
import {NewsItem} from '../components/NewsItem'

const MainScreen = ({newsService, category, navigation}) => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsRequested());
        setIsLoading(true);
        newsService.getCategory(category, page).then(data => dispatch(newsLoaded(data, category)));
    }, []);

    const loading = useSelector(state => state.news.loading);
    const allNews = useSelector(state => state.news.allNews);

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('NewsScreen', {
                    id: item.id, title: item.title
                })}
            >
                <NewsItem newsItem={item}/>
            </TouchableOpacity>
        )
    };

    const handleLoadMore = () => {
        const newPage = page + 1;
        setIsLoading(true);
        setPage(newPage);
        newsService.getCategory(category, newPage).then((data) => {
            dispatch(newsLoaded(data, category));
            setIsLoading(false);
        });
    };

    if (loading) {
        return <Spinner/>
    }
    return (
        <FlatList
            style={{paddingTop: 15}}
            data={allNews[category]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={isLoading ? <Spinner/> : null}
        />
    )
};

export default WithNewsService()(MainScreen)
