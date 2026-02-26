export const bitty = {};

export async function run_$_SIGNAL_() {
  await bitty.sleep(200);
  bitty.qs("[data-s~=$_SIGNAL_]").click();
  bitty.qs("[data-s~=$_SIGNAL2_]").click();
  await bitty.sleep(300);
  bitty.trigger("verify_$_SIGNAL_");
  bitty.trigger("verify_$_SIGNAL2_");
}
