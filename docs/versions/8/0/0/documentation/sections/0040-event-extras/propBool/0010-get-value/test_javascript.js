export const b = {};

export function signal_CEF12_v1(ev, __, el) {
  if (ev.propBool("key") === true) {
    el.innerHTML = b.time();
  }
}
