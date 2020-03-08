<template>
    <div align="center">
        <v-container>
            <v-row>
                <v-col>
                    <v-card class="secondary" dark :align="'center'" width="60%" height="100%">
                        <h1 class="display-1 font-weight-light">New Entry</h1>
                        <v-container fluid>

                            <v-row>
                                <v-col cols="4">
                                    <v-subheader>Entry Title</v-subheader>
                                </v-col>
                                <v-col cols="8">
                                    <v-text-field
                                            outlined
                                            clearable
                                            label="Title here"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="4">
                                    <v-subheader>Enter Description</v-subheader>
                                </v-col>
                                <v-col cols="8">
                                    <v-textarea
                                            outlined
                                            clearable
                                            label="Description"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                            </v-container>
                        <v-file-input
                                :rules="rules"
                                accept="image/png, image/jpeg"
                                placeholder="Upload a plant"
                                prepend-icon="mdi-camera"
                                label="Plant"
                        ></v-file-input>
                        <v-btn color="white" light>Submit entry</v-btn>
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
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
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