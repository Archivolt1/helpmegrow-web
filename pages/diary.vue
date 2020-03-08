<template>
    <div align="center">
        <v-container>
            <v-row>
                <v-col>
                    <v-card class="secondary" dark :align="'center'" width="60%" height="100%">
                        <h1 class="display-1 font-weight-light">New Entry</h1>
                        <v-text-field
                                v-model="name"
                                label="Outlined"
                                outlined
                                clearable
                        ></v-text-field>
                        <br></br>
                        <v-text-field
                                v-model="description"
                                label="Outlined"
                                outlined
                                clearable
                        ></v-text-field>

                        <!-- Name of diary, Description, Image upload-->
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="secondary" dark :align="'center'" width="100%" height="500">
                        <h1 class="display-1 font-weight-light">Current entries</h1>
                       <!-- Input the current entries for diary-->
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "diary",
        layout: "appDefault",
        data: () => ({
            expand: false,
            items: [
                {
                    name: 'not a tree',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    sodium: 87,
                    calcium: '14%',
                    iron: '1%',
                },
            ],
        }),
    }
</script>

<style scoped>

</style>