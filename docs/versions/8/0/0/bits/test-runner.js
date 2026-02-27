export const bitty = {};

export async function runTests() {
  await bitty.sleep(700);
  testItems();
}

function getResults(exampleWrapper) {
  const results = bitty.qsa(".example", exampleWrapper);
  const exampleStatus = bitty.qs(".example-status", exampleWrapper);
  if (results.length > 0) {
    const passed = [...results]
      .map((result) => {
        return result.dataset.testStatus;
      })
      .every((
        result,
      ) => result === "ok") === true;
    if (passed === true) {
      exampleStatus.innerHTML = "ok";
      exampleStatus.dataset.testStatus = "ok";
    } else {
      exampleStatus.innerHTML = "issue";
      exampleStatus.dataset.testStatus = "issue";
    }
  }
}

function testItem(itemWrapper) {
  const examples = bitty.qsa(".example-wrapper", itemWrapper);
  examples.forEach((exampleWrapper) => {
    getResults(exampleWrapper);
  });
}

function testItems() {
  const itemWrappers = bitty.qsa(".item-wrapper");
  itemWrappers.forEach((itemWrapper) => {
    testItem(itemWrapper);
  });
}
