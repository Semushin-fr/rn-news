import React from 'react'
import {NewsConsumer} from '../news-service-context/NewsServiceContext'

const WithNewsService = () => (Wrapped) => {
    return props => {
        return (
            <NewsConsumer>
                {
                    (newsService) => {
                        return (
                            <Wrapped {...props} newsService={newsService}/>
                        )
                    }
                }
            </NewsConsumer>
        )
    }
};

export default WithNewsService
