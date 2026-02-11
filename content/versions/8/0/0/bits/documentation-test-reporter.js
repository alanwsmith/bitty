export default class {
  async bittyReady() {
    await this.api.sleep(100);
    this.api.trigger(`
updateIndividualTest 
individualTestStatus 
updateSectionResults
sectionTestStatus
`);
  }

  individualTestStatus(_, el) {
    const parent = el.closest(".individual-test");
    if (parent.dataset.failed !== "0") {
      el.dataset.testStatus = "failed";
      el.innerHTML = `failed`;
    } else {
      el.dataset.testStatus = "passed";
      el.innerHTML = `passed`;
    }
  }

  sectionTestStatus(_, el) {
    const parent = el.closest(".documentation-section");
    if (parent.dataset.testOverview === "failed") {
      el.dataset.testStatus = "failed";
      el.innerHTML = "failed";
    } else {
      el.dataset.testStatus = "passed";
      el.innerHTML = "passed";
    }
  }

  updateSectionResults(_, el) {
    if (
      [...el.querySelectorAll("[data-failed]")].filter((testEl) => {
        return testEl.dataset.failed !== "0";
      }).length > 0
    ) {
      el.dataset.testOverview = "failed";
    } else {
      el.dataset.testOverview = "passed";
    }

    //   // TODO: Update this to use el.propAsInt("passed")
    //   // when .propAsInt() is done.
    //   const parent = el.closest(".documentation-section");
    //   if (parent.dataset.failed !== "0") {
    //     el.dataset.testStatus = "failed";
    //     el.innerHTML = `failed`;
    //   } else {
    //     el.dataset.testStatus = "passed";
    //     el.innerHTML = `passed`;
    //   }
  }

  updateIndividualTest(_, el) {
    const passed = [...el.querySelectorAll(".test")].filter((testEl) => {
      return testEl.innerHTML.trim() === "PASSED";
    }).map((testEl) => {
      testEl.dataset.testStatus = "passed";
      return testEl;
    }).length;
    // TODO: Update this to use `el.setProp("passed", passed)`
    // when `.setProp()` is ready
    el.dataset.passed = passed;
    const failed = [...el.querySelectorAll(".test")].filter((testEl) => {
      return testEl.innerHTML.trim() !== "PASSED";
    }).map((testEl) => {
      testEl.dataset.testStatus = "failed";
      return testEl;
    }).length;
    // TODO: Update this to use `el.setProp("failed", failed)`
    // when `.setProp()` is ready
    el.dataset.failed = failed;
  }

  //
}
