export default class {
  async bittyReady() {
    //    this.api.trigger("initSectionTestStatus");
    await this.api.sleep(100);
    this.api.trigger("updateIndividualTest individualTestStatus");

    //   this.api.trigger("updateSectionResults sectionTestStatus");
  }

  individualTestStatus(_, el) {
    console.log(el);
    const parent = el.closest(".individual-test");
    if (parent.dataset.failed !== "0") {
      el.dataset.testStatus = "failed";
      el.innerHTML = `failed`;
    } else {
      el.dataset.testStatus = "passed";
      el.innerHTML = `passed`;
    }
  }

  // sectionTestStatus(_, el) {
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
  // }

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
