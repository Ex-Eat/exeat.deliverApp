import axios from 'axios';
import { config } from '@/config';

const instance = axios.create({
	baseURL: config.apiGateway,
});

instance.interceptors.request.use(
	(config) => {
		config.withCredentials = true;
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	},
);

export default instance;