let currentTest = null;

let testCounter = null;

const bittyTagName =
  `bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]`;

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
      `Make 1,000 elements with this.api.makeElement('<span>x </span>') and append them one at a time with .appendChild()`,
    prep: ``,
    template: `<span>x </span>`,
  },

  test0020: {
    description:
      `Make 1,000 elements in one go with this.api.makeHTML(TEMPLATE) and append them all at the same time with .appendChild()`,
    prep: ``,
  },

  test0030: {
    description:
      `One top level bitty element that sends a signal to 1,000 data-receive elements`,
    prep: ``,
  },

  test0040: {
    description:
      `One top level bitty element that sends a signal to 10,000 data-receive elements`,
    prep: ``,
  },

  test0050: {
    description:
      `Add 1,000 bitty elements to a page inside a single document fragment`,
    prep: ``,
  },

  test0060: {
    description:
      `Add 10,000 bitty elements to a page inside a single document fragment`,
    prep: ``,
  },

  test0070: {
    description:
      `Have 10,000 bitty elements on the page with the same 'data-reveice="incoming"' receive a signal`,
    prep: ``,
  },

  test0080: {
    description:
      `Comparison tests, 10,000 elements updates via .querySelector() instead of via bitty.`,
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
    await sleep(1000);
    this.#currentTestIndex += 1;
    if (Object.keys(tests).length === this.#currentTestIndex) {
      document.querySelector(".testArea").replaceChildren();
      el.innerHTML = "this is the report";
      for (const key of Object.keys(tests).reverse()) {
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
      // Clear first to make sure there's no cruft from prior tests
      document.querySelector(".testArea").replaceChildren();
      currentTest = Object.keys(tests)[this.#currentTestIndex];
      console.log(currentTest);
      const template = [
        `<bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]
data-connect="${currentTest}Class">
    <div data-receive="testBed">`,
      ];
      template.push(tests[currentTest].prep);
      template.push(
        `</div></bitty-[@ file.folder_parts[1] @]-[@ file.folder_parts[2] @]>`,
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
  #counter = 0;
  #totalEls = 1000;

  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    const trigger = this.api.makeElement(
      `<button data-send="testTrigger">Trigger Test</button>`,
    );
    el.replaceChildren(trigger);
    const payload = [];
    [...Array(this.#totalEls)].forEach((_, index) => {
      payload.push(`<span data-receive="testTrigger">l </span>`);
    });
    const content = this.api.makeHTML(payload.join(""));
    el.appendChild(content);
    markStart();
    trigger.click();
  }

  testTrigger(_, el) {
    el.innerHTML = "q ";
    this.#counter += 1;
    if (this.#counter === this.#totalEls) {
      markEnd();
      this.api.trigger("testReporter");
    }
  }
};

window.test0040Class = class {
  #counter = 0;
  #totalEls = 10000;

  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    const trigger = this.api.makeElement(
      `<button data-send="testTrigger">Trigger Test</button>`,
    );
    el.replaceChildren(trigger);
    const payload = [];
    [...Array(this.#totalEls)].forEach((_, index) => {
      payload.push(`<span data-receive="testTrigger">- </span>`);
    });
    const content = this.api.makeHTML(payload.join(""));
    el.appendChild(content);
    markStart();
    trigger.click();
  }

  testTrigger(_, el) {
    el.innerHTML = "t ";
    this.#counter += 1;
    if (this.#counter === this.#totalEls) {
      markEnd();
      this.api.trigger("testReporter");
    }
  }
};

window.test0050Alfa = class {
};

window.test0050Class = class {
  #counter = 0;
  #totalEls = 1000;

  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    const payload = [];
    [...Array(this.#totalEls)].forEach((_, index) => {
      payload.push(
        `<${bittyTagName} data-connect="${currentTest}Alfa">8 </${bittyTagName}>`,
      );
    });
    markStart();
    const content = this.api.makeHTML(payload.join(""));
    el.appendChild(content);
    markEnd();
    this.api.trigger("testReporter");
  }
};

window.test0060Alfa = class {
};

window.test0060Class = class {
  #counter = 0;
  #totalEls = 10000;

  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    const payload = [];
    [...Array(this.#totalEls)].forEach((_, index) => {
      payload.push(
        `<${bittyTagName} data-connect="${currentTest}Alfa">9 </${bittyTagName}>`,
      );
    });
    markStart();
    const content = this.api.makeHTML(payload.join(""));
    el.appendChild(content);
    markEnd();
    this.api.trigger("testReporter");
  }
};

window.test0070Alfa = class {
};

window.test0070Class = class {
  #counter = 0;
  #totalEls = 10000;

  bittyReady() {
    console.log(`${currentTest} - starting`);
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    testCounter = 0;
    const trigger = this.api.makeElement(
      `<button data-send="test0070Trigger">Trigger Test</button>`,
    );
    el.replaceChildren(trigger);
    const payload = [];
    [...Array(this.#totalEls)].forEach((_, index) => {
      payload.push(
        `<${bittyTagName} data-connect="${currentTest}Alfa">
<span data-receive="test0070Trigger">i </span>
</${bittyTagName}>`,
      );
    });
    console.log(`${currentTest} - adding bitty elements`);
    const content = this.api.makeHTML(payload.join(""));
    el.appendChild(content);
    markStart();
    console.log(`${currentTest} - triggering`);
    trigger.click();
  }

  test0070Trigger(_, el) {
    el.innerHTML = `. `;
    testCounter += 1;
    if (testCounter === this.#totalEls) {
      this.api.localTrigger("test0070Done");
    }
  }

  test0070Done(_, el) {
    console.log(`${currentTest} - done`);
    markEnd();
    // this.api.trigger("testReporter");
  }
};

window.test0080Class = class {
  #counter = 0;
  #totalEls = 10000;

  bittyReady() {
    this.api.localTrigger("testBed");
  }

  testBed(_, el) {
    testCounter = 0;
    const trigger = this.api.makeElement(
      `<button>Trigger Test ${currentTest}</button>`,
    );
    el.replaceChildren(trigger);
    // const payload = [];
    // [...Array(this.#totalEls)].forEach((_, index) => {
    //   payload.push(
    //     `<${bittyTagName} data-connect="${currentTest}Alfa">
    // <span data-receive="test0070Trigger">i </span>
    // </${bittyTagName}>`,
    //   );
    // });
    // const content = this.api.makeHTML(payload.join(""));
    // el.appendChild(content);
    // markStart();
    // trigger.click();
  }

  // test0070Trigger(_, el) {
  //   testCounter += 1;
  //   el.innerHTML = `${testCounter} `;
  //   if (testCounter === this.#totalEls) {
  //     this.api.localTrigger("test0070Done");
  //   }
  // }

  // test0070Done(_, el) {
  //   markEnd();
  //   this.api.trigger("testReporter");
  // }
};
