<template>
    <v-app-bar height="80px" class="elevation-7" outlined extension-height="64" color="primary" app asolute>
        <v-row style="display: flex; align-items: center; justify-content: space-between; padding: 0 2rem;">
            <div style="display: flex; align-items: baseline;">
                <v-btn icon color="white" link to="/">
                    <v-icon>mdi-web</v-icon>
                </v-btn>
                <p class="text-h5 white--text">Painel</p>
            </div>
            <div>
                <v-btn icon color="white" link to="/perfil">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </div>
        </v-row>

    </v-app-bar>
</template>

<script>
export default {
    name: 'MainHeader',

    data: () => ({
        //
    }),
    async created() {
        //
    },
    computed: {
        //
    },
    methods: {
        //
    }
}
</script>