export const bitty = {};

export async function run_$_SIGNAL_() {
  await bitty.sleep(200);
  const event_$_SIGNAL_ = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  bitty.qs("[data-s~=$_SIGNAL_]").dispatchEvent(event_$_SIGNAL_);
  await bitty.sleep(300);
  bitty.trigger("verify_$_SIGNAL_");
}
