export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.addStyles(`:root { --test_$_TEST_ID_: crimson }`);
  const checkValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--test_$_TEST_ID_").trim();
  if (checkValue === "crimson") {
    el.innerHTML = b.time();
  }
}
