export const bitty = {};

export async function run_signal_0C853_v1() {
  await bitty.sleep(200);
  const event_signal_0C853_v1 = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  bitty.qs("[data-s~=signal_0C853_v1]").dispatchEvent(event_signal_0C853_v1);
  await bitty.sleep(300);
  bitty.trigger("verify_signal_0C853_v1");
}
