<template>
    <div>
        <v-card-title>Itens</v-card-title>
        <v-card-text>
            <v-row>
                <v-col v-for="item in itens" :key="item" :cols="item.flex">
                    <v-card color="primary" rounded="md" class="elevation-10">
                        <v-card-text class="d-flex justify-center">
                            <v-img class="my-2 py-2" style="border-radius: 1.5rem;" :src="item.image">
                            </v-img>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-card-title class="white--text d-flex justify-center" v-text="item.name">
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </div>
</template>

<script>
export default {
    name: 'itens-page',

    data: () => ({
        itens: [
            { name: 'Resident Evil 4', image: 'https://files.tecnoblog.net/wp-content/uploads/2022/06/resident-evil-4-remake-700x394.jpg', flex: 4 },
            { name: 'Hitman 3', image: 'https://files.tecnoblog.net/wp-content/uploads/2021/12/hitman-3-1060x596.jpg', flex: 4 },
        ]
    })

}
</script>