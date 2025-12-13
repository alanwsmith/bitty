const bittyDocTestTemplates = {
  results: `
<div>Test Results</div>
<div>Total Test: TOTAL</div>
<div>Passed: PASSED</div>
<div>Failed: FAILED</div>
`,
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.BittyDocTestRunner = class {
  async bittyReady() {
    await sleep(300);
    this.api.localTrigger("testResults");
  }

  testResults(_, el) {
    let testCount = 0;
    let failed = 0;
    document.querySelectorAll("[data-expected]").forEach((el) => {
      testCount += 1;
      if (el.dataset.expected === el.innerHTML.trim()) {
        el.classList.add("doc-test-passed");
      } else {
        failed += 1;
        el.classList.add("doc-test-failed");
      }
    });
    const subs = [
      ["TOTAL", testCount],
      ["PASSED", testCount - failed],
      ["FAILED", failed],
    ];
    el.replaceChildren(
      this.api.makeHTML(bittyDocTestTemplates.results, subs),
    );
  }
};
