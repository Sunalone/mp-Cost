<template>
    <view class="charts-space">
        <view class="title">支出统计</view>
        <view class="chart">
            <qiun-data-charts type="ring" :chartData="chartData" :opts="options" />
        </view>
        <scroll-view class="list" scroll-y>
            <view class="subTitle">支出详细</view>
            <view class="list-item" v-for="item in seriesData" :key="item.name">
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
import { expendData } from "@/utils/mockData";
const colors = [
    "#1890ff",
    "#91cb74",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ca272"
];

</script>

<script setup lang='ts'>
import Progress from './Progress.vue';

const seriesData = expendData.map(({ name, expense, proportion }, index) => ({
    name,
    data: expense,
    color: colors[index],
    proportion
}));

const chartData = {
    series: seriesData
};

const options = {
    title: false,
    subtitle: false
};

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
            margin-bottom: 12px;
            font-size: 28rpx;
            font-weight: 600;
        }

        .list-item {
            display: flex;
            padding: 6px;
            margin: 6px 0;
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
