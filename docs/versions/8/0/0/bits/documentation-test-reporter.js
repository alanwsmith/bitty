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
    const testEls = el.closest(".test-wrapper")
      .querySelectorAll(".test");
    let count = testEls.length;
    let ok = 0;
    let bug = 0;

    testEls.forEach((testEl) => {
      if (testEl.dataset.testStatus === "ok") {
        ok += 1;
      } else {
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

  sectionTestStatus(_, el) {
    const testEls = el.closest(".documentation-section")
      .querySelectorAll(".test");

    let count = testEls.length;
    let ok = 0;
    let bug = 0;

    testEls.forEach((testEl) => {
      if (testEl.dataset.testStatus === "ok") {
        ok += 1;
      } else {
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

    // if (bug > 0) {
    //   el.dataset.testStatus = "bug";
    //   el.innerHTML = "bug";
    // } else if (ok === 0 && bug === 0) {
    //   el.dataset.testStatus = "todo";
    //   el.innerHTML = "todo";
    // } else {
    //   el.dataset.testStatus = "ok";
    //   el.innerHTML = "ok";
    // }

    // .forEach((testEl) => {
    //   console.log(testEl);
    // });

    // if (parent.dataset.testOverview === "bug") {
    //   el.dataset.testStatus = "bug";
    //   el.innerHTML = "bug";
    // } else {
    //   el.dataset.testStatus = "ok";
    //   el.innerHTML = "ok";
    // }
  }

  // updateSectionResults(_, el) {
  //   let ok = 0;
  //   let bug = 0;
  //   [...el.querySelectorAll("[data-bug]")].forEach((testEl) => {
  //     if (testEl.dataset.bug) {
  //       bug += parseInt(testEl.dataset.bug, 10);
  //     }
  //     if (testEl.dataset.ok) {
  //       bug += parseInt(testEl.dataset.ok, 10);
  //     }
  //   });
  //   // ) {
  //   //   el.dataset.testOverview = "bug";
  //   // } else {
  //   //   el.dataset.testOverview = "ok";
  //   // }
  //   //   // TODO: Update this to use el.propAsInt("ok")
  //   //   // when .propAsInt() is done.
  //   //   const parent = el.closest(".documentation-section");
  //   //   if (parent.dataset.bug !== "0") {
  //   //     el.dataset.testStatus = "bug";
  //   //     el.innerHTML = `bug`;
  //   //   } else {
  //   //     el.dataset.testStatus = "ok";
  //   //     el.innerHTML = `ok`;
  //   //   }
  // }

  updateIndividualTest(_, el) {
    const testEls = el.querySelectorAll(".test")
      .forEach((testEl) => {
        if (testEl.innerHTML.trim() === "ok") {
          testEl.dataset.testStatus = "ok";
        } else {
          testEl.dataset.testStatus = "bug";
        }
      });

    // const ok = [...el.querySelectorAll(".test")].filter((testEl) => {
    //   return testEl.innerHTML.trim() === "ok";
    // }).map((testEl) => {
    //   testEl.dataset.testStatus = "ok";
    //   return testEl;
    // }).length;
    // el.dataset.ok = ok;
    // const bug = [...el.querySelectorAll(".test")].filter((testEl) => {
    //   return testEl.innerHTML.trim() !== "ok";
    // }).map((testEl) => {
    //   testEl.dataset.testStatus = "bug";
    //   return testEl;
    // }).length;
    // el.dataset.bug = bug;
  }
}
