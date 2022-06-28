<script>
import AppH2 from '@/components/ui/typo/AppH2.vue';
import AppDivider from '@/components/ui/AppDivider.vue';
import AppInput from '@/components/ui/forms/AppInput.vue';
import PinkButton from '@/components/ui/buttons/PinkButton.vue';
import { useUserStore } from '@/stores/user';

export default {
	name: 'LoginForm',
	components: { PinkButton, AppInput, AppDivider, AppH2 },
	setup() {
		const userStore = useUserStore();

		return {
			userStore,
		};
	},
	data: () => ({
		email: null,
		password: null,
	}),
	methods: {
		async submit(e) {
			e.preventDefault();
			await this.userStore.login(this.email, this.password);
			await this.$router.push('/');
		},
	},
};
</script>

<template>
	<form @submit="submit">
		<div class="flex flex-col mx-auto my-12 p-2 shadow-md rounded-lg w-[480px]">
			<div class="mb-2 text-center">
				<AppH2>Se connecter</AppH2>
			</div>
			<AppDivider />
			<div class="grid gap-3 my-4">
				<AppInput v-model:value="email" name="email" label="E-mail" type="email" required />
				<AppInput v-model:value="password" name="password" label="Password" type="password" required />
			</div>
			<div class="flex justify-center">
				<PinkButton>Se connecter</PinkButton>
			</div>
		</div>
	</form>
</template>

<style scoped></style>
