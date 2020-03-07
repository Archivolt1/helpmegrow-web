<template>
    <gardens-grid-view/>
</template>

<script>
    import GardensGridView from "../components/app/gardens/gardensGridView";
    export default {
        name: "gardens",
        components: {GardensGridView},
        head() {
            return {
                title: "Gardens"
            };
        },
        layout: "appDefault",
        data: () => ({
        })
    }
</script>

<style scoped>

</style>