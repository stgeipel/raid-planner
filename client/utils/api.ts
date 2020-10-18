import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function getUserDetails() {
  return axios.get('');
}
