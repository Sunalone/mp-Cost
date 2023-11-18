<template>
  <div class="space">
    <Card title="七日汇总" :high-light-text="100">
      <WeekDetail />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/wxcomponents/Card.vue';
import WeekDetail from './components/WeekDeatil.vue';
</script>

<style scoped lang="scss">
.space {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  padding: 12px 12px;
  height: 100vh;
  background-color: #dddddd52;
}
</style>
