export const bitty = {};

export async function run_signal_6E38F_alfa() {
  await bitty.sleep(200);
  const event_signal_6E38F_alfa = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  bitty.qs("[data-s~=signal_6E38F_alfa]").dispatchEvent(event_signal_6E38F_alfa);
  await bitty.sleep(300);
  bitty.trigger("verify_signal_6E38F_alfa");
}
