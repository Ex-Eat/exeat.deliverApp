<script lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import DeliverForm from '@//components/forms/DeliverForm.vue';
import PageTitle from '@/components/ui/PageTitle.vue';
import PinkButton from '@/components/ui/buttons/PinkButton.vue';
import { useOrderStore } from '@/stores/order';
import OrderComponent from '@/components/ui/Order.vue';

export default {
	name: 'HomeView',
	components: { OrderComponent, PinkButton, PageTitle, DeliverForm },
	setup() {
		const userStore = useUserStore();
		userStore.loadUser();
		const { user } = storeToRefs(userStore);

		const onTakeOrder = (orderId: string) => {
      orderStore.takeOrder(orderId);
		};

		const orderStore = useOrderStore();
		orderStore.loadOrder();
		orderStore.loadOrders();
		const { order, orders } = storeToRefs(orderStore);

		return {
			user,
			order,
			orders,
			onTakeOrder,
		};
	},
};
</script>
<template>
	<DeliverForm v-if="user && !user.isDeliverer" />
	<OrderComponent v-else-if="user && order" />
	<div v-else-if="user && !order">
		<div class="flex items-center h-[12vh] bg-gray-100 px-10">
			<h1 class="text-2xl">Commandes disponibles</h1>
		</div>
		<div class="m-5">
			<ul>
				<li
					class="w-100 mb-5 bg-gray-50 p-2 pl-10 rounded-3xl flex justify-between items-center"
					v-for="orderItem in orders"
				>
					<span>
						<span class="mr-1">{{ orderItem.deliverFee }} € |</span>
						<span>{{ orderItem.restaurant.name }}</span>
					</span>

					<span>
            <router-link to='/order'>
						  <PinkButton @click="onTakeOrder(orderItem.id)">Prendre</PinkButton>
            </router-link>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
#map {
	height: 10vh;
}
</style>
