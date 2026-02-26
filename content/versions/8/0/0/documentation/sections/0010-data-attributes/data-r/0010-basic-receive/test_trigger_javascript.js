export const bitty = {};

export async function run_signal_E9FCA() {
  await bitty.sleep(200);
  bitty.qs("[data-s~=signal_E9FCA]").click();
  await bitty.sleep(300);
  bitty.trigger("verify_signal_E9FCA");
}
