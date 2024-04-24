<template>
  <div class="">
    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<script>
// created at 2022-12-26
export default {
  name: "ImagePreview",

  inject: {
    openImgViewer: {
      default: () => {},
    },
  },
  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},

    handleClick() {
      this.openImgViewer([
        "https://cn.bing.com/th?id=OHR.GentooGrievances_ZH-CN2875292726_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
        "https://cn.bing.com/th?id=OHR.RoeTrentinoSnow_ZH-CN3122890500_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
        "https://cn.bing.com/th?id=OHR.BeverleyWestwood_ZH-CN3729041588_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
      ]);
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="less"></style>

<style lang="less" scoped></style>
