<template>
    <v-container>
        <v-row :align="'center'" :justify="'center'">
            <v-col md="6">
                <img alt="Help Me Grow Logo" src="/logo.jpg" style="max-height: 200px"/>
                <h1 class="display-3 font-weight-bold" style="line-height: 1.2em">Keep track of your garden</h1>
                <p class="mt-2">Get the app that helps you keep your plants alive</p>
                <v-btn class="mt-5" color="primary" depressed large to="/signup">Sign Up Now</v-btn>
            </v-col>
            <v-col md="6">
                <img alt="Beautiful Garden" src="/homepage-splash-1.jpg" style="min-width: 100%; height: 350px;">
            </v-col>
        </v-row>
        <v-row :align="'center'" :justify="'center'" class="mb-1 mt-5 pt-5">
            <v-col md="6">
                <img alt="Plant Starters" src="/homepage-splash-2.jpg" style="min-width: 100%; height: 350px;">
            </v-col>
            <v-col md="6">
                <h2 class="display-1 font-weight-bold">Focus on gardening, not planning</h2>
                <p class="mt-2">Don't get caught up worrying about the weather conditions or picking what to grow. Help
                    Me Grow can give your alerts and recommendations based on your garden information.</p>
            </v-col>
        </v-row>
        <v-row :align="'center'" :justify="'center'">
            <v-col md="6">
                <h2 class="display-1 font-weight-bold">Record your progress</h2>
                <p class="mt-2">Create a diary for your garden and observe your gardening progression.</p>
            </v-col>
            <v-col md="6">
                <img alt="Bearing Fruit" src="/homepage-splash-3.jpg" style="min-width: 100%; height: 350px;">
            </v-col>
        </v-row>
        <v-row :align="'center'" :justify="'center'" class="text-center mt-5">
            <v-col xs="12">
                <v-card color="accent pa-5 white--text" flat>
                    <h2 class="display-2 font-weight-bold">Get started now!</h2>
                    <v-btn depressed color="white" large class="mt-5" to="/signup">Sign Up</v-btn>
                </v-card>
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