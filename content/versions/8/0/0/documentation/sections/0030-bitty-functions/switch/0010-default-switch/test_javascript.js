export const b = { init: "init_09C63_v1" };

export function init_09C63_v1(_, __, el) {
  const subs = { __SEND__: "signal_09C63_v1" };
  el.replaceWith(b.switch(subs));
}

export function signal_09C63_v1(_, sender, el) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  el.innerHTML = b.time();
}
