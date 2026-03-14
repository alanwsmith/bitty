export const b = { init: "content" };

const url = `/versions/8/0/0/examples/0120-table-of-contents/content/`;

export async function content(_, __, el) {
  if (await b.getTemplates(url)) {
    el.appendChild(b.render("content"));
    b.trigger("toc");
  }
}

// function getHeadings(level, el) {
//   const children = b.tee(
//     [...b.qsa(`h${level}`, el)].map((heading) => {
//       const headingLi = b.ce("li");
//       headingLi.innerHTML = heading.innerHTML;
//       const nextLevel = level + 1;
//       console.log(heading);
//       const childHeadings = b.qsa(`h3`, heading);
//       console.log(childHeadings);
//       if (childHeadings.length > 0) {
//         console.log("asdf");
//       }
//       return headingLi;
//     }),
//   );
//   return children;
// }

// function headingLevel(el) {
//   return 0;
// }

function addItem(heading, level, array) {
  if (level === 0) {
    array.push({
      text: heading.innerText.trim(),
      children: [],
    });
  } else {
    addItem(heading, level - 1, array[array.length - 1].children);
  }
}

export function toc(_, __, el) {
  const root = b.ce("ul");
  const contentEl = b.qs("[data-r=content]");
  const headings = b.qsa("h2, h3, h4, h5, h6", contentEl);
  const structure = [];
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.replace("H", "")) - 2;
    addItem(heading, level, structure);
  });
  console.log(structure);

  //const level = parseInt(heading.tagName.replace("H", ""));
  //for (let i = level + 1; i <= 6; i += 1) {
  //  indexes[i] = 0;
  //}
  //if (level === 2) {
  //}
  ////console.log(heading);

  //});

  //    structure.push({ text: heading.innerText.trim(), children: [] });
  //console.log(level);

  // if (heading.nodeName === "H2") {
  //   structure.push({ text: heading.innerText.trim(), children: [] });
  // }
  // if (heading.nodeName === "H3") {
  //   structure[structure.length - 1].children.push({
  //     text: heading.innerText.trim(),
  //     children: [],
  //      });
  //}
  // if (heading.nodeName === "H4") {
  //   structure[structure.length - 1].children[

  //   ]
  //     text: heading.innerText.trim(),
  //     children: [],
  //   });
  //}

  // root.replaceChildren(
  //   ...getHeadings(2, b.qs("[data-r=content]")),
  // );
  // el.replaceChildren(root);

  // const children = b.tee(
  //   [...b.qsa("[data-r=content] > h2")].map((h2) => {
  //     const h2li = b.ce("li");
  //     h2li.innerHTML = h2.innerHTML;
  //     return h2li;
  //   }),
  // );
  // root.replaceChildren(...children);

  // root.replaceChildren(
  //   [...b.qsa(".wrapper > h2")].map((el) => {
  //     const li = b.ce("li");
  //     li.innerHTML = "asf";
  //     return li;
  //   }),
  // );

  // [...b.qsa(".wrapper > h2")].forEach((h2) => {
  // });
}