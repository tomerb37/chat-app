import axios from 'axios';

export default axios.create({
    //baseURL: 'https://tomer-chat-server.herokuapp.com'
    baseURL: 'http://localhost:5000'
});