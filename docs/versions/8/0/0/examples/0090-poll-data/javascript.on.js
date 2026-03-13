export const b = { init: "loop" };

let data;

const baseURL = "/data/met";

export async function loop() {
  for (let count = 1; count > 0; count += 1) {
    b.send(count, "art");
    await b.sleep(2400);
  }
}

export async function art(count, __, el) {
  console.log("HERE1");
  const url = `${baseURL}/${count % 10}.json`;
  const data = await b.loadData(url);
  if (data) {
    console.log(data);
    el.replaceChildren(object(data));
  } else {
    console.error("getting object failed");
  }
}

export function object(data) {
  console.log(data);
  return b.render("object", {
    __TITLE__: data.title,
    __IMG_SRC__: data.primaryImage,
    __ALT__: data.title,
  });
}

// export async function art(_, __, el) {
//   for (let oid = 20; oid < 40; oid += 1) {
//     await b.sleep(200);
//     el.appendChild(await getObject(data.objectIDs[oid]));
//   }
// }

export function artError(_, __, el) {
  el.innerHTML = "Error: Could not fetch art data";
}

// export async function getObject(id) {
//   const object = await b.loadData(`${objectURL}/${id}`);
//   if (object !== undefined) {
//     console.log(object);
//     return b.render("object", {
//       "__ID__": `${object.objectID}`,
//       "__IMG_SRC__": object.primaryImage,
//     });
//   }
// }