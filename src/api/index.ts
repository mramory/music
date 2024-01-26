import axios from "axios";

const instance = axios.create({
    baseURL: 'http://ws.audioscrobbler.com/2.0/'
});

instance.interceptors.request.use(async function (config) {
    if (config.url?.includes("?")) {
        config.url = config.url + "&api_key=" + import.meta.env.VITE_API_KEY + "&format=json";
    } else {
        config.url = config.url + "?api_key=" + import.meta.env.VITE_API_KEY + "&format=json";
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance;