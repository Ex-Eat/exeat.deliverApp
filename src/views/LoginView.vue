<script lang="ts">
import TitleView from '@/components/ui/PageTitle.vue';
import LoginForm from '@/components/forms/LoginForm.vue';

export default {
	name: 'LoginView',
	components: { LoginForm, PageTitle: TitleView },
};
</script>

<template>
	<div class="flex flex-col">
		<PageTitle>Se connecter</PageTitle>
		<LoginForm />
	</div>
</template>

<style scoped></style>
