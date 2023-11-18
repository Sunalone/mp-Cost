<template>
    <view class="progress--line">
        <view class="progress-bar">
            <view class="progress-bar__outer" :style="progressHeight">
                <view class="progress-bar__inner" :style="barStyle" />
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    strokeHeight?: number;
    percentage: number;
    color: string;
}>();

const progressHeight = computed(() => {
    return {
        height: props.strokeHeight ? props.strokeHeight : 4 + 'px'
    };
});

const barStyle = computed(() => {
    return {
        width: props.percentage + "%",
        backgroundColor: props.color
    };
});

</script>
<style scoped lang="scss">
.progress--line {
    width: 100%;
}

.progress-bar {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
}

.progress-bar__inner {
    background-color: rebeccapurple;
    border-radius: 10px;
    height: 100%;
    transition: width 0.6s ease;
    text-align: right;
    line-height: 80%;
}

.progress-bar__outer {
    width: 100%;
    border-radius: 10px;
    background-color: #d5d9e0;
}
</style>
