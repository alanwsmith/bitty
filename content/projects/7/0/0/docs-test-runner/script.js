export class BittyDocTestRunner {
  async testResults(_, el) {
    await this.sleep(1000);

    let testCount = 0;
    let failed = 0;
    document.querySelectorAll("[data-expected]").forEach((el) => {
      console.log(el.bittyId);
      const summary = el.closest("details").querySelector("summary");
      testCount += 1;
      if (el.dataset.expected === el.innerHTML.trim()) {
        const subs = [
          ["CLASS", "doc-test-passed"],
          ["STATUS", "passed"],
        ];
        summary.appendChild(
          this.api.makeElement(
            this.getTemplate("result"),
            subs,
          ),
        );
      } else {
        failed += 1;
        const subs = [
          ["CLASS", "doc-test-failed"],
          ["STATUS", "failed"],
        ];
        summary.appendChild(
          this.api.makeElement(
            this.getTemplate("result"),
            subs,
          ),
        );
      }
    });
    const subs = [
      ["TOTAL", testCount],
      ["PASSED", testCount - failed],
      ["FAILED", failed],
    ];
    el.replaceChildren(
      this.api.makeHTML(this.getTemplate("results"), subs),
    );
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getTemplate(template) {
    switch (template) {
      case ("results"):
        return `<h4>Test Results</h4>
<div>Total Test: TOTAL ~ 
<span class="PASSED_CLASS">Passed: PASSED</span> ~
<span class="FAILED_CLASS">Failed: FAILED</span></div>`;
        break;
      case ("result"):
        return `<span class="CLASS"> STATUS</span>`;
        break;
    }
  }
}
