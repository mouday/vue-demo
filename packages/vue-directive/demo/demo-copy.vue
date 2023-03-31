<template>
  <div class="">
    <h2>v-copy</h2>
    <input
      type="text"
      v-model="copyText"
    >
    <button v-copy="copyText">复制</button>
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
