export const b = { init: "init" };

let data;

const searchURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=dragon";

const objectURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects";

export async function init() {
  data = await b.loadData(searchURL);
  if (data === undefined) {
    b.trigger("artError");
  } else {
    b.trigger("art");
  }
}

export async function art(_, __, el) {
  for (let oid = 20; oid < 40; oid += 1) {
    await b.sleep(200);
    el.appendChild(await getObject(data.objectIDs[oid]));
  }
}

export function artError(_, __, el) {
  el.innerHTML = "Error: Could not fetch art data";
}

export async function getObject(id) {
  const object = await b.loadData(`${objectURL}/${id}`);
  if (object !== undefined) {
    console.log(object);
    return b.render("object", {
      "__ID__": `${object.objectID}`,
      "__IMG_SRC__": object.primaryImage,
    });
  }
}