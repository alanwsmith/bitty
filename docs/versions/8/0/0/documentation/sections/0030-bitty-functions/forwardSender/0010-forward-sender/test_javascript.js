export const b = {
  init: "signal_0F980_v1",
};

export function signal_0F980_v1(_, __, el) {
  b.forwardSender(el, "signal_0F980_v2");
}

export function signal_0F980_v2(_, sender, el) {
  if (sender.prop("key") === "value_0F980_v1") {
    el.innerHTML = b.time();
  }
}
