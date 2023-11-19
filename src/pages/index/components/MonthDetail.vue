<template>
    <view class="chart">
        <qiun-data-charts type="column" :opts="options" :chartData="chartData" :ontap="false" />
    </view>
</template>

<script setup lang='ts'>
const chartData = {
    categories: [
        "1号", "2号", "3号", "4号", "5号", "6号", "7号",
        "8号", "9号", "10号", "11号", "12号", "13号", "14号",
        "15号", "16号", "17号", "18号", "19号", "20号", "21号",
        "22号", "23号", "24号", "25号", "26号", "27号", "28号",
        "29号", "30号", "31号"],
    series: [
        {
            name: "花费",
            data: [35, 36, 31, 33, 33, 34, 40, 34, 30, 100, 50, 60, 30, 20, 30, 50, 35, 36, 31, 33, 33, 34, 40, 34, 30, 100, 50, 60, 30, 20, 30]
        },
    ]
};
const options = {
    color: ["#6c9ff0"],
    padding: [15, 5, 0, 5],
    dataLabel: false,
    enableScroll: false,
    legend: {
        show: false
    },
    xAxis: {
        disabled: true,
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
            width: 4,
            categoryGap: 4,
            barBorderRadius: [10, 10, 10, 10]
        },
        tooltip: {
            showBox: true
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