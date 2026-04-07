export const b = { init: "initSwitch" };

export function initSwitch(_, __, el) {
  const subs = {
    __PREPEND__: "snippet switch",
    __SEND__: "toggle",
  };
  el.replaceChildren(b.switch(subs));
}

export function toggle(_, sender, el) {
  sender.setAria("checked", !sender.ariaAsBool("checked"));
  el.innerHTML = sender.ariaAsBool("checked") ? "on" : "off";
}
