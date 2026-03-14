export const b = { init: "toc" };

const url = `/[@ [file.parent, "content/"]|join("/") @]`;

export async function content(_, __, el) {
  if (await b.getTemplates(url)) {
    el.appendChild(b.render("content"));
    b.trigger("toc");
  }
}

function addLevel(heading, level, el) {
  if (level === 0) {
    const linkString = encodeURI(heading.innerText.trim().toLowerCase());
    const li = b.ce("li");
    li.innerHTML = `<a href="#${linkString}">${heading.innerText.trim()}</a>`;
    heading.id = linkString;
    el.appendChild(li);
  } else {
    let uls = b.qsa("li ul", el);
    if (uls.length === 0) {
      const ul = b.ce("ul");
      el.appendChild(ul);
      addLevel(heading, level - 1, ul);
    } else {
      addLevel(heading, level - 1, uls[uls.length - 1]);
    }
  }
}

export function toc(_, __, el) {
  const root = b.ce("ul");
  const contentEl = b.qs(".content");
  const headings = b.qsa("h2, h3, h4, h5, h6", contentEl);
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.replace("H", "")) - 2;
    addLevel(heading, level, root);
  });
  el.replaceChildren(root);
}
