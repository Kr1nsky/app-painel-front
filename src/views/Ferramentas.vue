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
        await this.listUsers();
    },

    methods: {
        async listUsers() {
            let { data } = await this.$api.users.list();
            console.log(data);
        }
    },


}
</script>