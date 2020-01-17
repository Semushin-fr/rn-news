import React, {useState} from 'react'
import {AppLoading} from 'expo'
import {AppNavigation} from './src/navigation/AppNavigation'
import {Provider} from 'react-redux'

import store from './src/store'
import {NewsProvider} from './src/components/news-service-context/NewsServiceContext'
import NewsService from './src/services/NewsService'
import {bootstrap} from './src/bootstrap'

const newsService = new NewsService();

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={err => console.log(err)}
            />
        )
    }

    return (
        <Provider store={store}>
            <NewsProvider value={newsService}>
                <AppNavigation/>
            </NewsProvider>
        </Provider>
    );
}
