<template>
    <view class="card-space">
        <view class="title-space">
            <view class="title" :style="(typeof title === 'number' ? { fontSize: '24px' } : {})">
                {{ title }} <text class="subTitle">
                    {{ subTitle }}
                </text>
            </view>
            <view class="high-light-text" :style="highLightColor">
                {{ highLightText ? highLightText > 0 ? "+" + highLightText + "%" : "-" + highLightText + "%" : null }}
            </view>
        </view>
        <slot />
    </view>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps<{
    title: string | number;
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
    margin-bottom: 12px;
    min-height: 165px;

    .title-space {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        font-weight: 600;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        .title {
            .subTitle {
                font-size: 12px;
                color: #aaa;
            }
        }

        .high-light-text {
            display: flex;
            align-items: center;
            font-size: 14px;
            letter-spacing: 1px
        }

    }

}
</style>