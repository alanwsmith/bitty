export const b = {};

export function signal_E3859_v1(ev, sender, el) {
  b.addStyles(`:root { --test_E3859_v1: crimson }`);
  const checkValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--test_E3859_v1").trim();
  if (checkValue === "crimson") {
    el.innerHTML = b.time();
  }
}
