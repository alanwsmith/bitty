export const b = { init: "initDocTests" };

let config;

export function initDocTests(_, __, el) {
  config = b.loadPage("config", {
    autorun: false,
    runErrors: true,
  });
  el.replaceChildren(b.switch({
    __APPEND__: "Autorun tests",
    __SEND__: "switchAutorun",
    __STATE__: `${config.autorun}`,
  }));
  el.appendChild(b.switch({
    __APPEND__: "Run intentional console error tests",
    __SEND__: "switchRunErrors",
    __STATE__: `${config.runErrors}`,
  }));
  if (config.autorun === true) {
    b.trigger("runTests");
  }
}

export function switchRunErrors(_, sender, ___) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  config.runErrors = sender.ariaBool("checked");
  b.savePage("config", config);
}

export function switchAutorun(_, sender, ___) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  config.autorun = sender.ariaBool("checked");
  b.savePage("config", config);
}

const levels = ["pass", "todo", "fail"];

let testsAreRunning = false;

export function testControls(_, __, el) {
  el.replaceChildren(b.render("controls"));
  const testTrigger = b.loadPage("autorun", { doIt: false });
}

// Reminder: set data-test-status="-1"
// to indicate manual tests.

export async function runTests(_, __, el) {
  if (testsAreRunning === true) {
    return;
  }
  testsAreRunning = true;
  el.innerHTML = "... Running ...";
  await b.sleep(800);
  b.trigger("runTest");
  if (config.runErrors === true) {
    b.trigger("runTestWithErrors");
  }
  await b.sleep(2000);
  testItems();
  el.innerHTML = "Run Tests";
  testsAreRunning = false;
}

function getResults(exampleWrapper) {
  const results = b.qsa("[data-test-status]", exampleWrapper);
  let level = 1;
  if (results.length > 0) {
    level = 0;
    [...results].map((result) => {
      let num = parseInt(result.dataset.testStatus, 10);
      if (Number.isNaN(num) === true) {
        return 1;
      } else {
        return num;
      }
    }).forEach((result) => {
      if (result === -1) {
        level = -1;
      } else {
        level = Math.max(level, result);
      }
    });
  }
  const exampleStatus = b.qs(".example-status", exampleWrapper);
  if (level === -1) {
    exampleStatus.innerHTML = `[manual]`;
  } else {
    exampleStatus.innerHTML = `[${levels[level]}]`;
  }
  exampleStatus.dataset.testStatus = level;
  return level;
}

function testItem(itemWrapper) {
  const examples = b.qsa(".example-wrapper", itemWrapper);
  const results = [...examples].map((exampleWrapper) => {
    return getResults(exampleWrapper);
  });
  const itemStatus = b.qs(".item-status", itemWrapper);
  if (results.length === 0) {
    itemStatus.innerHTML = `[${levels[1]}]`;
    itemStatus.dataset.testStatus = 1;
  } else {
    const level = Math.max(...results);
    if (level === -1) {
      itemStatus.innerHTML = `[manual]`;
    } else {
      itemStatus.innerHTML = `[${levels[level]}]`;
    }
    itemStatus.dataset.testStatus = level;
  }
}

function testItems() {
  const soloTests = b.qsa("[data-solo]");
  if (soloTests.length > 0) {
    for (const soloTest of soloTests) {
      testItem(soloTest.closest(".item-wrapper"));
    }
  } else {
    const itemWrappers = b.qsa(".item-wrapper");
    itemWrappers.forEach((itemWrapper) => {
      testItem(itemWrapper);
    });
  }
}
