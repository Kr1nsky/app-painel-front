<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
    </div>
</template>
  
<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
    mounted() {
        this.mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 'horizontal' para slides horizontais, 'vertical' para slides verticais
            loop: true, // Repetir os slides em loop
            speed: 500, // Velocidade de transição em milissegundos

            // Configuração da paginação
            pagination: {
                el: '.swiper-pagination', // Elemento HTML para exibir a paginação
                clickable: true, // Permitir cliques na paginação para navegar para slides específicos
            },

            // Configuração de navegação
            navigation: {
                nextEl: '.swiper-button-next', // Elemento HTML para o botão "próximo"
                prevEl: '.swiper-button-prev', // Elemento HTML para o botão "anterior"
            },

            // Outras configurações
            autoplay: {
                delay: 3000, // Tempo de espera entre cada slide em milissegundos
                disableOnInteraction: false, // Continuar a reprodução automática após interação do usuário
            },
            effect: 'slide', // Efeito de transição dos slides. Opções: 'slide', 'fade', 'cube', 'coverflow', 'flip'
            // ... Outras opções de configuração conforme necessário
        });
    },
    beforeDestroy() {
        if (this.mySwiper) {
            this.mySwiper.destroy();
            this.mySwiper = null;
        }
    },
};
</script>