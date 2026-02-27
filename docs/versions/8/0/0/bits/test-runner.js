export const bitty = {};

export async function runTests() {
  await bitty.sleep(700);
  testItems();
}

const levels = ["pass", "todo", "fail"];

function getResults(exampleWrapper) {
  const results = bitty.qsa(".example", exampleWrapper);
  const exampleStatus = bitty.qs(".example-status", exampleWrapper);
  if (results.length > 0) {
    const level = [...results]
      .map((result) => {
        return parseInt(result.dataset.testStatus, 10);
      })
      .reduce((acc, cur) => Math.max(acc, cur), 0);
    exampleStatus.innerHTML = `[${levels[level]}]`;
    exampleStatus.dataset.testStatus = levels[level];
    return level;
  } else {
    exampleStatus.innerHTML = `[${levels[1]}]`;
    exampleStatus.dataset.testStatus = levels[1];
    return 1;
  }

  // const passed = [...results]
  //   .map((result) => {
  //     return result.dataset.testStatus;
  //   })
  //   .every((
  //     result,
  //   ) => result === "ok") === true;
  // if (passed === true) {
  //   exampleStatus.innerHTML = "[pass]";
  //   exampleStatus.dataset.testStatus = "ok";
  //   return 0;
  // } else {
  //   exampleStatus.innerHTML = "[fail]";
  //   exampleStatus.dataset.testStatus = "issue";
  //   return 2;
  // }
  // } else {
  // exampleStatus.innerHTML = "[todo]";
  // exampleStatus.dataset.testStatus = "todo";
  // return 1;
  // }
}

function testItem(itemWrapper) {
  const examples = bitty.qsa(".example-wrapper", itemWrapper);

  const results = [...examples].map((exampleWrapper) => {
    return getResults(exampleWrapper);
  });

  const itemStatus = bitty.qs(".item-status", itemWrapper);

  if (Math.max(...results) === 0) {
    itemStatus.innerHTML = "[pass]";
    itemStatus.dataset.testStatus = "pass";
  } else if (Math.max(...results) === 1) {
    itemStatus.innerHTML = "[todo]";
    itemStatus.dataset.testStatus = "todo";
  }

  // console.log(results);

  // examples.forEach((exampleWrapper) => {
  //   getResults(exampleWrapper);
  // });
}

function testItems() {
  const itemWrappers = bitty.qsa(".item-wrapper");
  itemWrappers.forEach((itemWrapper) => {
    testItem(itemWrapper);
  });
}
