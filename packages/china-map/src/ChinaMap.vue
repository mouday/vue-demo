<template>
  <div class="chartMap" ref="chinaMap"></div>
</template>

<script>
import * as echarts from "echarts";
import "@/utils/map-util/index.js"; // 注册地图数据
import { chinaRegions } from "@/utils/map-util/map-data.js";

// 事件监听工具类
import * as eventUtil from "@/utils/event-util.js";

export default {
  name: "dataView",

  data() {
    return {
      chinaMap: "", // 地图
    };
  },
  created() {},

  mounted() {
    this.init();
  },

  beforeDestroy() {
    eventUtil.off(window, "resize", this.handleWindowResize);
  },

  methods: {
    handleWindowResize() {
      //动态改变图表尺寸
      this.chinaMap.resize();
    },

    init() {
      this.getMap(); // 地图
    },

    // 地图
    getMap() {
      this.chinaMap = echarts.init(this.$refs.chinaMap);

      let option = {
        // 设置地图样式
        geo: {
          map: "china",
          zoom: 1.2,
          layoutSize: "100%", //保持地图宽高比
          // 设置图块颜色，也可以通过图例 visualMap 设置颜色，但是飞线的颜色设置会失效，一直取 图例 设置的颜色；根据需求选择；
          regions: chinaRegions,
          label: {
            // 默认样式
            normal: {
              show: false,
              fontSize: "10",
              color: "rgba(255,255,255,.3)",
            },
            // 高亮样式
            emphasis: {
              show: true,
              textStyle: {
                color: "#1955a4",
              },
            },
          },
          itemStyle: {
            // 默认样式，图块没数据时，会取默认颜色
            normal: {
              borderColor: "#c0e0e3",
              areaColor: "#29c5f6",
              opacity: 0.8,
            },
            // 高亮样式
            emphasis: {
              areaColor: "#f2d5ad",
            },
          },
        },
        series: [
          // 设置飞线样式
          {
            type: "lines",
            coordinateSystem: "geo",
            zlevel: 100,
            effect: {
              show: true,
              period: 4, // 图标飞跃速度，值越小速度越快
              trailLength: 0.2, // 尾迹长度[0,1]值越大，尾迹越长
              symbol: "pin", // 图标类型
              symbolSize: 4, // 图标大小
              color: "#f5f3b3", // 图标颜色
            },

            lineStyle: {
              color: "#000",
              normal: {
                show: true,
                width: 1, //尾迹线条宽度
                opacity: 0.1, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
                color: "#44add00f", // 飞线颜色
              },
            },
            // 飞线数据
            data: [
              [
                {
                  // 出发
                  coord: [117.1582, 36.8701], // 山东
                  value: 1,
                },
                {
                  // 目的地
                  coord: [116.4551, 40.2539], // 北京
                },
              ],
              [
                {
                  // 出发
                  coord: [110.3893, 19.8516], // 海南
                  value: 1,
                },
                {
                  // 目的地
                  coord: [116.4551, 40.2539], // 北京
                },
              ],
            ],
          },

          // 中心点设置
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 15,
            rippleEffect: {
              period: 3,
              brushType: "fill", // 动画样式 fill stroke
              scale: 60,
              color: "#7ce7fd",
              number: 2,
            },
            symbol: "circle", // 图标样式
            symbolSize: 2,
            itemStyle: {
              color: "#5cc8d4",
            },
            // 中心点数据
            data: [
              {
                name: "北京",
                value: [116.4551, 40.2539, 10],
              },
            ],
          },
        ],
      };

      this.chinaMap.setOption(option);

      eventUtil.on(window, "resize", this.handleWindowResize);
    },
  },
};
</script>

<style lang="less">
.chartMap {
  width: 500px;
  height: 500px;
  background: #132d48;
}
</style>
