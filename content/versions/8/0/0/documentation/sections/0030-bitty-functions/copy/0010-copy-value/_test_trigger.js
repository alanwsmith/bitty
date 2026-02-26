export const bitty = {};

export async function ready() {
  bitty.sleep(100);
  bitty.qs("[data-send~=signal_bbb88]").click();
}
