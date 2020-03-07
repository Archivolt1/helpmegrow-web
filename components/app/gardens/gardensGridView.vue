<template>
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-col v-for="(garden, index) in userGardens">

                    </v-col>
                </v-row>
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