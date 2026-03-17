export const b = { init: "init_6CE21_v1" };

export function init_6CE21_v1(_, __, el) {
  const subs = {
    __STATE__: "true",
    __S__: "signal_6CE21_v1",
  };
  el.replaceWith(b.switch(subs));
}

export function signal_6CE21_v1(_, sender, el) {
  const newState = sender.getAttribute("aria-checked") === "true"
    ? "false"
    : "true";
  sender.setAttribute("aria-checked", newState);
  el.innerHTML = b.time();
}
