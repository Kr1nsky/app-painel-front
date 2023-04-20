<template>
    <v-app id="inspire" class="caixa">
        <MainHeader class="mainHeader" />
        <v-main>
            <v-container>
                <v-row>
                    <SideBar class="sideBar" />
                    <v-col class="conteudo">
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import MainHeader from '../components/MainHeader.vue';
export default {
    name: 'panel-page',

    components: {
        SideBar,
        MainHeader
    },

    data: () => ({
        //
    }),
}
</script>

<style scoped>
.sideBar {
    margin-top: 0%; 
    padding-top: 10px;
    padding-left: 0%;
    margin-left: -3%;
    display: flex;
    justify-content: start;
    width: 17%;
    height: 400px;
}

.conteudo{
    display: flex;
    padding-left: 0%;
    margin-top: 0%;
    margin-left: 1%;
    width: 80%;
}

.caixa {
    position: relative;
    width: 1480px;
    margin: 0 auto;
}
</style>