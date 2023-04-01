<template>
  <div class="app-container">
    <h2>Vue.js component动态组件示例</h2>

    <!-- tabs -->
    <div class="tabs">
      <div
        v-for="item in componentConfigs"
        class="tab-item"
        :class="{ 'tab-item--active': item.value == tab }"
        @click="handleTabClick(item)"
      >
        {{ item.label }}
      </div>
    </div>

    <!-- content -->
    <div class="content">
      <component v-bind:is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
// created at 2022-12-26
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import ComponentC from "./components/ComponentC.vue";

const componentConfigs = [
  {
    component: ComponentA,
    value: "A",
    label: "组件 A",
  },
  {
    component: ComponentB,
    value: "B",
    label: "组件 B",
  },
  {
    component: ComponentC,
    value: "C",
    label: "组件 C",
  },
];

export default {
  name: "App",

  data() {
    return {
      tab: "A",
      componentConfigs,
    };
  },

  computed: {
    currentComponent() {
      return componentConfigs.find((item) => item.value == this.tab).component;
    },
  },

  methods: {
    handleTabClick(item) {
      this.tab = item.value;
    },
  },

  created() {},
};
</script>

<style lang="less">
body {
  display: flex;
  justify-content: center;
}

.app-container {
  //   display: inline-block;
  text-align: center;
}

.tabs {
  display: flex;
  justify-content: center;
  border: 1px solid #808080;
  border-bottom: none;
}

.tab-item {
  width: 200px;
  line-height: 40px;
  text-align: center;
  background-color: #808080;
  color: #fff;
  cursor: pointer;
}

.tab-item--active {
  background-color: #fff;
  color: #000;
}

.content {
  line-height: 500px;
  text-align: center;
  border: 1px solid #808080;
}
</style>
