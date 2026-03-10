export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.setCSS("--test_$_SIGNAL_", "crimson");
  if (
    getComputedStyle(document.documentElement).getPropertyValue(
      "--test_$_SIGNAL_",
    ) === "crimson"
  ) {
    el.innerHTML = b.time();
  }
}
