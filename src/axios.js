import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-288d7.cloudfunctions.net/api' // the API (cloud function) URL
    // http://localhost:5001/clone-288d7/us-central1/api local
});

export default instance;