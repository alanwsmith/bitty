export default class {
  async bittyReady() {
    this.api.trigger("initSectionTestStatus");
    await this.api.sleep(1800);
    this.api.trigger("updateSectionResults sectionTestStatus");
  }

  initSectionTestStatus(_, el) {
    el.innerHTML = "calculating test results";
  }

  sectionTestStatus(_, el) {
    el.replaceChildren("TODO: Test Status");
  }

  updateSectionResults(_, el) {
    const passed = [...el.querySelectorAll(".test")].filter((testEl) => {
      return testEl.innerHTML.trim() === "PASSED";
    }).map((testEl) => {
      testEl.dataset.testStatus = "passed";
      return testEl;
    }).length;
    el.dataset.passed = passed;

    const failed = [...el.querySelectorAll(".test")].filter((testEl) => {
      return testEl.innerHTML.trim() !== "PASSED";
    }).map((testEl) => {
      testEl.dataset.testStatus = "failed";
      return testEl;
    }).length;
    el.dataset.failed = failed;
  }
}
