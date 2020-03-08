<template>
    <div>
    <v-container>
    <v-row>
    <v-col>
    <v-card :align="'center'" flat width="400px">
        <br></br>
        <h1 class="display-1 font-weight-light">Welcome back!</h1>
        <br></br>
        <v-container justify="" class="secondary">
            <h1 class="display-1 font-weight-light white--text" >Sign in</h1>
            <br></br>
            <v-row>
                <v-col>
                    <v-text-field
                            label="Email address"
                            value=""
                            dark
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            dark
                            name="input-10-1"
                            label="Enter Password"
                            @click:append="show1 = !show1"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="6">
                    <br></br>
                    <v-btn>Sign in</v-btn>
                </v-col>
                <v-col>
                    <br></br>
                    <v-checkbox color="white" v-model="rem" class="mx-2" dark label="Stay signed in"></v-checkbox>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    </v-col>
        <v-col>
            <br></br>
            <br></br>
            <br></br>
        <img src="garden.jpg" alt="garden" width="100%" height="75%">
        </v-col>
    </v-row>
    </v-container>
    </div>
</template>

<script>
    export default {
        name: "signin",
        data () {
            return {
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