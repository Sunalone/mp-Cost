<template>
    <view>
        <vant-circle :value="88.4" text="88.4%" :size="75" layer-color="#dfdcdc" stroke-width="6" color="#3ca272" />
        <view class="content">
            <view class="expense">
                1326.00
            </view>
            <view class="text">
                剩余预算
            </view>
        </view>
    </view>
</template>
<style scoped lang='scss'>
.circle {
    height: 40px;
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