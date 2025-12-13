export class BittyDocTestRunner {
  async testResults(_, el) {
    await this.sleep(1000);
    let testCount = 0;
    let failed = 0;
    let bugs = 0;

    document.querySelectorAll("[data-expects]").forEach((el) => {
      const summary = el.closest("details").querySelector("summary");
      const parentSummary = summary.parentNode.parentNode.closest("details")
        .querySelector("summary");
      testCount += 1;
      if (el.dataset.expects === el.innerHTML.trim()) {
        summary.dataset.status = "passed";
        if (
          parentSummary.dataset.status !== "failed" &&
          parentSummary.dataset.status !== "bug"
        ) {
          parentSummary.dataset.status = "passed";
        }
      } else {
        failed += 1;
        summary.dataset.status = "failed";
        parentSummary.dataset.status = "failed";
      }
    });
    const subs = [
      ["TOTAL", testCount],
      ["PASSED", testCount - failed],
      ["FAILED", failed],
      ["BUGS", bugs],
    ];
    el.replaceChildren(
      this.api.makeHTML(this.template("results"), subs),
    );
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  template(template) {
    switch (template) {
      case ("results"):
        return `<h4>Test Results</h4>
<div>Total Test: TOTAL ~ 
<span>Passed: PASSED</span> ~
<span>Failed: FAILED</span>`;
        break;
    }
  }
}
