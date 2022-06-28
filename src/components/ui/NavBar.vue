<script lang="ts">
// import LogoSVG from '/src/assets/logoExeat.svg';
import PinkButton from '@/components/ui/buttons/PinkButton.vue';
import WhiteButton from '@/components/ui/buttons/WhiteButton.vue';
import IconSearch from '@/components/icons/SearchIcon.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import { useUserStore } from '@/stores/user';
import PersonIcon from '@/components/icons/PersonIcon.vue';
import { storeToRefs } from 'pinia';

export default {
	components: { PersonIcon, MenuIcon, IconSearch, PinkButton, WhiteButton },
	setup() {
		const userStore = useUserStore();
		userStore.loadUser();
		const { user } = storeToRefs(userStore);

		return {
			user,
		};
	},
};
</script>

<template>
	<div
		class="bg-exeat-white grid grid-cols-3 items-center p-0 m-0 justify-items-stretch border-b-2 border-b-gray h-[90px]"
	>
		<!-- nom -->
		<div class="flex items-left text-center">
			<div class="px-4">
				<MenuIcon :height="36" :width="36" />
			</div>
			<div class="">
				<RouterLink to="/">
					<span class="font-bold font-mono text-3xl">ex'eat</span>
				</RouterLink>
			</div>
		</div>

		<!-- Barre de recherche -->
		<div class="mt-2 mb-2 relative">
			<input
				type="search"
				id="default-search"
				class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-full border border-gray-100 focus:border-gray-300"
				placeholder="Restaurants, Produits, ..."
				required
			/>
			<div class="flex absolute inset-y-0 left-0 items-center pl-1">
				<button
					type="submit"
					class="w-8 h-8 p-2 rounded-full inline-flex items-center bg-gray-100 hover:brightness-95 focus:brightness-90 transition"
				>
					<IconSearch />
				</button>
			</div>
		</div>

		<!-- Bouton de Login -->
		<div v-if="!user" class="justify-self-end mr-4 space-x-2">
			<RouterLink to="/signup">
				<WhiteButton>Inscription</WhiteButton>
			</RouterLink>
			<RouterLink to="/login">
				<PinkButton>Connexion</PinkButton>
			</RouterLink>
		</div>
		<div v-else class="flex justify-self-end items-center mr-4 space-x-2">
			<WhiteButton>
				<PersonIcon :height="24" :width="24" />
				<span>{{ user.username }}</span>
			</WhiteButton>
			<PinkButton>Panier</PinkButton>
		</div>
	</div>
</template>
