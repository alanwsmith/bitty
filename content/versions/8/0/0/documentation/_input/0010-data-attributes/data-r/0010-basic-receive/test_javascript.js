export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  console.log("HERE2");
}

export async function run_$_SIGNAL_(ev, sender, el) {
  console.log("HERE1");
  $_SIGNAL_(null, null, null);
}
