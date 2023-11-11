<script setup lang="ts">
import { computed, ref } from 'vue';
import { transformDateToYearMonth } from '@/utils/transformDate';

const currentDate = ref<string>();
const isShowDatePicker = ref<boolean>(false);

const { safeAreaInsets } = uni.getSystemInfoSync();
const safeAreaTop = computed(() => {
    const top: number = safeAreaInsets?.top ?? 0 + 12;
    return top + 'px';
});

const onSearchfocus = () => {
    isShowDatePicker.value = true;
};

const closeDatePicker = () => {
    isShowDatePicker.value = false;
};

const onDatePickerConfirm = (value: Record<string, any>) => {
    const selectedDate = transformDateToYearMonth(new Date(value.detail));
    currentDate.value = selectedDate;
    closeDatePicker();
};
</script>

<template>
    <view class="navbar" :style="{ paddingTop: safeAreaTop }">
        <!-- logo文字 -->
        <view class="space">
            <uni-icons class="logo" type="pyq" size="30" />
            <uni-search-bar v-model="currentDate" class="search" placeholder="请选择时间" cancelButton="none"
                @focus="onSearchfocus" />
            <view class="place" />
        </view>
        <vant-datetime-picker class="date-picker" v-show="isShowDatePicker" type="year-month" title="选择年月"
            :value="new Date().getTime()" :min-date="new Date(2020, 0, 1)" :max-date="new Date(2025, 5, 1)"
            @confirm="onDatePickerConfirm" @cancel="closeDatePicker" />
    </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
    position: relative;
    padding-top: 20px;
    padding-bottom: 12px;

    .space {
        display: flex;
        padding: 0 8rpx;
        align-items: center;
        height: 64rpx;
        gap: 30rpx;

        .logo {
            width: 36rpx;

            text {
                color: $uni-color-primary !important;
            }
        }

        .search {
            flex: 1;
        }

        .place {
            width: 168rpx;
        }
    }

    .date-picker {
        width: 100vw;
        position: fixed;
        left: 0;
        bottom: 0;
    }
}
</style>
