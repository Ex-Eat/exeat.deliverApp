<template>
    <button
        class="h-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full hover:brightness-90 transition">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary-700 rounded-full">
            <slot />
        </span>
    </button>
</template>