<template>
    <div>
        <v-navigation-drawer absolute permanent color="primary" width="15%" height="100%">
            <v-list color="primary">
                <v-list-item>
                    <v-list-item-content color="primary">
                        <v-list-item-title class="primary text-h6 text-md-center">
                            Menu
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list dense nav color="primary">
                <v-list-item v-for="item in items" :key="item.title" link :to="item.router">
                    <v-list-item-icon>
                        <v-icon color="accent">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title color="accent">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
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
        }
    },
}
</script>

<style>
.primaryColor {
    color: white;
}
</style>