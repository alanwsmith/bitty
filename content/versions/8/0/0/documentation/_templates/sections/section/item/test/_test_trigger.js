export const bitty = {};

export async function ready() {
  bitty.sleep(100);
  bitty.qs("[data-send~=$SIGNAL]").click();
}
