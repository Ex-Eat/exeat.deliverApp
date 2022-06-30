<!--<script>-->
<!--import mapboxgl from 'mapbox-gl';-->
<!--import { storeToRefs } from 'pinia/dist/pinia';-->
<!--import { useOrderStore } from '@/stores/order';-->
<!--import { onMounted } from 'vue/dist/vue';-->

<!--export default {-->
<!--	name: 'OrderComponent',-->
<!--	components: {},-->
<!--	setup() {-->
<!--		onMounted(() => {-->
<!--			mapboxgl.accessToken =-->
<!--				'pk.eyJ1IjoiaGRlZ3Jvc3NpIiwiYSI6ImNsNHp0c28wcTBxbGQzY21vdjMycDBqMnYifQ.3yVExbFJ1u_IN6ii9K7rYg';-->
<!--			const map = new mapboxgl.Map({-->
<!--				container: 'map',-->
<!--				style: 'mapbox://styles/mapbox/light-v9',-->
<!--			});-->
<!--			map.on('load', () => {-->
<!--				// TODO: Here we want to load a layer-->
<!--				// TODO: Here we want to load/setup the popup-->
<!--			});-->
<!--		});-->

<!--		const orderStore = useOrderStore();-->
<!--		orderStore.loadOrder();-->
<!--		orderStore.loadOrders();-->
<!--		const { order, orders } = storeToRefs(orderStore);-->

<!--		return {-->
<!--			order,-->
<!--			orders,-->
<!--		};-->
<!--	},-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--	<div class="flex items-center h-[12vh] bg-gray-100 px-10">-->
<!--		<h1 class="text-2xl">Commande n*{{ order.id }}</h1>-->
<!--	</div>-->
<!--	<div class="m-5">-->
<!--		<div class="bg-gray-50 px-10 rounded p-5">-->
<!--			<span>Chercher la commande: </span>-->
<!--			<span>{{ order.restaurant.name }}</span>-->
<!--			<div id="map"></div>-->
<!--		</div>-->
<!--	</div>-->
<!--</template>-->

<!--<style scoped></style>-->
