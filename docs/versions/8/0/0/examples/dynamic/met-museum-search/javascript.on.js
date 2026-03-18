export const b = {};

const searchURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=";

const itemURL =
  `https://collectionapi.metmuseum.org/public/collection/v1/objects`;

let data;

export async function images(_, __, el) {
  el.replaceChildren();
  for (let i = 0; i < Math.min(10, data.objectIDs.length); i += 1) {
    const item = await b.get(`${itemURL}/${data.objectIDs[i]}`);
    if (item && item.primaryImage) {
      const subs = {
        __IMG_SRC__: item.primaryImage,
        __TITLE__: `${item.title} - ${item.medium}`,
        __URL__: item.objectURL,
      };
      el.appendChild(b.render("image", subs));
    }
  }
}

export function searchError(_, __, el) {
  el.innerHTML = "Something went wrong with the search.";
}

export async function query(ev, __, el) {
  ev.preventDefault();
  data = await b.get(`${searchURL}${encodeURI(el.val())}`);
  if (data === undefined) {
    b.trigger("searchError");
  } else {
    b.shuffle(data.objectIDs);
    b.trigger("images");
  }
}