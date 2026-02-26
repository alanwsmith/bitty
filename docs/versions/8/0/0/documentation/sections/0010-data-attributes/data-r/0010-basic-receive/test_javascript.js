export const bitty = {};

export function signal_e9fca(ev, sender, el) {
  console.log("HERE2");
}

export async function run_signal_e9fca(ev, sender, el) {
  console.log("HERE1");
  signal_e9fca(null, null, null);
}
