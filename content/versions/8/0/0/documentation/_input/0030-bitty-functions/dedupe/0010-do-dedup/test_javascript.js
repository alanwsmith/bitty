export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const input_array = ["d", "a", "b", "b", "a", "c", "d"];
  const check_array = b.dedupe(input_array);
  if (JSON.stringify(check_array) === JSON.stringify(["d", "a", "b", "c"])) {
    el.innerHTML = b.time();
  }
}
