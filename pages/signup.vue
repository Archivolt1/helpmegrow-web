<template>
    <v-container justify="center">
        <v-row>
            <v-col>
                <v-card class="accent pa-5 white--text" min-height="100%">
                    <h1 class="display-1 font-weight-light">Welcome to Help Me Grow</h1>
                    <p class="font-weight-light">The best place to keep track of your plants</p>
                    <div>
                        <v-btn depressed>Already have an account?</v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="pa-5 accent darken-1 white--text" min-height="100%">
                    <h1 class="display-1 font-weight-light">Sign Up</h1>
                    <p class="font-weight-light">Create a new account for free</p>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field dark label="First Name" outlined v-model="first"/>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field dark label="Last Name" outlined v-model="last"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field dark label="Email address" outlined/>
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
                                    hint="At least 8 characters"
                                    label="Enter Password"
                                    name="input-10-1"
                                    outlined
                                    v-model="password"
                            />
                        </v-col>
                        <v-col>
                            <v-text-field
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    @click:append="show1 = !show1"
                                    dark
                                    hint="At least 8 characters"
                                    label="Confirm Password"
                                    name="input-10-1"
                                    outlined
                                    v-model="confirmPassword"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-btn class="ml-3" depressed>Sign up</v-btn>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    //javascript
    export default {
        name: "signup",
        data() {
            return {
                // labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
                // time: 0,
                // forecast: [
                //     { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
                //     { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
                //     { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
                // ],
                first: "",
                last: "",
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