export default class {
  // TODO: Update this with `el.prop(KEY)` etc...
  // when bitty-8-0 is fully built.

  async bittyReady() {
    await this.api.sleep(200);
    this.api.trigger(`testStatus sectionStatus`);
  }

  xindividualTestStatus(_, el) {
    const testEls = el.closest(".test-wrapper")
      .querySelectorAll(".test");
    let count = testEls.length;
    let ok = 0;
    let bug = 0;

    testEls.forEach((testEl) => {
      if (testEl.dataset.testStatus === "ok") {
        ok += 1;
      } else if (testEl.dataset.testStatus === "bug") {
        bug += 1;
      }
    });
    if (count === 0) {
      el.dataset.testStatus = "todo";
      el.innerHTML = "todo";
    } else if (bug > 0) {
      el.dataset.testStatus = "bug";
      el.innerHTML = "bug";
    } else if (count !== (ok + bug)) {
      el.dataset.testStatus = "todo";
      el.innerHTML = "todo";
    } else {
      el.dataset.testStatus = "ok";
      el.innerHTML = "ok";
    }
  }

  xsectionTestStatus(_, el) {
    // const testWrappers = el.closest(".documentation-section")
    //   .querySelectorAll("test-wrapper");

    // const testEls = el.closest(".documentation-section")
    //   .querySelectorAll(".test");

    // let count = testEls.length;
    // let ok = 0;
    // let bug = 0;

    // testEls.forEach((testEl) => {
    //   if (testEl.dataset.testStatus === "ok") {
    //     ok += 1;
    //   } else if (testEl.dataset.testStatus === "bug") {
    //     bug += 1;
    //   }
    // });
    // if (count === 0) {
    //   el.dataset.testStatus = "todo";
    //   el.innerHTML = "todo";
    // } else if (bug > 0) {
    //   el.dataset.testStatus = "bug";
    //   el.innerHTML = "bug";
    // } else if (count !== (ok + bug)) {
    //   el.dataset.testStatus = "todo";
    //   el.innerHTML = "todo";
    // } else {
    //   el.dataset.testStatus = "ok";
    //   el.innerHTML = "ok";
    // }

    //
  }

  sectionStatus(_, el) {
    el.dataset.testSectionStatus = "todo";
  }

  testStatus(_, el) {
    console.log(el);
    const testEls = el.querySelectorAll(".test");
    if (testEls.length === 0) {
      console.log("asdf");
      el.dataset.testStatus = "todo";
    } else {
      el.dataset.testStatus = "ok";
      testEls.forEach((testEl) => {
        if (testEl.innerHTML.trim() !== "ok") {
          el.dataset.testStatus = "bug";
        }
      });
    }
  }
}
