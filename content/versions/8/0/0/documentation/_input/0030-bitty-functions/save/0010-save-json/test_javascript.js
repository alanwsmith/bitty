export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const result = b.save("$_TEST_ID_", {});
  el.innerHTML = b.time();
}
