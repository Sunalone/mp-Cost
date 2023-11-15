<template>
    <view class="navbar" :style="{ paddingTop: safeAreaTop }">
        <view class="space">
            <uni-search-bar v-model="currentDate" class="search" placeholder="请选择时间" cancelButton="none"
                @focus="onSearchfocus">
                <uni-icons slot="searchIcon" color="#999999" size="18" type="calendar" />
            </uni-search-bar>
            <view class="place" />
        </view>
        <vant-datetime-picker class="date-picker" v-show="isShowDatePicker" type="year-month" title="选择年月" :value="nowDate"
            :min-date="new Date(2020, 0, 1)" :max-date="nowDate" @confirm="onDatePickerConfirm" @cancel="closeDatePicker" />
    </view>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { transformDateToYearMonth } from '@/utils/transformDate';

const nowDate = new Date().getTime();

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

onMounted(() => {
    currentDate.value = transformDateToYearMonth(new Date(nowDate));
});
</script>

<style lang="scss">
/* 自定义导航条 */
.navbar {
    position: relative;
    padding-top: 20px;
    padding-bottom: 12px;
    background-color: #fff;

    .space {
        display: flex;
        padding: 0 8rpx;
        align-items: center;
        height: 64rpx;
        gap: 30rpx;

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
