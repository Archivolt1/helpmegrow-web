<template>
    <v-container>
        <v-row class="pl-5 pr-2">
            <v-col xs="4">
                <v-card class="secondary" dark :align="'center'" style="height: 100%; width: 100%" to="/plants">
                    <h1 class="display-1 font-weight-light">Garden 1</h1>
                    <img src="../../../static/garden1.JPG" height="300" width="300"/>
                </v-card>
            </v-col>
            <v-col xs="4">
                <v-card class="secondary" dark :align="'center'" style="height: 100%; width: 100%" to="/plants">
                    <h1 class="display-1 font-weight-light">Garden 2</h1>
                    <img src="../../../static/garden2.jpg" height="300" width="300"/>
                </v-card>
            </v-col>
            <v-col xs="4">
                <v-card class="secondary" dark :align="'center'" style="height: 100%; width: 100%" to="/plants">
                    <h1 class="display-1 font-weight-light">Garden 3</h1>
                    <img src="../../../static/garden3.JPG" height="300" width="300"/>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "gardensGridView",
        data: () => ({
            userGardens: [
                {
                    name: "My Garden",
                    description: "Test description string.",
                    imageURL: "",
                }
            ]
        })
    }
</script>

<style scoped>

</style>