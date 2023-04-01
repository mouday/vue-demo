import copy from "./copy.js";
import longpress from "./longpress.js";
import debounce from "./debounce.js";
import emoji from "./emoji.js";
import permission from "./permission.js";
import waterMarker from "./waterMarker.js";
import draggable from "./draggable.js";


// 自定义指令
const directives = {
  copy,
  longpress,
  debounce,
  emoji,
  permission,
  waterMarker,
  draggable
};

const install = (vue) => {
  Object.keys(directives).forEach((key) => {
    vue.directive(key, directives[key]);
  });
};

// 批量注册指令
export default {
  install,
};
