export const bitty = {};

export async function runTests() {
  await bitty.sleep(800);
  testItems();
}

const levels = ["pass", "todo", "fail"];

function getResults(exampleWrapper) {
  const results = bitty.qsa(".example", exampleWrapper);
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
      level = Math.max(level, result);
    });
  }
  const exampleStatus = bitty.qs(".example-status", exampleWrapper);
  exampleStatus.innerHTML = `[${levels[level]}]`;
  exampleStatus.dataset.testStatus = levels[level];
  return level;
}

function testItem(itemWrapper) {
  const examples = bitty.qsa(".example-wrapper", itemWrapper);
  const results = [...examples].map((exampleWrapper) => {
    return getResults(exampleWrapper);
  });
  const itemStatus = bitty.qs(".item-status", itemWrapper);
  if (results.length === 0) {
    itemStatus.innerHTML = `[${levels[1]}]`;
    itemStatus.dataset.testStatus = levels[1];
  } else {
    const level = Math.max(...results);
    itemStatus.innerHTML = `[${levels[level]}]`;
    itemStatus.dataset.testStatus = levels[level];
  }
}

function testItems() {
  const itemWrappers = bitty.qsa(".item-wrapper");
  itemWrappers.forEach((itemWrapper) => {
    testItem(itemWrapper);
  });
}
