<template>
  <div class="app">
    <MoTab
      :options="options"
      v-model="value"
      @on-change="handleValueChange"
    ></MoTab>

    <div class="content">
      <p>选定真实值: {{ value }}</p>
      <p>选定显示值: {{ currentLabel }}</p>
    </div>
  </div>
</template>

<script>
// created at 2023-03-31
import MoTab from "./components/MoTab/MoTab.vue";

export default {
  name: "App",

  props: {},

  components: {
    MoTab,
  },

  data() {
    return {
      // 选定值
      value: "1",

      // 选项
      options: [
        {
          value: "1",
          label: "蔬菜",
        },
        {
          value: "2",
          label: "肉类",
        },
        {
          value: "3",
          label: "水果",
        },
      ],
    };
  },

  computed: {
    currentLabel() {
      return this.options.find((item) => item.value === this.value)?.label;
    },
  },

  methods: {
    handleValueChange(value) {
      console.log("value change: ", value);
    },
  },

  created() {},
};
</script>

<style lang="less">
.app {
  width: 200px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
}

.content {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}
</style>
