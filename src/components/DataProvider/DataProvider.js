import { useEffect, useState } from 'react';

/*

1. Компонента йде за даними
2. Компонента отримує дані і кладе їх в state
3. Компонента ділиться даними з кимось іншим, хто знає, як треба відобразити ці дані

*/

const useData = (loadData) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => { // componentDidMount
        loadData()
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, []);

    return {data, isLoading, error};
}

export default useData;

