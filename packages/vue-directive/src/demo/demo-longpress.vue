<template>
  <div class="">
    <h2>v-longpress</h2>
    <button v-longpress="longpress">长按</button>
  </div>
</template>

<script>
export default {
  methods: {
    longpress() {
      alert('长按指令生效');
    },
  },
};
</script>

