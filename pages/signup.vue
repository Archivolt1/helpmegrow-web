<template>
    <v-container justify="center" class="" >
            <v-row>
                <v-col>
                    <v-card height="508px" class="accent pa-5" >
                        <font color="white"><br></br><br></br>
                        <h1 style="font-size:40px;">Welcome to Help Me Grow</h1>
                        <p style="font-size:15px;">The best place to keep track of your dying plants.</p>
                        <div class="text-center"><v-btn>Already have an account?</v-btn></div>
                        </font>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card height="497px">
                        <v-container height="600px" class="secondary">
                            <font color="white">
                            <row>
                                <h1 style="font-size:40px;">Sign Up</h1>
                            </row>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                            v-model="first"
                                            label="First Name"
                                            outlined
                                            color="white"
                                    ></v-text-field>

                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                            v-model="last"
                                            label="Last Name"
                                            outlined
                                            color="white"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                            label="Email address"
                                            value="example"
                                            suffix="@gmail.com"
                                            color="white"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                            v-model="password"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]"
                                            color="white"
                                            name="input-10-1"
                                            label="Enter Password"
                                            hint="At least 8 characters"
                                            counter
                                            @click:append="show1 = !show1"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                            v-model="confirmPassword"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]"
                                            color="white"
                                            name="input-10-1"
                                            label="Confirm Password"
                                            hint="At least 8 characters"
                                            counter
                                            @click:append="show1 = !show1"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox color="white" v-model="readonly" class="mx-2" label="I agree to the Terms and Conditions"></v-checkbox>
                                </v-col>
                            </v-row>
                            </font>
                            <row>
                                <v-btn>Sign up</v-btn>
                            </row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
    //javascript
    export default {
        name: "signup",
        data () {
            return {
                // labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
                // time: 0,
                // forecast: [
                //     { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
                //     { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
                //     { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
                // ],

                show1: false,
                show2: true,
                show3: false,
                show4: false,
                password: "",
                confirmPassword: "",
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => ('The email and password you entered don\'t match'),
                },
            }
        },
    }
</script>


<style scoped>

</style>