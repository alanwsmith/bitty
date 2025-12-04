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
      `Make 1000 elements with this.api.makeElement('<span>x </span>') and append them one at a time with .appendChild()`,
    prep: `<div data-receive="test0010run">
<button data-send="test0010send">Test Trigger</button>
<div data-receive="test0010send"></div>
</div>`,
    template: `<span>x </span>`,
  },

  test0020: {
    description:
      `Make 1000 elements in one go with this.api.makeHTML(TEMPLATE) and append them all at the same time with .appendChild()`,
    prep: `<div data-receive="test0020run">
<button data-send="test0020send">Test Trigger</button>
<div data-receive="test0020send"></div>
</div>`,
  },

  test0030: {
    description: `[@ file @] - One top level bitty element `,
    prep: `<bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]>

</bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]>
`,
  },
};

class Report {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }
}

window.TestRunner = class {
  #currentTestIndex = -1;
  #reports = [];

  async bittyReady() {
    this.api.trigger("runTest");
  }

  runTest(_, el) {
    const template = [
      `<bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]
data-connect="test0010Class"
>`,
    ];
    template.push(tests["test0010"].prep);
    template.push(
      `</bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]>`,
    );
    const payload = template.join("\n");
    console.log(payload);
    const testUnderTest = this.api.makeElement(template.join(""));
    document.querySelector(".testArea").replaceChildren(testUnderTest);
    testUnderTest.querySelector("button").click();
  }

  // async runTest(_, el) {
  //   await sleep(400);
  //   this.#currentTestIndex += 1;
  //   if (Object.keys(tests).length === this.#currentTestIndex) {
  //     el.innerHTML = "this is the report";
  //     for (const key of Object.keys(tests)) {
  //       performance.measure(
  //         `${key}-duration`,
  //         `${key}-start`,
  //         `${key}-end`,
  //       );
  //       const entry = performance.getEntriesByName(`${key}-duration`);
  //       const subs = [
  //         ["TITLE", key],
  //         ["DESCRIPTION", tests[key].description],
  //         ["DURATION", Math.round(entry[0].duration)],
  //       ];
  //       el.appendChild(this.api.makeHTML(templates.reportItem, subs));
  //     }
  //   } else {
  //     const currentTest = Object.keys(tests)[this.#currentTestIndex];
  //     el.replaceChildren(this.api.makeElement(
  //       tests[currentTest].prep,
  //     ));
  //     this.api.trigger(
  //       `${currentTest}prep`,
  //     );
  //   }
  // }

  // markStart() {
  //   const currentTest = Object.keys(tests)[this.#currentTestIndex];
  //   performance.mark(`${currentTest}-start`);
  // }

  // markEnd() {
  //   const currentTest = Object.keys(tests)[this.#currentTestIndex];
  //   performance.mark(`${currentTest}-end`);
  // }

  // test0010prep(_, el) {
  //   this.api.trigger("test0010run");
  // }

  // test0010run(_, el) {
  //   this.markStart();
  //   el.querySelector("button").click();
  // }

  // test0010send(_, el) {
  //   [...Array(1000)].forEach((_, index) => {
  //     el.appendChild(this.api.makeElement(tests.test0010.template));
  //   });
  //   this.markEnd();
  //   this.api.trigger("runTest");
  // }

  // test0020prep(_, el) {
  //   this.api.trigger("test0020run");
  // }

  // test0020run(_, el) {
  //   el.querySelector("button").click();
  // }

  // test0020send(_, el) {
  //   const template = [`<div>`];
  //   [...Array(1000)].forEach((_, index) => {
  //     template.push(`<span>x </span>`);
  //   });
  //   template.push(`</div>`);
  //   const incoming = template.join("");
  //   this.markStart();
  //   el.replaceChildren(this.api.makeHTML(incoming));
  //   this.markEnd();
  //   this.api.trigger("runTest");
  // }

  // test0030prep(_, el) {
  //   console.log(tests["test0030"].prep);
  //   this.api.trigger("test0030run");
  // }

  // test0030run(_, el) {
  //   this.markStart();
  //   this.markEnd();
  //   this.api.trigger("runTest");
  // }

  //
};

window.test0010Class = class {
};

window.test0020Class = class {
};

window.test0030Class = class {
};
