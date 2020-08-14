import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ApiContext from '../../../Context/ApiContext';

function useDevice() {

    const api = useContext(ApiContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    useEffect(
        () => {
            const loadData = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(
                        api.url + 'device',
                    );
                    setLoading(false);
                    setData(response.data);
                } catch (error) {
                    if (error.response) {
                        setError(error.response)
                    } else if (error.request) {
                        setError(error.request)
                    } else {
                        setError(error.message)
                    }
                    setLoading(false);
                }
            };
            
            loadData();
            return () => {
                setData([]);
            };
        }, [api.url]);

    return { data, loading, error };
}

export default useDevice;
