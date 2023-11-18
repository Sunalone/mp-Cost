// src/types/components.d.ts
import MySwiper from './mySwiper.vue';
import Card from './Card.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        mySwiper: typeof MySwiper;
        Card: typeof Card;
    }
}
