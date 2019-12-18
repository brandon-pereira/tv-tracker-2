import { subscribe } from '../utilities/websocket';

function useSubscription(type = '', callback) {
    return subscribe(type, callback)
}

export default useSubscription;