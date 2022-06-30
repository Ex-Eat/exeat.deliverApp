import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';

export const useOrderStore = defineStore({
	id: 'order',
	state: () => ({
		order: null,
		orders: null,
	}),
	getters: {},
	actions: {
		async loadOrder() {
			this.order = null;
		},
		async loadOrders() {
			try {
				//const response = await instance.get(routes.LOAD_CONNECTED_USER);
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				this.orders = fakeOrders;
				return { message: 'Orders successfully loaded' };
			} catch (error) {
				return error;
			}
		},
		async takeOrder(orderId: string) {
			if (this.orders) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				this.order = this.orders.find((o) => o.id == orderId);
			}
		}
	},
});


const fakeOrders = [
	{
		id: "a76sdsa752",
		restaurant: {
			id: "1234",
			name: "Burger King - Gare",
			location: {
				"lat": 48.584394,
				"lng": 7.7339854,
				"address": "Burger King, Place de la Gare, 67083 Strasbourg, France"
			}
		},
		deliver: null,
		client: {
			id: "1234",
			firstName: "Jean",
			location: {
				"lat": 48.583046,
				"lng": 7.746265,
				"address": "5 Place Kléber, 67000 Strasbourg, France"
			}
		},
		deliverFee: 3,
	},
	{
		id: "a76sdsa755",
		restaurant: {
			id: "154",
			name: "Baraka Jeux",
			location: {
				"lat": 48.58389,
				"lng": 7.7439313,
				"address": "Baraka Jeux, Rue du Jeu des Enfants, 67003 Strasbourg, France"
			}
		},
		deliver: null,
		client: {
			id: "1234",
			firstName: "Jean",
			location: {
				"lat": 48.583046,
				"lng": 7.746265,
				"address": "5 Place Kléber, 67000 Strasbourg, France"
			}
		},
		deliverFee: 5,
	},

]
