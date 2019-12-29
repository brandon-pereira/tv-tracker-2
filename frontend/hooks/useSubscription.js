import { subscribe } from '../utilities/websocket';
import { useEffect } from 'react';

function useSubscription(type = '', callback) {
    useEffect(() => {
        subscribe(type, callback);
    }, [type, callback]);

    // return subscribe(type, callback)
}

export default useSubscription;
