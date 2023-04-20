<template>
    <v-app-bar height="80px" outlined extension-height="64" color="#2A1673" app asolute>
        <!-- <v-app-bar-title> -->
        <img src="@/assets/logo.png" class="logo">
        <!-- </v-app-bar-title> -->
        <v-spacer></v-spacer>
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

.logo {
    width: 90px;
    padding: 15px;
    margin-top: -50px;
    margin-left: 130px;
    padding-top: 4%;
    justify-content: center;
    display: flex;
}


.nome-user {
    position: absolute;
    top: 18px;
    right: 60px;

}
</style>