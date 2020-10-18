import axios from 'axios';

const getFetcher = (url: string) => axios.get(url).then((res) => res.data);

const postFetcher = (url: string) => axios.get(url).then((res) => res.data);

export { getFetcher, postFetcher };
