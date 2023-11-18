<template>
  <scroll-view scroll-y class="space">
    <Card title="七日汇总">
      <WeekDetail />
    </Card>
    <Card :title="4885.5" sub-title="本月支出" :high-light-text="22.4">
      <MonthDetail />
    </Card>
    <view class="today-info">
      <Card :title="currentWeekDay">
        <Expense />
      </Card>
      <Card title="预算">
        <Budget />
      </Card>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import Card from '@/wxcomponents/Card.vue';
import WeekDetail from './components/WeekDeatil.vue';
import MonthDetail from './components/MonthDetail.vue';
import Expense from './components/Expense.vue';
import Budget from './components/Budget.vue';
import { getWeekDay } from '@/utils/transformDate';

const currentWeekDay = getWeekDay();

</script>

<style scoped lang="scss">
.space {
  padding: 12px 12px;
  height: 100vh;
  background-color: #dddddd52;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  .today-info {
    display: flex;
    gap: 12px;

    card {
      width: 50%;
    }
  }
}
</style>
