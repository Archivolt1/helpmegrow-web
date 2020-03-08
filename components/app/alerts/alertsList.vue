<template>
    <v-container class="pr-0">
        <v-row>
            <v-col>
                <h1 class="ml-4 pb-5">Alerts</h1>
                <v-divider/>
            </v-col>
        </v-row>
        <v-row class="ml-3 mr-3">
            <v-col md="4" xs="12">
                <v-card>
                    <v-card-text>
                        <div>Watering Alert</div>
                        <p class="display-1 text--primary">
                            Tomato Plants
                        </p>
                        <div>
                            Home Garden
                        </div>
                        <div class="text--primary">
                            Needs to be watered for <b>5 gallons</b> on 3/7/2020
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary accent-4" text>
                            Dismiss Alert
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4" xs="12">
                <v-card>
                    <v-card-text>
                        <div>Heatwave Alert</div>
                        <p class="display-1 text--primary">
                            Tomato Plants
                        </p>
                        <div>
                            Home Garden
                        </div>
                        <div class="text--primary">
                            Will exceed outdoor heat tolerance on 3/7/2020 at 12:00 PM.
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary accent-4" text>
                            Dismiss Alert
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4" xs="12">
                <v-card>
                    <v-card-text>
                        <div>Watering Alert</div>
                        <p class="display-1 text--primary">
                            Thai Basil
                        </p>
                        <div>
                            Greenhouse A
                        </div>
                        <div class="text--primary">
                            Needs to be watered for <b>5 gallons</b> on 3/7/2020
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary accent-4" text>
                            Dismiss Alert
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "alertsList"
    }
</script>

<style scoped>

</style>