<template>

</template>

<script>
    //import Cookies from "js-cookie";

    export default {
        name: "logout",
        head() {
            return {
                title: "Log Out"
            };
        },
        /*fetch() {
            Cookies.remove("helpmegrow-vuex"); // Remove cookie storing state information.
            //window.localStorage.removeItem("helpmegrow-vuex"); // Remove token in local storage.
        },*/
        mounted: function() {
            window.location.href = "/signin";
        }
    };
</script>

<style scoped>

</style>