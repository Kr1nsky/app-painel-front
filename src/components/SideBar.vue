<template>
    <v-card class="side-bar">
        <v-navigation-drawer permanent color="#2A1673">
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="primaryColor text-h6">
                            Menu
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.router">
                    <v-list-item-icon>
                        <v-icon color="white">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="primaryColor">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'Inicio', icon: 'mdi-home', router: '/' },
                { title: 'Dashboard', icon: 'mdi-view-dashboard', router: '/dashboard' },
                { title: 'Itens', icon: 'mdi-star-plus', router: '/itens' },
                { title: 'Ferramentas', icon: 'mdi-toolbox', router: '/ferramentas' },
                { title: 'Sair', icon: 'mdi-exit-to-app', router: '/logout' },
            ],
            right: null,
        }
    },
}
</script>

<style>
.primaryColor {
    color: white;
}
</style>