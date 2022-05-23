import { useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';

/*
  Implementation from SWR docs:
  https://swr.vercel.app/examples/infinite-loading
*/

export default function useContentLoader(
  content,
  contentParams = {},
  contentType,
  handleContent,
  pagesToLoad = 1,
  initialPages = 1
) {
  const queryParams = new URLSearchParams(contentParams).toString();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `/api/${contentType}?page=${index + 1}&${queryParams}`,
    fetcher,
    { initialSize: initialPages }
  );

  const loadedContent = data ? [].concat(...data) : content;
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pagesToLoad);
  // const isRefreshing = isValidating && data && data.length === size;

  useEffect(() => {
    handleContent(loadedContent);
  }, [size]);

  return { size, setSize, isLoadingMore, isReachingEnd };
}
