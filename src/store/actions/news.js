import {NEWS_LOADED, NEWS_REQUESTED} from '../types'

export const newsRequested = () => ({type: NEWS_REQUESTED});

export const newsLoaded = (news, category) => ({
    type: NEWS_LOADED,
    payload: news,
    category: category
});
