<template>
    <button class="h-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-primary-700 rounded-full hover:brightness-95 transition">
        <span class="flex space-x-2 flex-row items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 rounded-full">
            <slot />
        </span>
    </button>
</template>