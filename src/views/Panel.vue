<template>
    <v-app id="inspire">
        <MainHeader />
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="3">
                        <SideBar />
                    </v-col>
                    <v-col cols="9">
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