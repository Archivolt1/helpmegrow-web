<template>
    <v-container justify="center" class="primary" >
            <v-row>
                <v-col>
                    <v-card height="600px" class="secondary">
                        <h1>Information</h1>
                        <p>Information</p>
                        <p>Information</p>
                        <v-btn align="center">Already have an account?</v-btn>
                    </v-card>
                </v-col>
                <v-col>
                    <v-container class="accent" height="600px">
                        <row>
                            <h1>Sign Up</h1>
                        </row>
                        <row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                        v-model="first"
                                        label="First Name"
                                        outlined
                                ></v-text-field>
                            </v-col>
                            <v-col sm="6">
                                <v-text-field
                                        v-model="last"
                                        label="Last Name"
                                        outlined
                                ></v-text-field>
                            </v-col>
                        </row>
                        <row>
                            <v-col>
                                <v-text-field
                                        label="Email address"
                                        value="example"
                                        suffix="@gmail.com"
                                ></v-text-field>
                            </v-col>
                        </row>
                        <row>
                            <v-col>
                                <v-text-field
                                        v-model="password"
                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.min]"

                                        name="input-10-1"
                                        label="Normal with hint text"
                                        hint="At least 8 characters"
                                        counter
                                        @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                        v-model="confirm"
                                        label="Confirm Password"
                                        outlined
                                ></v-text-field>
                            </v-col>
                        </row>
                        <row>
                            <v-col>
                                <v-checkbox v-model="readonly" class="mx-2" label="I agree to the Terms and Conditions"></v-checkbox>
                            </v-col>
                        </row>
                        <row>
                            <v-btn>Sign up</v-btn>
                        </row>
                    </v-container>
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
                password: 'Password',
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