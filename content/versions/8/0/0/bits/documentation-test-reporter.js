export default class {
  // TODO: Update this with `el.prop(KEY)` etc...
  // when bitty-8-0 is fully built.

  async bittyReady() {
    await this.api.sleep(200);
    this.api.trigger(`
updateIndividualTest 
individualTestStatus 
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
    const testEls = el.closest(".documentation-section")
      .querySelectorAll(".individual-test");

    let count = testEls.length;
    let passed = 0;
    let failed = 0;

    testEls.forEach((testEl) => {
      passed += parseInt(testEl.dataset.passed, 10);
      failed += parseInt(testEl.dataset.failed, 10);
    });

    if (count === 0) {
      el.dataset.testStatus = "todo";
      el.innerHTML = "todo";
    } else if (failed > 0) {
      el.dataset.testStatus = "failed";
      el.innerHTML = "failed";
    } else if (count !== (passed + failed)) {
      el.dataset.testStatus = "todo";
      el.innerHTML = "todo";
    } else {
      el.dataset.testStatus = "passed";
      el.innerHTML = "passed";
    }

    // if (failed > 0) {
    //   el.dataset.testStatus = "failed";
    //   el.innerHTML = "failed";
    // } else if (passed === 0 && failed === 0) {
    //   el.dataset.testStatus = "todo";
    //   el.innerHTML = "todo";
    // } else {
    //   el.dataset.testStatus = "passed";
    //   el.innerHTML = "passed";
    // }

    // .forEach((testEl) => {
    //   console.log(testEl);
    // });

    // if (parent.dataset.testOverview === "failed") {
    //   el.dataset.testStatus = "failed";
    //   el.innerHTML = "failed";
    // } else {
    //   el.dataset.testStatus = "passed";
    //   el.innerHTML = "passed";
    // }
  }

  // updateSectionResults(_, el) {
  //   let passed = 0;
  //   let failed = 0;
  //   [...el.querySelectorAll("[data-failed]")].forEach((testEl) => {
  //     if (testEl.dataset.failed) {
  //       failed += parseInt(testEl.dataset.failed, 10);
  //     }
  //     if (testEl.dataset.passed) {
  //       failed += parseInt(testEl.dataset.passed, 10);
  //     }
  //   });
  //   // ) {
  //   //   el.dataset.testOverview = "failed";
  //   // } else {
  //   //   el.dataset.testOverview = "passed";
  //   // }
  //   //   // TODO: Update this to use el.propAsInt("passed")
  //   //   // when .propAsInt() is done.
  //   //   const parent = el.closest(".documentation-section");
  //   //   if (parent.dataset.failed !== "0") {
  //   //     el.dataset.testStatus = "failed";
  //   //     el.innerHTML = `failed`;
  //   //   } else {
  //   //     el.dataset.testStatus = "passed";
  //   //     el.innerHTML = `passed`;
  //   //   }
  // }

  updateIndividualTest(_, el) {
    let passed = 0;
    let failed = 0;
    el.querySelectorAll(".test").forEach((testEl) => {
      if (testEl.innerHTML.trim === "PASSED") {
        passed += 1;
      } else {
        failed += 1;
      }
    });

    // const passed = [...el.querySelectorAll(".test")].filter((testEl) => {
    //   return testEl.innerHTML.trim() === "PASSED";
    // }).map((testEl) => {
    //   testEl.dataset.testStatus = "passed";
    //   return testEl;
    // }).length;
    // el.dataset.passed = passed;
    // const failed = [...el.querySelectorAll(".test")].filter((testEl) => {
    //   return testEl.innerHTML.trim() !== "PASSED";
    // }).map((testEl) => {
    //   testEl.dataset.testStatus = "failed";
    //   return testEl;
    // }).length;
    // el.dataset.failed = failed;
  }
}
