export const b = {
  init: "loadSampleData_83167_v1",
};

export function loadSampleData_83167_v1() {
  b.save("83167_v1", { alfa: "bravo" });
}

export async function runTest() {
  b.qs("[data-s~=signal_83167_v1]").click();
  await b.sleep(200);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = b.qsa("[data-r~=signal_83167_v1]");
  checkEls.forEach((checkEl) => {
    if (checkEl.innerHTML === "todo") {
      checkEl.dataset.testStatus = 1;
    } else {
      const match = checkEl.innerHTML.match(pattern);
      if (match !== null) {
        checkEl.dataset.testStatus = 0;
      } else {
        checkEl.dataset.testStatus = 2;
      }
    }
  });
}
