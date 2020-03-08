<template>
    <alerts-list/>
</template>

<script>
    import AlertsList from "../components/app/alerts/alertsList";
    export default {
        name: "alerts",
        components: {AlertsList},
        head() {
            return {
                title: "Alerts"
            };
        },
        layout: "appDefault",
    }
</script>

<style scoped>

</style>