<template>
    <v-app-bar height="80px" outlined extension-height="64" color="primary" app asolute>
        <v-btn icon color="accent">
            <v-icon>mdi-web</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <div>
            <v-btn icon color="accent">
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

<style scoped>
.cabecalho {
    background-color: dimgray;
    height: 80px;
}

.caixa {
    position: relative;
    width: 1480px;
    margin: 0 auto;
}

.nome-user {
    position: absolute;
    top: 18px;
    right: 60px;

}
</style>