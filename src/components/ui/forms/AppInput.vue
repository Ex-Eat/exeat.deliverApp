<script>
export default {
	name: 'AppInput',
	props: {
		value: {
			type: [String, Number],
			default: '',
		},
		label: String,
		name: String,
		error: {
			type: Boolean,
			default: false,
		},
		helperText: {
			type: String,
			default: null,
		},
		type: {
			type: String,
			default: 'text',
		},
		required: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<template>
	<div class="relative my-2">
		<input
			v-model="value"
			:name="name"
			:type="type"
			:id="'form-input-' + name"
			@keyup="this.$emit('update:value', $event.target.value)"
			class="rounded-full border px-5 w-full h-[44px] text-sm focus:border-primary-500 focus:border-2 transition focus:px-[19px]"
			:class="{ 'border-red-500': error }"
		/>
		<label
			:for="'form-input-' + name"
			:class="{ active: value && value !== '' }"
			class="absolute left-[17px] top-[12px] cursor-text px-1 bg-white text-sm text-gray-500"
			>{{ label }}</label
		>
		<p v-if="helperText" class="text-xs text-gray-500 ml-5 my-1" :class="{ 'text-red-500': error }">{{ helperText }}</p>
	</div>
</template>

<style scoped>
label {
	transition: top 0.2s, left 0.2s, transform 0.2s;
}

input:focus + label,
label.active {
	top: -10px;
	left: 12px;
	transform: scale(0.75);
	@apply text-primary-700;
}
</style>
