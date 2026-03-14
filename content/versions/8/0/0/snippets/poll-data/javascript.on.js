export const b = { init: "art" };

export async function art(_, __, el) {
  const url = `/data/met/${b.randomInt(1, 10)}.json`;
  const data = await b.get(url);
  if (data) {
    el.replaceChildren(object(data));
  } else {
    el.innerHTML = "Error: Could not fetch art data";
  }
  await b.sleep(3000);
  b.trigger("art");
}

export function object(data) {
  return b.render("object", {
    __TITLE__: data.title,
    __IMG_SRC__: data.primaryImage,
    __ALT__:
      `A photo of a piece entitled '${data.title}' from The Met's online gallery.`,
  });
}
