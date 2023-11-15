<script setup lang="ts">
import CustomNavBar from './components/CustomNavbar.vue';
import CircleChart from './components/CircleChart.vue';
</script>

<template>
    <view class="space">
        <CustomNavBar />
        <view class="content">
            <CircleChart />
        </view>
    </view>
</template>

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
