export const bitty = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.prop("key") === "prop_$_ID_") {
    el.innerHTML = bitty.time();
  }
}
