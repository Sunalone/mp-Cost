<script setup lang="ts">
    import { computed, ref } from 'vue'

    const searchValue = ref<string>()

    const { safeAreaInsets } = uni.getSystemInfoSync()
    const safeAreaTop = computed(() => {
        const top: number = safeAreaInsets?.top ?? 0 + 12
        return top + 'px'
    })
</script>

<template>
    <view class="navbar" :style="{ paddingTop: safeAreaTop }">
        <!-- logo文字 -->
        <view class="space">
            <uni-icons class="logo" type="pyq" size="30" />
            <uni-search-bar
                class="search"
                v-model="searchValue"
                :focus="true"
                cancelButton="none"
            />
            <view class="place" />
        </view>
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
            align-items: center;
            height: 64rpx;
            padding-left: 30rpx;
            gap: 16rpx;

            .logo {
                width: 32rpx;

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
    }
</style>
