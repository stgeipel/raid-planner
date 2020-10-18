// import { getFetcher } from '../fetcher';
// import useSWR from 'swr';

// function getUser() {
//   const { data, error } = useSWR(`/api/auth`, getFetcher);
//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

// export { getUser };

export function getUser() {
  return fetch('http://localhost:3001/api/auth', {
    credentials: 'include',
  }).then((res) => {
    res.json();
  });
}
