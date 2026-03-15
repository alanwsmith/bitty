export const b = {};

const searchURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=";

const objectURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

let data;

export async function images(_, __, el) {
  el.innerHTML = "";
  b.shuffle(data.objectIDs);
  for (let i = 0; i < 5; i += 1) {
    if (data.objectIDs[i]) {
      const id = data.objectIDs[i];
      const item = await b.get(`${objectURL}${id}`);
      if (item !== undefined) {
        console.log(`Image: ${item.primaryImage}`);
        console.log(item);
        el.appendChild(
          b.render("image", {
            __ID__: `${id}`,
            __IMG_SRC__: item.primaryImage,
            __TITLE__: `${item.title} - ${item.medium}`,
          }),
        );
      }
    }
  }
}

export function searchError(_, __, el) {
  el.innerHTML = "Something went wrong with the search.";
}

export async function query(_, sender, el) {
  data = await b.get(`${searchURL}${sender.val}`);
  sender.value = "";
  if (data === undefined) {
    b.trigger("searchError");
  } else {
    b.trigger("images");
  }
}