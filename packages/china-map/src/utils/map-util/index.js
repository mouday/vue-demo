import * as echarts from "echarts";

import chinaGeoJSON from "./china.json";

//注册地图到echarts中  这里的 "china" 要与地图数据的option中的geo中的map对应
echarts.registerMap("china", { geoJSON: chinaGeoJSON });
