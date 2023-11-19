<template>
    <view class="chart">
        <qiun-data-charts type="column" :opts="options" :chartData="chartData" />
    </view>
</template>

<script setup lang='ts'>
const chartData = {
    categories: ["一", "二", "三", "四", "五", "六", "日"],
    series: [
        {
            name: "花费",
            data: [35, 36, 31, 33, 33, 34, 40]
        },
    ]
};
const options = {
    color: ["#6c9ff0"],
    padding: [15, 5, 0, 5],
    enableScroll: false,
    legend: {
        show: false
    },
    xAxis: {
        disableGrid: true,
        axisLine: false
    },
    yAxis: {
        disabled: true,
        disableGrid: true
    },
    extra: {
        column: {
            type: "group",
            width: 10,
            activeBgColor: "#000000",
            activeBgOpacity: 0.08,
            barBorderRadius: [10, 10, 10, 10]
        },
        tooltip: {
            showBox: false
        }
    }
};
</script>
<style scoped lang='scss'>
.chart {
    width: 100%;
    height: 200px;
}
</style>