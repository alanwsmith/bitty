export const bitty = {};

export function signal_9F320_v1(_, __, el) {
  if (el.isSender === false) {
    el.innerHTML = bitty.time();
  }
}
