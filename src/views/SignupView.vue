<script>
import SignupForm from '@/components/forms/SignupForm.vue';
import PageTitle from '@/components/ui/PageTitle.vue';

export default {
	name: 'SignupView',
	components: { SignupForm, PageTitle },
};
</script>

<template>
	<div class="flex flex-col">
		<PageTitle>S'inscrire</PageTitle>
		<SignupForm />
	</div>
</template>

<style scoped></style>
