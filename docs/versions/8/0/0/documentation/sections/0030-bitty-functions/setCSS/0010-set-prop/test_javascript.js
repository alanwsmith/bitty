export const bitty = {};

export function signal_7D5A1_alfa(ev, sender, el) {
  bitty.setCSS("--test_signal_7D5A1_alfa", "crimson");
  if (
    getComputedStyle(document.documentElement).getPropertyValue(
      "--test_signal_7D5A1_alfa",
    ) === "crimson"
  ) {
    el.innerHTML = bitty.time();
  }
}
