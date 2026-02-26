export const bitty = {};

export async function run_$_SIGNAL_() {
  await bitty.sleep(100);
  bitty.qs("[data-s~=$_SIGNAL_]").click();
}
