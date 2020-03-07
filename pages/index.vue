<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 class="display-2 font-weight-bold">Keep track of your garden</h1>
                <p class="mt-2">Get the app that helps you keep your plants alive</p>
                <v-btn large color="primary" depressed to="/signup" class="mt-5">Sign Up Now</v-btn>
            </v-col>
            <v-col>
                <img src="/homepage-splash-1.jpg" alt="Beautiful Garden" style="min-width: 100%; height: 256px;">
            </v-col>
        </v-row>
        <v-row class="mb-1" justify="center">
            <v-col>

            </v-col>
            <v-col>
                <h2 class="headline font-weight-bold">Focus on what you need to do</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    //logic
    export default {
        name: "index",
        head() {
            return {
                title: "Home"
            };
        }
    }
</script>

<style scoped>

</style>