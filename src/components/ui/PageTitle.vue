<script>
export default {
    name: "PageTitle"
}
</script>

<template>
    <div class="flex items-center h-[12vh] bg-gray-100 px-10">
        <h1 class="text-4xl">
            <slot />
        </h1>
    </div>
</template>

<style scoped>

</style>