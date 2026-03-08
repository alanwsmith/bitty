export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  bitty.setCSS("--test_$_SIGNAL_", "crimson");
  if (
    getComputedStyle(document.documentElement).getPropertyValue(
      "--test_$_SIGNAL_",
    ) === "crimson"
  ) {
    el.innerHTML = bitty.time();
  }
}
