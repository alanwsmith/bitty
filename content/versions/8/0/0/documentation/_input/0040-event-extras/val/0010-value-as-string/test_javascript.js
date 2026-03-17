export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (ev.val() === "Input $_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
