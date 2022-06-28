<script>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

export default {
	name: 'LogoutView',
	setup() {
		const router = useRouter();
		const userStore = useUserStore();
		userStore.logout();
		router.push('/');
	},
};
</script>

<template></template>

<style scoped></style>
