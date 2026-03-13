export const b = { init: "stars" };

const url = "https://api.github.com/repos/alanwsmith/bitty";

export async function stars(_, __, el) {
  const data = await b.get(url);
  if (data) {
    el.innerHTML = data.stargazers_count;
  } else {
    el.innerHTML = "could not get api data";
  }
}
