<template>
    <v-container>
        <agenda-widget/>
    </v-container>
</template>



<script>
    import AgendaWidget from "../components/app/agenda/agendaWidget";
    export default {
        name: "agenda",
        components: {AgendaWidget},
        layout: "appDefault",
    }
</script>

<style scoped>

</style>