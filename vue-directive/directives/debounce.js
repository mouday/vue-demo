/**
 * 需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。
 * 思路：延迟调用
 */
const debounce = {
  inserted: function (el, binding) {
    let timer;
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 1000);
    });
  },
};

export default debounce;
