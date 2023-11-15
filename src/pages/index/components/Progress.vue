<template>
    <view class="progress--line">
        <view class="progress-bar">
            <view class="progress-bar__outer" :style="{ height: strokeHeight + 'px' }">
                <view class="progress-bar__inner" :style="barStyle" />
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    strokeHeight: number;
    percentage: number;
}>();

const barStyle = computed(() => {
    const barColor = props.percentage < 60 ? "#ff4949" : '#13ce66';

    return {
        width: props.percentage + "%",
        backgroundColor: barColor
    };
});

</script>
<style scoped lang="scss">
.progress--line {
    width: 100%;
}

.progress-bar {
    display: inline-block;
    width: 98%;
    box-sizing: border-box;
    margin-right: -50px;
    padding-right: 50px;
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
    background-color: #ebeef5;
}
</style>
