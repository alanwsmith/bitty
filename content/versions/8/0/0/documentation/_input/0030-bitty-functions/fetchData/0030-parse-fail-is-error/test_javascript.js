export const b = {};

export async function $_SIGNAL_(ev, sender, el) {
  console.warn(
    "EXPECTED ERROR $_TEST_ID_: The JSON parsing error for this test is expected. It confirms an error is raised if the JSON can't be parsed.",
  );
  const response = await b.fetchData("$_SAMPLES_DIR_/invalid-json.xjson");
  if (response === undefined) {
    el.innerHTML = b.time();
  }
}
