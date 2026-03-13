export const b = { init: "timeReport" };

export async function timeReport(_, __, el) {
  b.mark("snippet", "initial mark");
  await b.sleep(100);
  b.mark("snippet");
  await b.sleep(100);
  b.mark("snippet", "final mark");
  el.innerHTML = b.getMarks("snippet")
    .map((mark) => mark.join(" "))
    .join("\n");
}
