<template>
    <v-container>
        <h1>
            <v-row>
                <v-col>
                    <v-card>

                    </v-card>
                </v-col>
                <v-col>
                    <v-container>
                        <row></row>
                        <row></row>
                        <row></row>
                        <row></row>
                        <row></row>
                        <row></row>
                    </v-container>
                </v-col>
            </v-row>
        </h1>
    </v-container>
</template>

<script>
    //javascript
    export default {
        name: "signup",
        data () {
            return {
                labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
                time: 0,
                forecast: [
                    { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
                    { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
                    { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
                ],
            }
        },
    }
</script>


<style scoped>

</style>