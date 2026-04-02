export const b = {
  init: "initForwardSender",
};

export function initForwardSender(_, __, el) {
  b.forwardSender(el, "receiveSender");
}

export function receiveSender(_, sender, el) {
  el.innerHTML = `${sender.prop("key")} at ${b.time()}`;
}
