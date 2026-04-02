export const b = {};

export function signal_12A9F_v1(ev, sender, el) {
  const input_array = ["d", "a", "b", "b", "a", "c", "d"];
  const check_array = b.dedupe(input_array);
  if (JSON.stringify(check_array) === JSON.stringify(["d", "a", "b", "c"])) {
    el.innerHTML = b.time();
  }
}
