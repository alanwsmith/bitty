export const bitty = {};

export async function run_signal_6E38F() {
  await bitty.sleep(200);
  const event_signal_6E38F = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  bitty.qs("[data-s~=signal_6E38F]").dispatchEvent(event_signal_6E38F);
  await bitty.sleep(300);
  bitty.trigger("verify_signal_6E38F");
}
