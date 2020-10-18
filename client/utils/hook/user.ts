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
  const data = fetch('http://localhost:3001/api/auth', {
    credentials: 'include',
  })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Fehler');
      }
      return res.json();
    })
    .catch((err) => console.log(err));
}
