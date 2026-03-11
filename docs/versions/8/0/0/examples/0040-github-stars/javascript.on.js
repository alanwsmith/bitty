export const b = { init: "stars" };

const url = "https://api.github.com/repos/alanwsmith/bitty";

export async function stars(_, __, el) {
  const data = await b.loadData(url);
  if (data === undefined) {
    el.innerHTML = "could not get api data";
  } else {
    el.innerHTML = data.stargazers_count;
  }
}