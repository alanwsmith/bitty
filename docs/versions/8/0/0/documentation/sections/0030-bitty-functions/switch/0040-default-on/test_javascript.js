export const b = { init: "init_6CE21_v1" };

export function init_6CE21_v1(_, __, el) {
  const subs = {
    __STATE__: "true",
    __SEND__: "signal_6CE21_v1",
  };
  el.replaceWith(b.switch(subs));
}

export function signal_6CE21_v1(_, sender, el) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  el.innerHTML = b.time();
}
