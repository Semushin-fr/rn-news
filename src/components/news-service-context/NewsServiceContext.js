import React, {createContext} from 'react';

const {
    Provider: NewsProvider,
    Consumer: NewsConsumer
} = createContext();

export {
    NewsProvider,
    NewsConsumer
}
