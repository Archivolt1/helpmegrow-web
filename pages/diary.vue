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
                <v-col
                        v-for="item in items"
                        :key="item.name"
                        cols="12"
                        sm="6"
                        md="4"
                        lg="3">
                    <v-card class="secondary" dark :align="'center'" width="100%" height="500">
                        <h1 class="display-1 font-weight-light">Current entries</h1>
                        <v-container>
                            <v-data-iterator
                                    :items="items"
                                    :items-per-page.sync="itemsPerPage"
                                    hide-default-footer
                                    light
                                    >
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant1 }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant2 }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant3 }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant4 }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant5 }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant6 }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant7 }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>{{ item.name }}:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ item.plant8 }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-data-iterator>
                        </v-container>
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
                    name: 'a plant',
                    plant1: "tomato",
                    plant2: "potato",
                    plant3: "gnome",
                    plant4: "gelfond",
                    plant5: "beans",
                    plant6: "watermelon",
                    plant7: "cartography",
                    plant8: "Union Pacific",
                },
            ],
        }),
    }
</script>

<style scoped>

</style>