<template>
    <view>
        <view class="day">
            {{ currentDay }}
        </view>
        <view class="content">
            <view class="expense">
                1000.00
            </view>
            <view class="text">
                今日支出
            </view>
        </view>
        <view class="content">
            <view class="expense">
                4885.50
            </view>
            <view class="text">
                本月支出
            </view>
        </view>
    </view>
</template>

<script setup lang='ts'>
const currentDay = new Date().getDate();

</script>
<style scoped lang='scss'>
.day {
    font-size: 24px;
    font-weight: 600;
}

.content {
    position: relative;
    padding-left: 12px;
    margin-top: 12px;
    font-weight: 600;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 4px;
        height: 24px;
        border-radius: 8px;
        background-color: #6c9ff0;
    }


    .expense {
        font-size: 18px;
        letter-spacing: 2px;
    }

    .text {
        font-size: 12px;
        color: #00000065;
    }
}
</style>