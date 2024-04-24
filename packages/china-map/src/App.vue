<template>
  <div class="">
    <ChinaMap></ChinaMap>
  </div>
</template>

<script>
// created at 2023-03-31
import ChinaMap from './ChinaMap.vue'

export default {
  name: "App",

  props: {},

  components: {
    ChinaMap
  },

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="less"></style>

<style lang="less" scoped></style>
