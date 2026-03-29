export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (b.config.getState !== undefined) {
    el.innerHTML = b.time();
  }
}
