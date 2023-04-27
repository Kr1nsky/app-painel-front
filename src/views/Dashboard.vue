<template>
    <v-row>
        <v-col v-for="(item, index) in itens" :key="index" :cols="item.flex">
            <v-card>
                <v-card-title class="d-flex justify-center mb-2" color="accent" style="background-color: #9E0052;">
                    <v-icon color="accent">{{ item.icon }}</v-icon>
                    {{ item.name }}
                </v-card-title>
                <v-card-text class="d-flex justify-center">
                    <v-progress-circular :rotate="360" :size="100" :width="15" :value="item.value" color="primary">
                        {{ item.value + '%' }}
                    </v-progress-circular>
                </v-card-text>
                <v-spacer></v-spacer>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'dash-page',

    data: () => ({
        itens: [
            { name: 'Barra de progresso', value: 20, icon: 'mdi-view-dashboard', flex: 4 },
            { name: 'Reload', value: 40, icon: 'mdi-sync', flex: 4 },
            { name: 'Placa de video', value: 90, icon: 'mdi-expansion-card', flex: 4 },
            { name: 'Mensagem', value: 100, icon: 'mdi-message-processing', flex: 4 },
        ]
    })
}
</script>