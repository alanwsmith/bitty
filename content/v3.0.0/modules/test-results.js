function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const t = {
  "passed": `
<div class="test-passed">Passed: PASSED_NUM</div>
<div>Failed: 0</div>
`,
  "failed": `
<div>Passed: PASSED_NUM</div>
<div class="test-failed">Failed: FAILED_NUM</div>
<p>
  NOTE: Each test loads its own external 'test.js' file. 
  They are checked after a brief 'setTimeout()'. 
  If you're on a slow network connection they may
  not all load before the check function fires. 
  That's the first thing to check if you 
  see failures. You can do so by cloning a
  copy of the repo and running it locally.
</p>
`,
};

export default class {
  #passed = 0;
  #failed = 0;

  async showResults(_event, element) {
    await sleep(1200);
    const els = document.querySelectorAll(".test");
    [...els].forEach((el) => {
      if (el.innerHTML == "PASSED") {
        this.#passed += 1;
        el.classList.add("test-passed");
      } else {
        console.log(el);
        this.#failed += 1;
        el.classList.add("test-failed");
      }
    });
    if (this.#failed == 0) {
      const subs = [["PASSED_NUM", this.#passed]];
      element.replaceChildren(this.api.useTemplate(t.passed, subs));
    } else {
      const subs = [
        ["PASSED_NUM", this.#passed],
        ["FAILED_NUM", this.#failed],
      ];
      element.replaceChildren(this.api.useTemplate(t.failed, subs));
    }
  }
}
