// src/types/components.d.ts
import MySwiper from './mySwiper.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        mySwiper: typeof MySwiper
    }
}
