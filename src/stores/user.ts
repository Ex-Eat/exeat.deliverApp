import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		user: null,
	}),
	getters: {},
	actions: {
		async loadUser() {
			try {
				const response = await instance.get(routes.LOAD_CONNECTED_USER);
				this.user = response.data;
				return { message: 'User successfully loaded' };
			} catch (error) {
				return error;
			}
		},
		async login(email: string, password: string) {
			try {
				const response = await instance.post(routes.LOGIN, {
					email,
					password,
				});
				this.user = response.data;
				return { message: 'Successfully authenticated' };
			} catch (error) {
				return error;
			}
		},
		async signup(data: unknown) {
			try {
				const response = await instance.post(routes.SIGNUP, data);
				this.user = response.data;
				return { message: 'Successfully authenticated' };
			} catch (error) {
				return error;
			}
		},
		async logout() {
			try {
				await instance.get(routes.LOGOUT);
				this.user = null;
				return { message: 'Successfully disconnected' };
			} catch (error) {
				return error;
			}
		},
	},
});
