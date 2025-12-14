export class BittyDocTestRunner {
  #numberOfTests = 0;
  #numberOfBugs = 0;

  itemFailed(_, el) {
    if (el) {
      const output = this.api.makeHTML(this.template("itemFailed"));
      el.appendChild(output);
    }
  }

  itemPassed(_, el) {
    if (el) {
      const output = this.api.makeHTML(this.template("passed"));
      el.appendChild(output);
    }
  }

  setStatusProps() {
    document.querySelectorAll("[data-expects]").forEach((el) => {
      this.#numberOfTests += 1;
      const summary = document.querySelector(
        `details:has(details) details:has([data-bittyid="${el.bittyId}"]) > summary`,
      );

      const parentSummary = document.querySelector(
        `details:has(details [data-bittyid="${el.bittyId}"]) > summary`,
      );
      const expected = el.dataset.expects;
      const got = el.innerHTML.trim();
      if (expected === got) {
        if (
          parentSummary.dataset.receive !== "itemFailed"
        ) {
          summary.dataset.receive = "testPassed";
          parentSummary.dataset.receive = "itemPassed";
        }
      } else {
        this.#numberOfBugs += 1;
        summary.dataset.receive = "testFailed";
        summary.dataset.expected = expected;
        summary.dataset.got = got;
        parentSummary.dataset.receive = "itemFailed";
      }

      //
    });
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  testOutput() {
    const subs = [
      ["TOTAL", this.#numberOfTests],
      ["PASSED", this.#numberOfTests - this.#numberOfBugs],
      ["BUGS", this.#numberOfBugs],
    ];
    const output = this.api.makeHTML(this.template("output"), subs);
    return output;
  }

  testFailed(_, el) {
    if (el) {
      const subs = [
        ["GOT", el.prop("got")],
        ["EXPECTED", el.prop("expected")],
      ];
      const output = this.api.makeHTML(this.template("testFailed"), subs);
      el.appendChild(output);
    }
  }

  testPassed(_, el) {
    if (el) {
      const output = this.api.makeHTML(this.template("testPassed"));
      el.appendChild(output);
    }
  }

  async testResults(_, el) {
    await this.sleep(100);
    this.setStatusProps();
    this.api.trigger("itemPassed itemFailed testPassed testFailed");
    el.replaceChildren(this.testOutput());
  }

  template(template) {
    switch (template) {
      case ("itemFailed"):
        return `<span class="failed"> bug</span>`;
      case ("output"):
        return `<h4>Test Results</h4>
<div>Number of Test: TOTAL ~ Passed: PASSED ~ Bugs: BUGS`;
      case ("passed"):
        return `<span class="passed"> passed</span>`;
      case ("testFailed"):
        return `<span class="failed"> bug - expected: EXPECTED - got: GOT</span>`;
      case ("testPassed"):
        return `<span class="passed"> passed</span>`;
    }
  }
}
