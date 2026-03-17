export const b = { init: "init_09C63_v1" };

export function init_09C63_v1(_, __, el) {
  const subs = { __S__: "signal_09C63_v1" };
  el.replaceWith(b.switch(subs));
}

export function signal_09C63_v1(_, sender, el) {
  const newState = sender.getAttribute("aria-checked") === "true"
    ? "false"
    : "true";
  sender.setAttribute("aria-checked", newState);
  el.innerHTML = b.time();
}
