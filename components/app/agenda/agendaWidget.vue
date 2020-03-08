<template>
    <div class="pa-3 pt-0">
        <v-row class="font-weight-bold display-2 mb-5">
            <v-col>
                Agenda
            </v-col>
        </v-row>
        <v-card class="accent pa-5 white--text">
            <p>hurry up and water your plants before they die</p>
            <v-card v-for="(agendaEntry, index) in agendaData" :key="index">
                {{agendaEntry}}
            </v-card>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "agendaWidget",
        data: () => ({
            agendaData: [
                {
                    garden: "Main Garden",
                    action: "Water your plant.",
                    time: "03-07-2020 6:00:00.000",
                    plant: "Tomato Plants"
                },
                {
                    garden: "Main Garden",
                    action: "Water your plant.",
                    time: "03-07-2020 6:00:00.000",
                    plant: "Potato Plants"
                }
            ]
        })
    }
</script>

<style scoped>

</style>