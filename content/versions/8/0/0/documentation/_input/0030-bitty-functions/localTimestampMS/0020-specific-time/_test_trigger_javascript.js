export const bitty = {};

export async function run_$_SIGNAL_() {
  await bitty.sleep(100);
  bitty.qs("[data-s~=$_SIGNAL_]").click();
  await bitty.sleep(100);
  bitty.trigger("verify_$_SIGNAL_");
}

export async function verify_$_SIGNAL_() {
  console.log("HERE1");
}
