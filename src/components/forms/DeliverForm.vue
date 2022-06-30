<script>
import PinkButton from '@/components/ui/buttons/PinkButton.vue';
import AppInput from '@/components/ui/forms/AppInput.vue';
import AppDivider from '@/components/ui/AppDivider.vue';
import AppH2 from '@/components/ui/typo/AppH2.vue';
import { useUserStore } from '@/stores/user';
import AppCheckBox from '@/components/ui/forms/AppCheckBox.vue';
import { fr } from 'date-fns/locale';
import { storeToRefs } from 'pinia/dist/pinia';

export default {
	name: 'DeliverForm',
	components: { AppCheckBox, PinkButton, AppInput, AppDivider, AppH2 },
	setup() {
		const userStore = useUserStore();
		userStore.loadUser();
		const { user } = storeToRefs(userStore);

		return {
			userStore,
			user,
		};
	},
	data: () => ({
		errors: [],
		firstName: null,
		lastName: null,
		phoneNumber: null,
		termsOfUse: false,
		address: null,
		notification: false,
		fr,
	}),
	methods: {
		findError(field) {
			return this.errors.find((err) => err.field === field);
		},
		async submit(e) {
			this.errors = [];
			const requiredFields = ['firstName', 'lastName', 'phoneNumber', 'address', 'termsOfUse'];
			e.preventDefault();

			if (!this.termsOfUse) {
				this.errors.push({
					field: 'termsOfUse',
					message: 'Veuillez accepter les cgu.',
				});
			}

			requiredFields.forEach((field) => {
				if (!this[field]) {
					this.errors.push({
						field,
						message: 'Ce champ est requis.',
					});
				}
			});

			if (this.errors.length > 0) {
				console.log(this.errors);
				return;
			}

			const location = await this.userStore.getLocationFromAddress({ address: this.address });

			await this.userStore.signupAsDeliver({
				globalUserId: 0,
				firstName: this.firstName,
				lastName: this.lastName,
				phoneNumber: this.phoneNumber,
				location: location.data,
				notification: this.notification,
				termsOfUse: this.termsOfUse,
				patronageCode: this.user.username + '01',
			});

			await this.$router.push('/');
		},
	},
};
</script>

<template>
  <div class="flex items-center h-[12vh] bg-gray-100 px-10">
    <h1 class="text-4xl">Hello {{ user.username }}</h1>
  </div>
	<form @submit="submit">
		<div class="flex flex-col mx-auto my-12 p-2 rounded-lg w-[90%]">
			<div class="mb-2 text-center">
				<AppH2>S'inscrire en tant que livreur</AppH2>
			</div>
			<div class="mb-2 text-center text-gray-600">
				<p>Vous devez remplir des informations supplementaires afin de pouvoir effectuer des livraisons.</p>
			</div>
			<AppDivider />
			<div class="grid gap-3 my-4">
				<AppInput
					v-model:value="firstName"
					name="firstName"
					label="Prenom*"
					:helperText="findError('firstName')?.message"
					:error="!!findError('firstName')"
					required
				/>
				<AppInput
					v-model:value="lastName"
					name="lastName"
					label="Nom*"
					:helperText="findError('lastName')?.message"
					:error="!!findError('lastName')"
					required
				/>
				<AppInput
					v-model:value="phoneNumber"
					name="phoneNumber"
					label="Numero de telephone*"
					:helperText="findError('phoneNumber')?.message"
					:error="!!findError('phoneNumber')"
					required
				/>
				<AppInput
					v-model:value="address"
					name="address"
					label="Adresse*"
					:helperText="findError('address')?.message"
					:error="!!findError('address')"
					required
				/>
				<AppCheckBox v-model:checked="notification" label="Activer les notifications" />
				<AppCheckBox
					v-model:checked="termsOfUse"
					label="J'accepte les Conditions Générales d'Utilisation*"
					required
				/>
			</div>
			<div class="flex justify-center">
				<PinkButton>S'inscrire en temps que livreur</PinkButton>
			</div>
		</div>
	</form>
</template>

<style>
.v3dp__input_wrapper input {
	@apply rounded-full border px-5 w-full h-[44px] text-sm focus:border-primary-500 focus:border-2 transition focus:px-[19px];
}

label.date-picker {
	transform: scale(0.75);
}
</style>
