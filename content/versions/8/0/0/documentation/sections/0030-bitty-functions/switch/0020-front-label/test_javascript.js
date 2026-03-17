export const b = { init: "init_D462E_v1" };

export function init_D462E_v1(_, __, el) {
  const subs = {
    __FRONT_LABEL__: "test D462E_v1",
    __S__: "signal_D462E_v1",
  };
  el.replaceWith(b.switch(subs));
}

export function signal_D462E_v1(_, sender, el) {
  const newState = sender.getAttribute("aria-checked") === "true"
    ? "false"
    : "true";
  sender.setAttribute("aria-checked", newState);
  el.innerHTML = b.time();
}
