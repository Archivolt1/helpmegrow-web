<template>
    <v-app>
        <main>
            <main-toolbar/>
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