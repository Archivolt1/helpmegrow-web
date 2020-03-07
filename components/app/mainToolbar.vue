<template>
    <v-toolbar flat style="border-bottom: 1px #EEEEEE solid;">
        <v-toolbar-title>
            <nuxt-link to="/">
                <img src="/logo.jpg" style="max-height: 40px;"/>
            </nuxt-link>
        </v-toolbar-title>
        <v-spacer/>
        <v-btn to="/" text>
            Home
        </v-btn>
        <v-btn to="/signup" text>
            Sign Up
        </v-btn>
        <v-btn to="/signin" text color="green">
            Sign In
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "mainToolbar"
    }
</script>

<style scoped>

</style>