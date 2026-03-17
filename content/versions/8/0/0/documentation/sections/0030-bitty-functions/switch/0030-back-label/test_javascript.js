export const b = { init: "init_28678_v1" };

export function init_28678_v1(_, __, el) {
  const subs = {
    __BACK_LABEL__: "test 28678_v1",
    __S__: "signal_28678_v1",
  };
  el.replaceWith(b.switch(subs));
}

export function signal_28678_v1(_, sender, el) {
  const newState = sender.getAttribute("aria-checked") === "true"
    ? "false"
    : "true";
  sender.setAttribute("aria-checked", newState);
  el.innerHTML = b.time();
}
