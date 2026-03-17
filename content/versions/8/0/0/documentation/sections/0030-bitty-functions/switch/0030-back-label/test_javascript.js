export const b = { init: "init_28678_v1" };

export function init_28678_v1(_, __, el) {
  const subs = {
    __BACK_LABEL__: "test 28678_v1",
    __SEND__: "signal_28678_v1",
  };
  el.replaceWith(b.switch(subs));
}

export function signal_28678_v1(_, sender, el) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  el.innerHTML = b.time();
}
