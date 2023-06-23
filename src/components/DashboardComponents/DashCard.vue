<template>
    <v-card class="elevation-11">
        <v-card-title class="white--text d-flex justify-center mb-2" color="primary" style="background-color: #9900E0;">
            <v-icon color="white">{{ item.icon }}</v-icon>
            {{ item.name }}
        </v-card-title>
        <v-card-text class="d-flex justify-center">
            <v-progress-circular :rotate="360" :size="100" :width="15" :value="item.value" color="primary">
                {{ item.value + '%' }}
            </v-progress-circular>
        </v-card-text>
        <v-spacer></v-spacer>
    </v-card>
</template>

<script>
export default {
    name: 'card-dash',

    props: {
        cardInfo: Object,
    },

    data: () => ({
        item: '',
    }),

    beforeMount() {
        this.logCardInfo();
    },

    methods: {
        logCardInfo() {
            this.item = this.cardInfo;
            console.log(this.cardInfo);
        }
    },
}
</script>