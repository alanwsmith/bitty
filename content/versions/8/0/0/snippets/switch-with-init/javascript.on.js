export const b = { init: "addStyles initSwitches" };

let data;

export function initSwitches(_, __, el) {
  const defaults = { alfa: false, bravo: false, charlie: false, delta: false };
  data = b.loadPage("state", defaults);
  el.replaceChildren(
    ...Object.keys(data).map((key) => {
      const subs = {
        __BACK_LABEL__: key,
        __KEY__: key,
        __SEND__: "toggle",
        __STATE__: data[key],
        __DISPLAY__: data[key] ? "on" : "off",
      };
      const switchEl = b.switch(subs);
      subs["__SWITCH__"] = switchEl;
      return b.render("toggleWrapper", subs);
    }),
  );
}

export function toggle(_, sender, ___) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  data[sender.prop("key")] = sender.ariaBool("checked");
  b.savePage("state", data);
  b.send(sender.prop("key"), "display");
}

export function display(key, __, el) {
  if (el.prop("key") === key) {
    el.innerHTML = data[key] ? "on" : "off";
  }
}
