<template>
  <div class="mo-tab">
    <div
      v-for="item in options"
      class="mo-tab__item"
      :class="{
        'mo-tab__item--active': item.value == currentValue,
      }"
      @click="handleChange(item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
// created at 2024-05-08
export default {
  name: "MoTab",

  props: {
    // 选项
    // eg: [{label: '显示值', value: '真实值'}]
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },

    // 选定值
    value: {
      type: String,
      default: "",
    },
  },

  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },

  methods: {
    handleChange(value) {
      this.currentValue = value;
      this.$emit("on-change", value);
    },
  },
};
</script>

<style lang="less" src="./MoTab.less"></style>
