<template>
  <div class="">
    <h2>v-permission</h2>
    <!-- 显示 -->
    <button v-permission="'1'">权限按钮1</button>
    <!-- 不显示 -->
    <button v-permission="'10'">权限按钮2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyText: '',
    };
  },
};
</script>
