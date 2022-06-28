<script>
import Datepicker from 'vue3-datepicker';
import { fr } from 'date-fns/locale';

export default {
	name: 'AppDatePicker',
	components: { Datepicker },
	props: {
		date: {
			type: Date,
			required: true,
		},
		label: {
			type: String,
		},
	},
	data: () => ({
		fr,
	}),
	methods: {
		handleChange: (e) => {
			console.log(e);
		},
	},
};
</script>

<template>
	<div class="relative my-2">
		<Datepicker v-model="date" inputFormat="dd/MM/yyyy" :locale="fr" @change="handleChange" />
		<label class="date-picker absolute left-[3px] top-[-10px] cursor-text px-1 bg-white text-sm text-primary-700">{{
			label
		}}</label>
	</div>
</template>

<style>
.v3dp__input_wrapper input {
	@apply rounded-full border px-5 w-full h-[44px] text-sm focus:border-primary-500 focus:border-2 transition focus:px-[19px];
}

label.date-picker {
	transform: scale(0.75);
}
</style>
