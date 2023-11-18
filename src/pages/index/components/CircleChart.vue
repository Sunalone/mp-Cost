<template>
    <view class="charts-space">
        <view class="title">支出统计</view>
        <view class="chart">
            <qiun-data-charts type="ring" :chartData="chartData" :opts="options" />
        </view>
        <scroll-view class="list" scroll-y>
            <view class="subTitle">支出详细</view>
            <view class="list-item" v-for="item in chartData.series" :key="item.name">
                <view class="tag" :style="{ backgroundColor: item.color }" />
                <view class="detail">
                    <view class="detail-text">
                        <view class="text">
                            {{ item.name }} <text class="percent">{{ item.proportion + "%" }}</text>
                        </view>
                        <view class="number">
                            {{ item.data + "(元)" }}
                        </view>
                    </view>
                    <Progress class="progress" :percentage="item.proportion" :color="item.color" />
                </view>
            </view>
        </scroll-view>
    </view>
</template>
<script lang="ts">
import { expendDataMore, expendDataLess } from "@/utils/mockData";
const colors = [
    "#1890ff",
    "#91cb74",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ca272"
];
const options = {
    title: false,
    subtitle: false
};
</script>

<script setup lang='ts'>
import { computed } from 'vue';
import Progress from './Progress.vue';

const props = defineProps<{
    month: number;
}>();

const chartData = computed(() => {
    const expandData = props.month % 2 === 0 ? expendDataMore : expendDataLess;
    const seriesData = expandData.map(({ name, expense, proportion }, index) => ({
        name,
        data: expense,
        color: colors[index],
        proportion
    }));

    return {
        series: seriesData
    };
})

</script>
<style scoped lang='scss'>
.charts-space {
    position: relative;
    padding: 0 24rpx;
    padding-bottom: 24rpx;
    width: 100%;
    height: 600px;
    background-color: #fff;
    border-radius: 24rpx;

    .title {
        position: absolute;
        top: 24rpx;
        left: 36rpx;
        font-size: 32rpx;
        font-weight: 600;
    }


    .chart {
        width: 100%;
        height: 300px;
    }

    .list {
        height: 280px;

        .subTitle {
            position: relative;
            padding-left: 10px;
            margin-bottom: 12px;
            font-size: 28rpx;
            font-weight: 600;

            &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 4px;
                height: 14px;
                background-color: #1890ff;
                border-radius: 2px;
            }
        }

        .list-item {
            display: flex;
            padding: 6px;
            margin: 10px 0;
            width: 100%;
            height: 36px;
            gap: 6px;

            .tag {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background-color: #1890ff;
            }

            .detail {
                flex: 1;
                display: flex;
                flex-direction: column;
                height: 28px;

                .detail-text {
                    display: flex;
                    justify-content: space-between;
                    height: 16px;
                    font-size: 12px;
                    font-weight: 600;

                    .text {
                        color: #000000e1;

                        .percent {
                            font-size: 10px;
                            color: #aaa;
                            font-weight: 900;

                        }
                    }
                }

                .progress {
                    flex: 1;
                    height: 12px;
                }
            }
        }
    }

}
</style>
