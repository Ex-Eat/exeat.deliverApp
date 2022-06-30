import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue';
import SignupView from '../views/SignupView.vue';
import AcceptedOrderView from '../views/AcceptedOrderView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignupView,
		},
		{
			path: '/logout',
			name: 'logout',
			component: LogoutView,
		},
		{
			path: '/order',
			name: 'order',
			component: AcceptedOrderView,
		},
	],
});

export default router;
