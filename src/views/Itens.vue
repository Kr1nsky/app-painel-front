<template>
    <v-main>
        <v-card-title>Itens</v-card-title>
        <v-card-text>
            <v-row>
                <v-col v-for="item in itens" :key="item" :cols="item.flex">
                    <v-card color="#D3D3D3">
                        <v-card-text class="d-flex justify-center">
                            <v-img max-height="150" max-width="300" :src="item.image">
                            </v-img>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-card-title class="d-flex justify-center">
                            {{ item.name }}
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-main>
</template>

<script>
export default {
    name: 'itens-page',

    data: () => ({
        itens: [
            { name: 'Resident Evil 4', image: 'https://files.tecnoblog.net/wp-content/uploads/2022/06/resident-evil-4-remake-700x394.jpg', flex: 4 },
            { name: 'Hitman 3', image: 'https://files.tecnoblog.net/wp-content/uploads/2021/12/hitman-3-1060x596.jpg', flex: 4 }
        ]
    })

}
</script>