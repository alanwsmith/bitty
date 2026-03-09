export const bitty = {};

export function signal_5DC08_v1(ev, __, el) {
  if (ev.propAsInt("key") === 200) {
    el.innerHTML = bitty.time();
  }
}
