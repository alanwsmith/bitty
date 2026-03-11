export const b = {
  init: "stars",
};

export async function stars(_, __, el) {
  const data = await b.loadData(
    "https://api.github.com/repos/alanwsmith/bitty",
  );
  if (data === undefined) {
    el.innerHTML = "could not get api data";
  } else {
    el.innerHTML = data.stargazers_count;
  }
}