export const b = { init: "initSwitch" };

export function initSwitch(_, __, el) {
  const subs = {
    __BACK_LABEL__: "snippet switch",
    __SEND__: "toggle",
  };
  el.replaceChildren(b.switch(subs));
}

export function toggle(_, sender, el) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  el.innerHTML = sender.ariaBool("checked") ? "on" : "off";
}
