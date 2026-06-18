export const b = { init: "art" };

export async function art(_, __, el) {
  const dataId = b.randomInt(1, 10);
  const url = `/data/met/${dataId}.json`;
  const data = await b.getData(url);
  if (data) {
    el.replaceChildren(artObject(data));
  } else {
    el.innerHTML = "Error: Could not fetch art data";
  }
  await b.sleep(3000);
  b.trigger("art");
}

export function artObject(data) {
  const subs = {
    __TITLE__: data.title,
    __IMG_SRC__: data.primaryImage,
    __ALT__:
      `A photo of a piece entitled '${data.title}' from The Met's online gallery.`,
  };
  return b.render("artObject", subs);
}