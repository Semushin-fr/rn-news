import axios from 'axios'

class NewsService {
    _baseUrl = 'https://news.loldev.ru';

    async getNews() {
        try {
            const news = await axios.get(`${this._baseUrl}/get`);
            return news.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getCategory(category, page) {
        try {
            const item = await axios.get(`${this._baseUrl}/category?category=${category}&page=${page}`);
            return item.data
        } catch (e) {
            throw new Error(e);
        }
    }

    async getNewsItem(id) {
        try {
            const item = await axios.get(`${this._baseUrl}/news?id=${id}`);
            return item.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async sendFeedback(name, phone, text, status) {
        try {
            await axios.post(`${this._baseUrl}/support`, {
                name, phone, text, status
            });
        } catch (e) {
            throw new Error(e)
        }
    }
}

export default NewsService
