export const b = { init: "init_D462E_v1" };

export function init_D462E_v1(_, __, el) {
  const subs = {
    __FRONT_LABEL__: "test D462E_v1",
    __S__: "signal_D462E_v1",
  };
  el.replaceWith(b.switch(subs));
}

export function signal_D462E_v1(_, sender, el) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  el.innerHTML = b.time();
}
