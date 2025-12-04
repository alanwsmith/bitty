let currentTest = null;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function markStart() {
  performance.mark(`${currentTest}-start`);
}

function markEnd() {
  performance.mark(`${currentTest}-end`);
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
    prep: ``,
    template: `<span>x </span>`,
  },

  test0020: {
    description:
      `Make 1000 elements in one go with this.api.makeHTML(TEMPLATE) and append them all at the same time with .appendChild()`,
    prep: ``,
  },

  test0030: {
    description:
      `One top level bitty element that sends a signal to 1000 data-receive elements`,
    prep: ``,
  },
};

window.TestRunner = class {
  #currentTestIndex = -1;
  #reports = [];

  async bittyReady() {
    this.api.trigger("testReporter");
  }

  async testReporter(_, el) {
    await sleep(800);
    this.#currentTestIndex += 1;
    if (Object.keys(tests).length === this.#currentTestIndex) {
      document.querySelector(".testArea").replaceChildren();
      el.innerHTML = "this is the report";
      for (const key of Object.keys(tests)) {
        performance.measure(
          `${key}-duration`,
          `${key}-start`,
          `${key}-end`,
        );
        const entry = performance.getEntriesByName(`${key}-duration`);
        const subs = [
          ["TITLE", key],
          ["DESCRIPTION", tests[key].description],
          ["DURATION", Math.round(entry[0].duration)],
        ];
        el.appendChild(this.api.makeHTML(templates.reportItem, subs));
      }
    } else {
      currentTest = Object.keys(tests)[this.#currentTestIndex];
      const template = [
        `<bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]
data-connect="${currentTest}Class">
    <div data-receive="testBed"></div>`,
      ];
      template.push(tests[currentTest].prep);
      template.push(
        `</bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]>`,
      );
      const payload = template.join("\n");
      const testUnderTest = this.api.makeElement(payload);
      document.querySelector(".testArea").replaceChildren(testUnderTest);
    }
  }
};

window.test0010Class = class {
  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    markStart();
    [...Array(1000)].forEach((_, index) => {
      el.appendChild(this.api.makeElement(tests.test0010.template));
    });
    markEnd();
    this.api.trigger("testReporter");
  }
};

window.test0020Class = class {
  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    const template = [`<div>`];
    [...Array(1000)].forEach((_, index) => {
      template.push(`<span>y </span>`);
    });
    template.push(`</div>`);
    const incoming = template.join("");
    markStart();
    el.replaceChildren(this.api.makeHTML(incoming));
    markEnd();
    this.api.trigger("testReporter");
  }
};

window.test0030Class = class {
  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    markStart();
    this.api.trigger("testReporter");
    markEnd();
  }
};
