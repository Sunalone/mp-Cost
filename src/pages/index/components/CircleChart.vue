<template>
    <view class="charts-space">
        <view class="title">支出统计</view>
        <view class="chart">
            <qiun-data-charts type="ring" :chartData="chartData" :opts="options" />
        </view>
        <scroll-view class="list" scroll-y>
            <view class="subTitle">支出详细</view>
            <view class="list-item">
                <view class="tag" />
                <view class="detail">
                    <view class="detail-text">
                        <view class="text">
                            学习 <text class="percent">25.67%</text>
                        </view>
                        <view class="number">
                            666.00
                        </view>
                    </view>
                    <Progress class="progress" :stroke-height="4" :percentage="80" />
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script setup lang='ts'>
import Progress from './Progress.vue';

const chartData = {
    series: [
        { name: "其他", data: 50 },
        { name: "医疗", data: 30 },
        { name: "三餐", data: 20 },
        { name: "交通", data: 18 },
        { name: "购物", data: 68 },
        { name: "话费网费", data: 60 },
    ]

};

const options = {
    title: false,
    subtitle: false
};

const colors = [
    "#1890ff",
    "#91cb74",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ca272"
];

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
