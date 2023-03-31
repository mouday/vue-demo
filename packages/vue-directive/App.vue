<template>
  <div class="">
    <DemoCopy />

    <DemoLongpress />

    <DemoDebounce />

    <DemoEmoji />

    <DemoLazyLoad />

    <DemoPermission />

    <DemoWaterMarker />

    <DemoDraggable />
  </div>
</template>

<script>
import DemoCopy from './demo/demo-copy.vue';
import DemoLongpress from './demo/demo-longpress.vue';
import DemoDebounce from './demo/demo-debounce.vue';
import DemoEmoji from './demo/demo-emoji.vue';
import DemoLazyLoad from './demo/demo-lazy.vue';
import DemoPermission from './demo/demo-permission.vue';
import DemoWaterMarker from './demo/demo-waterMarker.vue';
import DemoDraggable from './demo/demo-draggable.vue';

export default {
  components: {
    DemoCopy,
    DemoLongpress,
    DemoDebounce,
    DemoEmoji,
    DemoLazyLoad,
    DemoPermission,
    DemoWaterMarker,
    DemoDraggable,
  },
};
</script>
