<template>
    <v-row>
        <v-col v-for="(item, index) in itens" :key="index" :cols="item.flex">
            <dash-card :cardInfo="item" />
        </v-col>
    </v-row>
</template>

<script>
import DashCard from '@/components/DashboardComponents/DashCard.vue';

export default {
    name: 'dash-page',

    components: {
        DashCard
    },

    data: () => ({
        itens: [
            { name: 'Barra de progresso', value: 20, icon: 'mdi-view-dashboard', flex: 4 },
            { name: 'Reload', value: 40, icon: 'mdi-sync', flex: 4 },
            { name: 'Placa de video', value: 90, icon: 'mdi-expansion-card', flex: 4 },
            { name: 'Mensagem', value: 100, icon: 'mdi-message-processing', flex: 4 },
            { name: 'Variacoes de Acao', value: 12, icon: 'mdi-view-dashboard', flex: 4 },
            { name: 'Price variation', value: 2, icon: 'mdi-sync', flex: 4 },
            { name: 'Motherboard', value: 98, icon: 'mdi-expansion-card', flex: 4 },
            { name: 'Lenguages', value: 55, icon: 'mdi-message-processing', flex: 4 },
        ]
    })
}
</script>