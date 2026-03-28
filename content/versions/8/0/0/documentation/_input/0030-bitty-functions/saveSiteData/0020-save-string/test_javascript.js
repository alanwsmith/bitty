export const b = {};

export async function $_SIGNAL_(ev, sender, el) {
  const result = await b.saveSiteData("bravo", "$_TEST_ID_");
  const data = await b.loadSiteData("$_TEST_ID_");
  if (result === "$_TEST_ID_" && data === "bravo") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "data did not save properly";
  }
}
