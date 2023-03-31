<template>
  <div>
    <h2>v-debounce</h2>
    <button v-debounce="debounceClick">防抖</button>
  </div>
</template>

<script>
export default {
  methods: {
    debounceClick() {
      console.log('只触发一次');
    },
  },
};
</script>