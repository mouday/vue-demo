<template>
  <div class="">
    <h2>v-emoji</h2>
    <input
      type="text"
      v-model="text"
    />
    <input
      type="text"
      v-model="emojiText"
      v-emoji
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      emojiText: '',
    };
  },
};
</script>
