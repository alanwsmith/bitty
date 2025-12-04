function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const templates = {
  reportItem: `<div>
  <h4>TITLE</h4>
  <div>DESCRIPTION</div>
  <div>Duration: DURATION</div>
</div>`,
};

const tests = {
  test0010: {
    description:
      `Make 1000 element with this.api.makeElement and append them one at a time with .appendChild()`,
    template: `<div data-receive="test0010run">
<button data-send="test0010send">Test Trigger</button>
<div data-receive="test0010send"></div>
</div>`,
    output: `<span>x </span>`,
  },
};

class Report {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }
}

window.StressTest0010 = class {
  #currentTestIndex = -1;
  #reports = [];

  async bittyReady() {
    await sleep(300);
    this.api.trigger("runTest");
  }

  async report(_, el) {
    await sleep(300);
    el.innerHTML = "this is the report";
    for (const key of Object.keys(tests)) {
      performance.measure(
        `${key}-duration`,
        `${key}-start`,
        `${key}-end`,
      );
      const entry = performance.getEntriesByName(`${key}-duration`);
      console.log(entry);
      const subs = [
        ["TITLE", key],
        ["DESCRIPTION", tests[key].description],
        ["DURATION", Math.round(entry[0].duration)],
      ];
      el.appendChild(this.api.makeHTML(templates.reportItem, subs));
    }
  }

  runTest(_, el) {
    this.#currentTestIndex += 1;
    if (Object.keys(tests).length === this.#currentTestIndex) {
      this.api.trigger("report");
      console.log("run report");
    } else {
      const currentTest = Object.keys(tests)[this.#currentTestIndex];
      el.replaceChildren(this.api.makeElement(
        tests[currentTest].template,
      ));
      this.api.trigger(
        `${currentTest}prep`,
      );
    }
  }

  markStart() {
    const currentTest = Object.keys(tests)[this.#currentTestIndex];
    performance.mark(`${currentTest}-start`);
  }

  markEnd() {
    const currentTest = Object.keys(tests)[this.#currentTestIndex];
    performance.mark(`${currentTest}-end`);
  }

  test0010prep(_, el) {
    this.api.trigger("test0010run");
  }

  test0010run(_, el) {
    this.markStart();
    el.querySelector("button").click();
  }

  test0010send(_, el) {
    [...Array(1000)].forEach((_, index) => {
      el.appendChild(this.api.makeElement(tests.test0010.output));
    });
    this.markEnd();
    this.api.trigger("runTest");

    //performance.mark("test0010-finished");
    //performance.measure(
    //  "test0010-duration",
    //  "test0010-start",
    //  "test0010-finished",
    //);
    ////const entries = performance.getEntries();
    //console.log(entries);
  }

  // async test0010(_, el) {
  //   await sleep(100);
  //   el.querySelector("button").click();
  // }

  //
};
