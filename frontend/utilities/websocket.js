// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8000/ws');

const _subscribers = {};

function send({ type, payload }) {
    socket.send(JSON.stringify({ type, payload }));
}

function subscribe(type, callback) {
    if (!_subscribers[type]) {
        _subscribers[type] = [];
    }
    _subscribers[type].push(callback);
    console.log(_subscribers);
}

socket.addEventListener('message', event => {
    // console.log('Message from server ', event.data);
    try {
        const data = JSON.parse(event.data);
        if (data && data.type && _subscribers[data.type]) {
            _subscribers[data.type].forEach(cb => cb(data));
        } else if (data && data.type) {
            console.warn(`Received event with type "${data.type}" but no subscribers found.`);
        } else {
            console.error(`Received invalid event`, event.data);
        }
    } catch (err) {
        console.error(err);
    }
});

subscribe('status', () => {
    console.info('Connection established with server.');
});

export { send, subscribe };
