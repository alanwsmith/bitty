export const bitty = {};

export function signal_7D5A1_v1(ev, sender, el) {
  bitty.setCSS("--test_signal_7D5A1_v1", "crimson");
  if (
    getComputedStyle(document.documentElement).getPropertyValue(
      "--test_signal_7D5A1_v1",
    ) === "crimson"
  ) {
    el.innerHTML = bitty.time();
  }
}
