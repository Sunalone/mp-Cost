import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';

// 创建 pinia实例
const pinia = createPinia();
// 使pinia持久
pinia.use(persist);
export default pinia;
export * from './modules/member';
