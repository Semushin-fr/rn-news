import {NEWS_LOADED, NEWS_REQUESTED} from '../types'

const initialState = {
    allNews: {
        all: [],
        politics: [],
        movies: [],
        games: []
    },
    loading: true
};

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case NEWS_LOADED:
            const news = {...state.allNews};
            news[action.category] = [...news[action.category], ...action.payload];
            return {
                ...state,
                loading: false,
                allNews: news
            };
        default:
            return state
    }
};
