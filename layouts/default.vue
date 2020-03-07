<template>
    <v-app>
        <main-toolbar/>
        <main>
            <nuxt/>
        </main>
    </v-app>
</template>

<script>
    import MainToolbar from "../components/app/mainToolbar";
    export default {
        name: "default",
        components: {MainToolbar}
    }
</script>

<style scoped>

</style>