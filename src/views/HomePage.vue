<template>
    <section>
        <div class="d-flex justify-center">
            <h1 class="primary--text">Bem vindo!</h1>
        </div>
        <div class="d-flex justify-center">
            <p class="primary--text">Aqui esta um painel versatil para voce realizar todas as coisas que forem
                desenvolvidas<br>
                Ao lado esquerdo pode navegar no menu para escolher a pagina que deseja utilizar e as funcoes que deseja
                testar <br>
                Neste momento voce esta na aba {{ this.$route.name }}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'home-page',

    data: () => ({
        //
    }),

    beforeMount() {
        //this.mostrarRouter();
    },

    methods: {
        // mostrarRouter() {
        //     console.log(this.$route);
        // }
    }
}
</script>