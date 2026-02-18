export default class {
  // TODO: Update this with `el.prop(KEY)` etc...
  // when bitty-8-0 is fully built.

  async bittyReady() {
    await this.sleep(300);
    this.trigger(`testStatus sectionStatus`);
  }

  sectionStatus(_, el) {
    const testEls = el.querySelectorAll(".test-wrapper");
    if (testEls.length === 0) {
      el.dataset.sectionStatus = "todo";
    } else if (
      [...testEls].filter((testEl) => {
        return testEl.dataset.testStatus === "bug";
      }).length > 0
    ) {
      el.dataset.sectionStatus = "bug";
    } else if (
      [...testEls].filter((testEl) => {
        return testEl.dataset.testStatus === "todo";
      }).length > 0
    ) {
      el.dataset.sectionStatus = "todo";
    } else {
      el.dataset.sectionStatus = "ok";
    }
  }

  testStatus(_, el) {
    const testEls = el.querySelectorAll(".test");
    if (testEls.length === 0) {
      el.dataset.testStatus = "todo";
    } else {
      el.dataset.testStatus = "ok";
      testEls.forEach((testEl) => {
        if (testEl.innerHTML.trim() !== "ok") {
          el.dataset.testStatus = "bug";
        }
      });
    }

    const manualTestEls = el.querySelectorAll(".manual-test");
    manualTestEls.forEach((testEl) => {
      el.dataset.testStatus = "ok";
    });
  }
}
