export const b = {};

export async function run_signal_9E5B8_v1() {
  await b.sleep(200);
  b.qs("[data-s~=signal_9E5B8_v1]").click();
  await b.sleep(300);
  b.trigger("verify_signal_9E5B8_v2");
  b.trigger("verify_signal_9E5B8_v3");
}
