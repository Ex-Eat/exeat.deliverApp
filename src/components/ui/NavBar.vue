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
	components: { PersonIcon, PinkButton, WhiteButton },
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
		class="bg-exeat-white grid grid-cols-2 items-center p-0 m-0 justify-items-space-between border-b-2 border-b-gray h-[90px] w-[100%]"
	>
		<!-- nom -->
		<div class="flex items-left text-center w-[70%]">
			<div class="px-10">
				<RouterLink to="/">
					<span class="font-bold font-mono text-2xl">ex'eat</span>
					<span class="font-bold font-mono text-2xl text-primary-700"> livreur</span>
				</RouterLink>
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
			</WhiteButton>
		</div>
	</div>
</template>
