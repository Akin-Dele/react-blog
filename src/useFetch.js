import { useEffect, useState } from 'react';

const useFetch = (url) => {  
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortFetch = new AbortController();

        fetch(url, { signal: abortFetch.signal })
        .then(res => {
            if(!res.ok) {
                throw Error('could not fetch data');
            }
              return res.json();
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('Abort completed');
            } else {
                setIsLoading(false);
                setError(err.message);
            }
        });
        return () => abortFetch.abort();
    },[url]);

    return { data, isLoading, error }
}
 
export default useFetch;