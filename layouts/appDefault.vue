<template>
    <v-app>
        <main>
            <v-navigation-drawer :mini-variant-width="70" absolute dark expand-on-hover permanent>
                <v-list nav>
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"/>
                        </v-list-item-avatar>
                    </v-list-item>
                    <v-list-item link to="/profile">
                        <v-list-item-content>
                            <v-list-item-title class="title">Test User</v-list-item-title>
                            <v-list-item-subtitle>testemail@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider/>
                <v-list dense nav>
                    <v-list-item :key="'gardens'" link to="/gardens">
                        <v-list-item-icon>
                            <v-icon color="primary">eco</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Gardens</v-list-item-title>
                    </v-list-item>
                    <v-list-item :key="'diary'" link to="/diary">
                        <v-list-item-icon>
                            <v-icon color="primary">art_track</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Diary</v-list-item-title>
                    </v-list-item>
                    <v-list-item :key="'agenda'" link to="/agenda">
                        <v-list-item-icon>
                            <v-icon color="primary">view_agenda</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Agenda</v-list-item-title>
                    </v-list-item>
                    <v-list-item :key="'logout'" link to="/logout">
                        <v-list-item-icon>
                            <v-icon color="primary">exit_to_app</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Log Out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <nuxt/>
        </main>
    </v-app>
</template>

<script>
    export default {
        name: "appDefault"
    }
</script>

<style scoped>

</style>