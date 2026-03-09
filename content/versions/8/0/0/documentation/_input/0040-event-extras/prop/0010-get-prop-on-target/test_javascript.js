export const bitty = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.prop("key") === "prop_$_ID_") {
    el.innerHTML = bitty.time();
  }
}
