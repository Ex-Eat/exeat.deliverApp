<script lang="ts">
import NavBar from '@/components/ui/NavBar.vue';

export default {
    components: {NavBar},
};
</script>

<template>
    <NavBar />

    <main>
        <RouterView />
    </main>
</template>

<style>
</style>
