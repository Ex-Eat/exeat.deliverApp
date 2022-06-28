<script>
import PinkButton from '@/components/ui/buttons/PinkButton.vue';
import AppInput from '@/components/ui/forms/AppInput.vue';
import AppDivider from '@/components/ui/AppDivider.vue';
import AppH2 from '@/components/ui/typo/AppH2.vue';
import { useUserStore } from '@/stores/user';
import AppCheckBox from '@/components/ui/forms/AppCheckBox.vue';
import { differenceInYears } from 'date-fns';
import { fr } from 'date-fns/locale';
import Datepicker from 'vue3-datepicker';

export default {
	name: 'SignupForm',
	components: { AppCheckBox, Datepicker, PinkButton, AppInput, AppDivider, AppH2 },
	setup() {
		const userStore = useUserStore();

		return {
			userStore,
		};
	},
	data: () => ({
		errors: [],
		email: null,
		username: null,
		password: null,
		confirmPassword: null,
		birthDate: new Date(),
		cguAccepted: false,
		fr,
	}),
	methods: {
		findError(field) {
			return this.errors.find((err) => err.field === field);
		},
		async submit(e) {
			this.errors = [];
			const requiredFields = ['email', 'username', 'password', 'confirmPassword', 'birthDate', 'cguAccepted'];
			e.preventDefault();
			if (this.confirmPassword !== this.password) {
				this.errors.push({
					field: 'confirmPassword',
					message: 'Votre mot de passe de confirmation ne correspond pas à votre mot de passe.',
				});
			}

			if (!this.cguAccepted) {
				this.errors.push({
					field: 'cguAccepted',
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

			if (differenceInYears(new Date(), this.birthDate) < 18) {
				this.errors.push({
					field: 'birthDate',
					message: 'Vous devez avoir plus de 18 ans pour vous inscrire.',
				});
			}

			if (this.errors.length > 0) {
				console.log(this.errors)
				return;
			}

			await this.userStore.signup({
				email: this.email,
				username: this.username,
				password: this.password,
				confirmPassword: this.confirmPassword,
				birthDate: this.birthDate,
				cguAccepted: this.cguAccepted,
			});
			await this.$router.push('/');
		},
	},
};
</script>

<template>
	<form @submit="submit">
		<div class="flex flex-col mx-auto my-12 p-2 shadow-md rounded-lg w-[480px]">
			<div class="mb-2 text-center">
				<AppH2>S'inscrire</AppH2>
			</div>
			<AppDivider />
			<div class="grid gap-3 my-4">
				<AppInput
					v-model:value="email"
					name="email"
					label="E-mail"
					type="email"
					:error="!!findError('email')"
					:helperText="findError('email')?.message"
					required
				/>
				<AppInput
					v-model:value="username"
					name="username"
					label="Nom d'utilisateur"
					:helperText="findError('username')?.message"
					:error="!!findError('username')"
					required
				/>
				<AppInput
					v-model:value="password"
					name="password"
					label="Password"
					type="password"
					:helperText="findError('password')?.message"
					:error="!!findError('password')"
					required
				/>
				<AppInput
					v-model:value="confirmPassword"
					name="confirm_password"
					label="Confirmer le mot de passe"
					type="password"
					:error="!!findError('confirmPassword')"
					:helperText="findError('confirmPassword')?.message"
					required
				/>
				<div class="relative my-2">
					<Datepicker v-model="birthDate" inputFormat="dd/MM/yyyy" :locale="fr" />
					<label
						class="date-picker absolute left-[3px] top-[-10px] cursor-text px-1 bg-white text-sm text-primary-700"
					>
						Date de Naissance
					</label>
					<p
						v-if="!!findError('birthDate')"
						class="text-xs text-gray-500 ml-5 my-1"
						:class="{ 'text-red-500': !!findError('birthDate') }"
					>
						{{ findError('birthDate').message }}
					</p>
				</div>
				<AppCheckBox
					v-model:checked="cguAccepted"
					label="J'accepte les Conditions Générales d'Utilisation"
					required
				/>
			</div>
			<div class="flex justify-center">
				<PinkButton>S'inscrire</PinkButton>
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
