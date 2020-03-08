<template>
    <v-row :align="'center'" :justify="'center'" class="mt-5 pt-5">
        <v-col md="6">
            <v-card class="ma-5 pa-5" color="accent" flat>
                <h1 class="display-1 font-weight-light white--text">Sign in</h1>
                <v-row>
                    <v-col>
                        <v-text-field dark label="Email address" outlined value=""/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"
                                dark
                                label="Enter Password"
                                name="input-10-1"
                                outlined
                                v-model="password"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="6">
                        <v-btn depressed>Sign in</v-btn>
                    </v-col>
                    <v-col xs="6">
                        <v-checkbox class="mt-0" dark label="Stay signed in" v-model="rem"/>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col class="pr-0" md="6">
            <img alt="garden" src="/garden.jpg" style="height: auto; min-width: 100%;">
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "signin",
        head() {
            return {
                title: "Sign In"
            };
        },
        data() {
            return {
                rem: false,
                show1: false,
                show2: true,
                show3: false,
                show4: false,
                password: "",
                confirmPassword: "",
                rules: {
                    required: value => !!value || 'Entry required',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => ('The email and password you entered don\'t match'),
                },
            }
        },
    }
</script>

<style scoped>

</style>