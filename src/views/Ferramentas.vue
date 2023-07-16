<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'ferramentas-page',

    data: () => ({
        //
    }),

    async created() {
        //await this.listUsers();
        await this.weaponsList();
    },

    methods: {
        async listUsers() {
            let { data } = await this.$api.users.list();
            console.log(data);
        },

        async weaponsList() {
            let { data } = await this.$apiValorant.weapons.list();
            console.log(data);
        }
    },


}
</script>