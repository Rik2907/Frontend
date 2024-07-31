import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.REACT_APP_key, {
    cluster: "ap2",
    encrypted: true,
    authEndpoint: `${process.env.REACT_APP_API_URL}/pusher/auth`,
});

export default pusher;