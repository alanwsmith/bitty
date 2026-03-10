export const b = {
  init: "init_$_TEST_ID_ init_$_TEST2_ID_",
};

export function init_$_TEST_ID_(ev, sender, el) {
  el.innerHTML = b.time();
}

export function init_$_TEST2_ID_(ev, sender, el) {
  el.innerHTML = b.time();
}
