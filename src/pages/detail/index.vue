
<template>
    <view class="space">
        <CustomNavBar @emitDateTime="onDateTime" />
        <view class="content">
            <CircleChart :month="currentMonth" />
        </view>
    </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CustomNavBar from './components/CustomNavbar.vue';
import CircleChart from './components/CircleChart.vue';

const currentMonth = ref<number>(0);

const onDateTime = (month: number) => {
    currentMonth.value = month;
};
</script>

<style scoped lang="scss">
.space {
    display: flex;
    flex-direction: column;
    gap: 24rpx;
    background-color: #dddddd52;
    padding-bottom: 24rpx;

    .content {
        padding: 0 24rpx;
    }
}
</style>
