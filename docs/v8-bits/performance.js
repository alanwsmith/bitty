export const b = {};

let count = 1000;

export function run(_, __, el) {
  b.mark("create");
  el.replaceChildren(
    ...Array.from({ length: count }, (_, index) => {
      return b.render("benchItem", { __NUM__: index + 1 });
    }),
  );
  b.mark("create");
  b.trigger("clickBenchmark");
}

export function clickBenchmark() {
  b.mark("bench");
  b.qs(`#button-${count}`).click();
}

export function benchmark(_, sender, el) {
  if (sender.prop("key") === el.prop("key")) {
    el.innerHTML = "ping";
    b.mark("bench");
    b.trigger("report");
  }
}

export function report(_, __, el) {
  const creationTime = b.getMarks("create")[1] - b.getMarks("create")[0];
  const benchTime = b.getMarks("bench")[1] - b.getMarks("bench")[0];
  const subs = {
    __CREATE__: `${creationTime}ms`,
    __BENCH__: `${benchTime}ms`,
  };
  el.replaceChildren(b.render("report", subs));
}
