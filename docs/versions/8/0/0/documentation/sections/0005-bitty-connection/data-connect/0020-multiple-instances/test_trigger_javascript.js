export const bitty = {};

export async function run_signal_A2EB2() {
  await bitty.sleep(200);
  bitty.qs("[data-s~=signal_A2EB2]").click();
  bitty.qs("[data-s~=signal_A2EB2_2]").click();
  await bitty.sleep(300);
  bitty.trigger("verify_signal_A2EB2");
  bitty.trigger("verify_signal_A2EB2_2");
}
