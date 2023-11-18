<template>
    <view class="card-space">
        <view class="title-space">
            <view class="title">
                {{ title }} <text class="subTitle">
                    {{ subTitle }}
                </text>
            </view>
            <view :style="highLightColor">
                {{ highLightText ? highLightText + "%" : null }}
            </view>
        </view>
        <slot />
    </view>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps<{
    title: string;
    subTitle?: string;
    highLightText?: number;
}>();

const highLightColor = computed(() => {
    if (!props.highLightText) {
        return null;
    }
    return {
        color: props.highLightText > 0 ? '#ee6666' : '#29c184'
    };
})

</script>
<style scoped lang='scss'>
.card-space {
    padding: 12px;
    background-color: #fff;
    border-radius: 8px;

    .title-space {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        font-size: 12px;
        font-weight: 600;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        .title {
            font-size: 14px;

            .subTitle {
                color: #aaa;
            }
        }

    }

}
</style>