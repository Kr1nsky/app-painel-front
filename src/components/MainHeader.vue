<template>
    <v-app-bar height="80px" outlined extension-height="64" color="primary" app asolute>
        <v-btn icon color="white" link to="/">
            <v-icon>mdi-web</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <div>
            <v-btn icon color="white" link to="/perfil">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </div>
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