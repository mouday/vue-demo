<template>
  <div class="">
    <ImagePreviewDemo></ImagePreviewDemo>
  </div>
</template>

<script>
// created at 2022-12-26
import ImagePreview from "@/components/image-preview/index.js";
import ImagePreviewDemo from "./components/ImagePreview.vue";

export default {
  name: "App",

  mixins: [ImagePreview],

  props: {},

  components: {
    ImagePreviewDemo,
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
