const version = [8, 0, 0];
const tagName = `bitty-${version[0]}-${version[1]}`;

/** internal */
function splitSignalString(input) {
  return input
    .trim()
    .split(/\s+/m)
    .map((l) => l.trim());
}

class BittyJs extends HTMLElement {
  constructor() {
    super();
  }

  #_logLevels = ["none", "error", "warn", "info", "debug", "trace"];
  #_logLevel = "warn";

  async connectedCallback() {
    await this.makeConnection();
    if (this.conn) {
      this.createBridges();
      this.ingestJSON();
      this.addEventListeners();
      await this.runBittyReady();
    }
  }

  // TODO: Deprecate this in favor of _createElement
  _addElement(key, input = null) {
    const storageKey = `bittyElement_${key}`;
    if (input === null) {
      return this.conn.addLog(
        "error",
        "addElement",
        false,
        `Attempted to make element with key ${key} but nothing was passed in to make it.`,
        null,
      );
    }
    if (
      typeof input !== "string" && input instanceof Element === false &&
      input instanceof DocumentFragment === false
    ) {
      return this.conn.addLog(
        "error",
        "addElement",
        false,
        `Attempted to make element with key '${key}' with invalid input (i.e. something other than a String, Element, or Document Fragment).`,
        null,
      );
    }
    const overwriteLevel = this.conn.element[key] !== undefined
      ? "warn"
      : "info";
    const overwriteNote = this.conn.element[key] !== undefined
      ? "Warning: overwrite existing key. "
      : "";
    if (input instanceof HTMLElement) {
      this.conn.element[key] = input;
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn.element[key].outerHTML }),
      );
      return this.conn.addLog(
        overwriteLevel,
        "addElement",
        true,
        `${overwriteNote}Added element with key ${key} from element.`,
        null,
      );
    } else if (input instanceof DocumentFragment) {
      if (input.firstChild === null) {
        return this.conn.addLog(
          "error",
          "addElement",
          false,
          `Tried to add element with ${key} from document fragment, but there was nothing in it.`,
          null,
        );
      } else {
        this.conn.element[key] = input.firstChild;
        localStorage.setItem(
          storageKey,
          JSON.stringify({ data: this.conn.element[key].outerHTML }),
        );
        if (input.childElementCount > 1) {
          return this.conn.addLog(
            "warn",
            "addElement",
            true,
            `Added the first document fragment element to key '${key}'. The fragment had more than one element in it. The rest were dropped.`,
            null,
          );
        } else {
          return this.conn.addLog(
            overwriteLevel,
            "addElement",
            true,
            `${overwriteNote}Added element with key ${key} from document fragment.`,
            null,
          );
        }
      }
    } else {
      const tmp = document.createElement("template");
      tmp.innerHTML = input;
      this.conn.element[key] = tmp.content.firstChild;
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn.element[key].outerHTML }),
      );
      return this.conn.addLog(
        overwriteLevel,
        "addElement",
        true,
        `${overwriteNote}Added element with key ${key} from string.`,
        null,
      );
    }
  }

  _createElement(key, content = null, options = {}) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      key: "createElement",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    if (key !== null && this.conn._element[key] !== undefined) {
      details.level = "warn";
      details.messages.push(
        `Warning: createElement overwrite an existing element with key '${key}'`,
      );
    }
    if (typeof content === "string") {
      this.conn._element[key] = content;
    } else if (content instanceof Element) {
      this.conn._element[key] = content.outerHTML;
    } else if (content instanceof DocumentFragment) {
      this.conn._element[key] = content.firstChild.outerHTML;
      if (content.childElementCount > 1) {
        details.level = "warn";
        details.messages.push(
          "Warning: A document fragment with more than one child element was used to create an element with .createElement. Only the first element was used. The rest were ignored",
        );
      }
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `Tried to create an element for key '${key}' from something other than a string, element, or document fragment which is not supported.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._element[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  _createFragment(key, content = null, options = {}) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      key: "createFragment",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    if (
      key !== null & this.conn._fragment[key] !== undefined
    ) {
      if (options.update === undefined || options.update === false) {
        details.level = "warn";
        details.messages.push(`Warning overwriting an existing key: '${key}'`);
      }
    }
    if (key === null) {
      details.ok = false;
      details.level = "error";
      details.messages.push(
        `this.createFragment(key, content) was called without 'key' and 'content' arguments.`,
      );
    } else if (content === null) {
      details.ok = false;
      details.level = "error";
      details.messages.push(
        `this.createFragment(key, content) was called without either a 'content' argument.`,
      );
    } else if (typeof content === "string") {
      this.conn._fragment[key] = content;
      details.messages.push(
        `Stored string as fragment with key ${key}.`,
      );
    } else if (content instanceof Element) {
      this.conn._fragment[key] = content.outerHTML;
      details.messages.push(
        `Stored element as fragment with key ${key}.`,
      );
    } else if (content instanceof DocumentFragment) {
      this.conn._fragment[key] = [...content.children].map((el) => el.outerHTML)
        .join("");
      details.messages.push(
        `Stored documnet fragment with key ${key}.`,
      );
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `Attempted to make a frament for key '${key}' out of something other than a String, Element, or Document Fragment`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._fragment[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  // TODO: Remove all the comments below
  // when all fragments stuff have been moved
  // to string storage.

  // if (this.conn.fragment[key] !== undefined) {
  //   details.level = "warn";
  //   details.messages.push(
  //     `Warning. createFragment overwrite an exsiting fragment with key '${key}'`,
  //   );
  // }

  // if (typeof content === "string") {
  //   const template = document.createElement("template");
  //   template.innerHTML = content;
  //   this.conn.fragment[key] = template.content;
  //   details.messages.push(`Added fragment with key '${key}'`);
  // } else if (
  //   content instanceof DocumentFragment
  // ) {
  //   this.conn.fragment[key] = content;
  //   details.messages.push(`Added fragment with key '${key}'`);
  // } else if (
  //   content instanceof Element
  // ) {
  //   const fragment = document.createDocumentFragment();
  //   fragment.appendChild(content);
  //   this.conn.fragment[key] = fragment;
  //   details.messages.push(`Added fragment with key '${key}'`);
  // } else {
  //   details.level = "error";
  //   details.ok = false;
  //   details.messages.push(
  //     `Could not add fragment for key '${key}'. The 'content' argument must be a String, Element, or Document Fragment.`,
  //   );
  // }

  // if (details.ok === true) {
  //   const storageKey = `bittyFragment_${key}`;
  //   localStorage.setItem(
  //     storageKey,
  //     JSON.stringify({
  //       data: [...this.conn.fragment[key].children].map((el) => {
  //         return el.outerHTML;
  //       }).join(""),
  //     }),
  //   );
  // }

  async _fetchElement(key, url, options = {}) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      key: "fetchElement",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this.conn._element[key] !== undefined) {
          details.level = "warn";
          details.messages.push(
            `Warning: fetch of ${url} overwrote existing element with key '${key}'`,
          );
        }
        const template = document.createElement("template");
        template.innerHTML = text;
        if (template.content.childElementCount > 1) {
          details.level = "warn";
          details.messages.push(
            `Warning: The got a document fragment with more than one element from ${url} while creating element with key ${key}. Only the first element was used. The others were dropped`,
          );
        }
        this.conn._element[key] = template.content.firstChild.outerHTML;
      } else {
        if (typeof fallback === "string") {
          this.conn._element[key] = fallback;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof Element) {
          this.conn._element[key] = fallback.outerHTML;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof DocumentFragment) {
          this.conn._element[key] = [...fallback.children].map((el) => {
            return el.outerHTML;
          }).join("");
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.messages.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._element[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  // let response = await fetch(url, options);
  // const logKey = "fetchElement";
  // const result = { level: "info" };
  // try {
  //   if (response.ok === true) {
  //     const body = await response.text();
  //     if (this.conn.element[key] !== undefined) {
  //       result.level = "warn";
  //     }
  //     const tmp = document.createElement("template");
  //     tmp.innerHTML = body;
  //     this.conn.element[key] = tmp.content.firstChild;
  //     localStorage.setItem(key, JSON.stringify({ data: body }));
  //     if (tmp.content.childElementCount > 1) {
  //       return this.conn.addLog(
  //         "warn",
  //         logKey,
  //         true,
  //         `Fetched Element from '${url}' and stored in key '${key}'. Warning: the incoming content was a document fragment with more than one element. Only the first one was ingested. The rest were ignored.`,
  //         null,
  //       );
  //     } else {
  //       return this.conn.addLog(
  //         result.level,
  //         logKey,
  //         true,
  //         `Fetched Element from '${url}' and stored in key '${key}'.`,
  //         null,
  //       );
  //     }
  //   } else {
  //     console.error(response);
  //     return this.conn.addLog(
  //       "error",
  //       logKey,
  //       false,
  //       `Error fetching JSON from '${url}' for key '${key}'`,
  //       {
  //         redirect: response.redirect,
  //         status: response.status,
  //         statusText: response.statusText,
  //         type: response.type,
  //         url: response.url,
  //       },
  //     );
  //   }
  // } catch (error) {
  //   return this.conn.addLog(
  //     "error",
  //     logKey,
  //     false,
  //     `Error fetching JSON from '${url}' for key '${key}'`,
  //     error,
  //   );
  // }

  async _fetchFragment(key, url, fallback = null, options = {}) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      key: "fetchFragment",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this.conn._fragment[key] !== undefined) {
          details.level = "warn";
          details.messages.push(
            `Warning: fetch of ${url} overwrote existing fragment with key '${key}'`,
          );
        }
        this.conn._fragment[key] = text;
      } else {
        if (typeof fallback === "string") {
          this.conn._fragment[key] = fallback;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof Element) {
          this.conn._fragment[key] = fallback.outerHTML;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof DocumentFragment) {
          this.conn._fragment[key] = [...fallback.children].map((el) => {
            return el.outerHTML;
          }).join("");
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.messages.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._fragment[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  async _fetchJSON(key, url, options = {}) {
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        const json = await response.json();
        if (this.conn.json[key] !== undefined) {
          this.conn.json[key] = json;
          return this.conn.addLog(
            "warn",
            "fetchJSON",
            true,
            `Overwrote existing key '${key}' with JSON fetched from '${url}'`,
            null,
          );
        } else {
          this.conn.json[key] = json;
          return this.conn.addLog(
            "info",
            "fetchJSON",
            true,
            `fetched JSON from '${url}' and stored in key '${key}'`,
            null,
          );
        }
      } else {
        console.error(response);
        return this.conn.addLog(
          "error",
          "fetchJSON",
          false,
          `Error fetching JSON from '${url}' for key '${key}'`,
          {
            redirect: response.redirect,
            status: response.status,
            statusText: response.statusText,
            type: response.type,
            url: response.url,
          },
        );
      }
    } catch (error) {
      return this.conn.addLog(
        "error",
        "fetchJSON",
        false,
        `Error fetching JSON from '${url}' for key '${key}'`,
        error.toString(),
      );
    }
  }

  _getLogLevel() {
    return this.#_logLevel;
  }

  _loadFragment(key, fallback = null) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      ok: true,
      messages: [],
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this.conn._fragment[key] !== undefined) {
      details.level = "warn";
      details.messages.push(
        `Warning: loadFragment() replaced an existing key: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No key provided for 'this.loadFragment(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this.conn._fragment[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this.conn._fragment[key] = fallback;
    } else if (fallback instanceof Element) {
      this.conn._fragment[key] = fallback.outerHTML;
    } else if (fallback instanceof DocumentFragment) {
      this.conn._fragment[key] = [...fallback.children].map((el) =>
        el.outerHTML
      ).join("");
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `loadFragment() attempted to use an invalid fallback for key '${key}'. Valid values must be a String, Element, or DocumentFragment.`,
      );
    }
    return this.conn.addLog(
      details.level,
      "loadFragment",
      details.ok,
      details.messages.join(" "),
      null,
    );
  }

  // const storageKey = `bittyFragment_${key}`;
  // const details = {
  //   level: "info",
  //   ok: true,
  //   messages: [],
  // };
  // const storage = localStorage.getItem(storageKey);
  // if (storage !== null) {
  //   if (this.conn.fragment[key] !== undefined) {
  //     details.level = "warn";
  //     details.messages.push(
  //       `Warning: loading fragment '${key}' from storage overwrote an existing fragment 'this.fragment[${key}]'.`,
  //     );
  //   }
  //   const payload = JSON.parse(storage).data;
  //   const template = document.createElement("template");
  //   template.innerHTML = payload;
  //   this.conn.fragment[key] = template.content;
  //   details.messages.push(`Loaded fragment with key '${key}' from storage.`);
  // } else if (
  //   typeof fallback !== "string" &&
  //   fallback instanceof Element === false &&
  //   fallback instanceof DocumentFragment === false
  // ) {
  //   details.ok = false;
  //   details.level = "error";
  //   details.messages.push(
  //     `Attempted to use an invalid fallback in 'loadFragment("${key}", fallback)'. The fallback must be either a String, Element, or DocumentFragment`,
  //   );
  // } else if (
  //   typeof fallback === "string"
  // ) {
  //   const template = document.createElement("template");
  //   template.innerHTML = fallback;
  //   this.conn.fragment[key] = template.content;
  //   details.messages.push(
  //     `Loaded fragment with key '${key}' from fallback string.`,
  //   );
  // } else if (
  //   fallback instanceof Element
  // ) {
  //   const fragment = document.createDocumentFragment();
  //   fragment.appendChild(fallback);
  //   this.conn.fragment[key] = fragment;
  //   details.messages.push(
  //     `Loaded fragment with key '${key}' from fallback element.`,
  //   );
  // } else if (
  //   fallback instanceof DocumentFragment
  // ) {
  //   this.conn.fragment[key] = fallback;
  //   details.messages.push(
  //     `Loaded fragment with key '${key}' from fallback document fragment.`,
  //   );
  // } else {
  //   details.level = "error";
  //   details.ok = false;
  //   details.messages.push(
  //     `Attempted to load non-existing fragment with key '${key}' from storage`,
  //   );
  // }
  // if (details.ok === true) {
  //   localStorage.setItem(
  //     storageKey,
  //     JSON.stringify({
  //       data: [...this.conn.fragment[key].children].map((el) => el.outerHTML)
  //         .join(""),
  //     }),
  //   );
  // }
  // return this.conn.addLog(
  //   details.level,
  //   "loadFragment",
  //   details.ok,
  //   details.messages.join(" "),
  //   null,
  // );

  _loadElement(key, fallback = null) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      key: "loadElement",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this.conn._element[key] !== undefined) {
      details.level = "warn";
      details.messages.push(
        `Warning: loadElement() replaced an existing key: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No key provided for 'this.loadElement(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this.conn._element[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this.conn._element[key] = fallback;
    } else if (fallback instanceof Element) {
      this.conn._element[key] = fallback.outerHTML;
    } else if (fallback instanceof DocumentFragment) {
      this.conn._element[key] = fallback.firstChild.outerHTML;
      if (fallback.children.length > 1) {
        details.level = "warn";
        details.messages.push(
          `Warning. The fallback documnet fragment used to loadElement with key '${key}' contained more than one element at its root. The first one was used. The rest were dropped.`,
        );
      }
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `loadElement() attempted to use an invalid fallback for key '${key}'. Valid values must be a String, Element, or DocumentFragment.`,
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  // _loadElement(key, fallback = null) {
  //   const storageKey = `bittyElement_${key}`;
  //   const details = {
  //     level: "info",
  //     ok: true,
  //     messages: [],
  //   };
  //   if (this.conn._element[key] !== undefined) {
  //     details.level = "warn";
  //     details.messages.push(
  //       `Warning: Overwriting existing element with key ${key}`,
  //     );
  //   }
  //   const storage = localStorage.getItem(storageKey);
  //   if (storage !== null) {
  //     this.conn._element[key] = JSON.parse(storage).data;
  //   }
  // }

  // if (storage !== null) {
  //   const payload = JSON.parse(storage).data;
  //   const template = document.createElement("template");
  //   template.innerHTML = payload;
  //   this.conn._element[key] = template.content.firstChild;
  //   details.messages.push(`Loaded elemnet with key '${key}' from storage.`);
  // } else if (fallback === null) {
  //   details.level = "error";
  //   details.ok = false;
  //   details.messages.push(
  //     `Noting in storage for ${key} and no fallback provided.`,
  //   );
  // } else if (fallback instanceof Element) {
  //   this.conn._element[key] = fallback;
  //   localStorage.setItem(
  //     storageKey,
  //     JSON.stringify({ data: this.conn._element[key].outerHTML }),
  //   );
  //   details.messages.push(
  //     `No elemnet with key '${key}' in storage. The fallback was used.`,
  //   );
  // } else if (fallback instanceof DocumentFragment) {
  //   this.conn._element[key] = fallback.firstChild;
  //   details.level = "warn";
  //   details.messages.push(
  //     `No elemnet with key '${key}' in storage. The fallback was used.`,
  //   );
  //   details.messages.push(
  //     "Warning: A document fragment was used as a fallback. Everything beyond the first element was dropped",
  //   );
  //   localStorage.setItem(
  //     storageKey,
  //     JSON.stringify({ data: this.conn._element[key].outerHTML }),
  //   );
  // } else {
  //   const template = document.createElement("template");
  //   template.innerHTML = fallback;
  //   this.conn._element[key] = template.content.firstChild;
  //   details.messages.push(
  //     `No element with key '${key}' in storage. The fallback was used.`,
  //   );
  //   localStorage.setItem(
  //     storageKey,
  //     JSON.stringify({ data: this.conn._element[key].outerHTML }),
  //   );
  // }
  // return this.conn.addLog(
  //   details.level,
  //   "loadElement",
  //   details.ok,
  //   details.messages.join(" "),
  //   null,
  // );

  _deleteElement(key) {
    const storageKey = `bittyElement_${key}`;
    if (
      localStorage.getItem(storageKey) === null &&
      this.conn._element[key] === undefined
    ) {
      return this.conn.addLog(
        "warn",
        "deleteElement",
        true,
        `No existing element with '${key}' available to remove.`,
        null,
      );
    } else {
      localStorage.removeItem(storageKey);
      delete this.conn._element[key];
      return this.conn.addLog(
        "info",
        "deleteElement",
        true,
        `Removed element with key '${key}'`,
        null,
      );
    }
  }

  // This is just a stub to help
  // make loadFragment tests.
  // TODO: Cover this with tests.
  _removeFragment(key) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      ok: true,
      key: "removeFragment",
      messages: [],
    };
    if (
      localStorage.getItem(storageKey) === null &&
      this.conn.fragment[key] === undefined
    ) {
      details.level = "warn",
        details.messages.push(
          `No fragment with key '${key}' exists. Nothing to remove.`,
        );
    } else {
      delete this.conn.fragment[key];
      localStorage.removeItem(storageKey);
      details.messages.push(
        `Fragment with key '${key}' was removed`,
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      null,
    );
  }

  _removeJSON(key) {
    const storageKey = `bittyJSON_${key}`;
    localStorage.removeItem(storageKey);
    if (this.conn.json[key] === undefined) {
      return this.conn.addLog(
        "warn",
        "removeJSON",
        true,
        `JSON with key '${key}' already does not exist.`,
        null,
      );
    } else {
      delete this.conn.json[key];
      return this.conn.addLog(
        "info",
        "removeJSON",
        true,
        `Removed JSON with key: ${key}`,
        null,
      );
    }
  }

  _renderElement(key, subs = {}) {
    if (this.conn._element[key] === undefined) {
      this.conn.addLog(
        "error",
        "renderElement",
        false,
        `Attempted to render non-existing element using key '${key}'`,
      );
      return undefined;
    } else {
      let content = this.conn._element[key];
      for (const needle of Object.keys(subs)) {
        if (subs[needle] instanceof Array === false) {
          subs[needle] = [subs[needle]];
        }
        if (typeof subs[needle][0] === "string") {
          content = content.replaceAll(needle, subs[needle].join(""));
        } else if (
          subs[needle][0] instanceof Element
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((el) => el.outerHTML).join(""),
          );
        } else if (
          subs[needle][0] instanceof DocumentFragment
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((fragment) => {
              return [...fragment.children].map((el) => {
                return el.outerHTML;
              }).join("");
            }).join(""),
          );
        }
      }
      const template = document.createElement("template");
      template.innerHTML = content;
      return template.content.firstChild;
    }
  }

  // if (this.conn.element[key] === undefined) {
  //   this.conn.addLog(
  //     "error",
  //     "renderElement",
  //     false,
  //     `Attempted to render non-existing element with key '${key}'`,
  //   );
  // }
  // if (subs === null) {
  //   return this.conn.element[key];
  // } else {
  //   let content = this.conn.element[key].outerHTML;
  //   for (const needle of Object.keys(subs)) {
  //     if (subs[needle] instanceof Array) {
  //       if (subs[needle][0] instanceof DocumentFragment) {
  //         content = content.replaceAll(
  //           needle,
  //           subs[needle].map((fragment) => {
  //             return [...fragment.childNodes].map((el) => {
  //               return el.outerHTML;
  //             }).join("");
  //           }).join(""),
  //         );
  //       } else if (subs[needle][0] instanceof Element) {
  //         content = content.replaceAll(
  //           needle,
  //           subs[needle].map((el) => {
  //             return el.outerHTML;
  //           }).join(""),
  //         );
  //       } else {
  //         content = content.replaceAll(needle, subs[needle].join(""));
  //       }
  //     } else {
  //       if (subs[needle] instanceof DocumentFragment) {
  //         content = content.replaceAll(
  //           needle,
  //           [...subs[needle].childNodes].map((el) => {
  //             return el.outerHTML;
  //           }).join(""),
  //         );
  //       } else if (subs[needle] instanceof Element) {
  //         content = content.replaceAll(needle, subs[needle].outerHTML);
  //       } else {
  //         content = content.replaceAll(needle, subs[needle]);
  //       }
  //     }
  //   }
  //   const template = document.createElement("template");
  //   template.innerHTML = content;
  //   return template.content.firstChild;
  // }
  // }

  _renderFragment(key, subs = {}) {
    if (this.conn._fragment[key] === undefined) {
      this.conn.addLog(
        "error",
        "renderFragment",
        false,
        `Attempted to render non-existing fragment using key '${key}'`,
      );
      return undefined;
    } else {
      let content = this.conn._fragment[key];
      for (const needle of Object.keys(subs)) {
        if (subs[needle] instanceof Array === false) {
          subs[needle] = [subs[needle]];
        }
        if (typeof subs[needle][0] === "string") {
          content = content.replaceAll(needle, subs[needle].join(""));
        } else if (
          subs[needle][0] instanceof Element
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((el) => el.outerHTML).join(""),
          );
        } else if (
          subs[needle][0] instanceof DocumentFragment
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((fragment) => {
              return [...fragment.children].map((el) => {
                return el.outerHTML;
              }).join("");
            }).join(""),
          );
        }
      }
      const template = document.createElement("template");
      template.innerHTML = content;
      return template.content;
    }
  }

  _renderJSON(key, subs = {}, pretty = true) {
    // TODO at some point for a consistent API:
    // handle arrays of strings, elements/arrays-of-elements,
    // fragments/arrays-of-fragments, svgs/arrays-of-svgs,
    // and other jsons.
    let jsonString = pretty
      ? JSON.stringify(this.conn.json[key], null, 2)
      : JSON.stringify(this.conn.json[key]);
    if (subs !== null) {
      for (const needle of Object.keys(subs)) {
        jsonString = jsonString.replaceAll(needle, subs[needle]);
      }
    }
    if (jsonString === undefined) {
      this.conn.addLog(
        "error",
        "renderJSON",
        false,
        `Attempted to render non-existing json with key '${key}'`,
      );
    }
    return jsonString;
  }

  _saveElement(key) {
    if (this.conn.element[key] === undefined) {
      return this.conn.addLog(
        "error",
        "saveElement",
        false,
        `Tried to save an element with key '${key}', but it does not exist.`,
      );
    }
    const storageKey = `bittyElement_${key}`;
    const payload = JSON.stringify({
      data: this.conn.element[key].outerHTML,
    });
    localStorage.setItem(storageKey, payload);
    return this.conn.addLog(
      "info",
      "saveElement",
      true,
      `Saved element with key '${key}'`,
    );
  }

  _send(payload, signal) {
    const ev = new BittySendEvent(payload, signal);
    this.dispatchEvent(ev);
  }

  _setLogLevel(level) {
    if (this.getLogLevelIndex(level) === -1) {
      this.#_logLevel = "warn";
      this.conn.addLog(
        "warn",
        "setLogLevel",
        false,
        `Attempted to setLogLevel(level) to an invalid level: '${level}'. Resetting log level to 'warn'`,
      );
    } else {
      this.#_logLevel = level;
    }
  }

  _updateElement(key, content) {
    return this._createElement(key, content, { update: true });
  }

  _updateFragment(key, content) {
    return this._createFragment(key, content, { update: true });
  }

  /** internal */
  addEventListeners() {
    // Internal bitty listeners
    ["bittysendevent", "bittytriggerevent"].forEach(
      (listener) => {
        window.addEventListener(listener, (ev) => {
          this.processEventBridge.call(this, ev);
        });
      },
    );
    if (this.dataset.listeners !== undefined) {
      this.dataset.listeners.trim().split(/\s+/m).forEach((listener) => {
        window.addEventListener(listener, (ev) => {
          if (ev.target.dataset.send) {
            this.processEventBridge.call(this, ev);
          }
        });
      });
    } else {
      ["click", "input"].forEach((listener) => {
        window.addEventListener(listener, (ev) => {
          if (
            ev.target.dataset.send && ev.target.dataset.listeners === undefined
          ) {
            this.processEventBridge.call(this, ev);
          }
        });
      });
    }
    const customListeners = [
      ...new Set(
        [...document.querySelectorAll("[data-listeners]")]
          .map((el) => {
            return el.dataset.listeners.trim().split(/\s+/m).map((signal) => {
              return signal.trim();
            });
          }),
      ),
    ];
    customListeners.flat().forEach((listener) => {
      window.addEventListener(listener, (ev) => {
        if (
          ev.target.dataset.send !== undefined &&
          ev.target.dataset.listeners !== undefined
        ) {
          if (
            splitSignalString(ev.target.dataset.listeners).includes(listener)
          ) {
            this.processEventBridge.call(this, ev);
          }
        }
      });
    });
  }

  addJSONBridge(key, json) {
    const storageKey = `bittyJSON_${key}`;
    if (json === undefined) {
      return this.conn.addLog(
        "error",
        "addJSON",
        false,
        `No value passed in for key '${key}'`,
        null,
      );
    } else if (typeof json === "string") {
      try {
        this.conn.json[key] = JSON.parse(json);
        localStorage.setItem(
          storageKey,
          JSON.stringify({ data: this.conn.json[key] }),
        );
        return this.conn.addLog(
          "info",
          "addJSON",
          true,
          `Added JSON with key: ${key}`,
          null,
        );
      } catch (error) {
        return this.conn.addLog(
          "error",
          "addJSON",
          false,
          `Could not parse JSON for key: ${key}`,
          null,
        );
      }
    } else {
      this.conn.json[key] = JSON.parse(JSON.stringify(json));
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn.json[key] }),
      );
      return this.conn.addLog(
        "info",
        "addJSON",
        true,
        `Added JSON with key: ${key}`,
        null,
      );
    }
  }

  // TODO: Add stacktrace
  addLogBridge(level, type, ok, message, extraInfo = null) {
    const log = new BittyLog(level, type, ok, message, extraInfo);
    this.conn.logs.push(log);
    //    console.log(`${level} - ${this.#_logLevel}`);

    if (
      this.getLogLevelIndex(level) <= this.getLogLevelIndex(this.#_logLevel)
    ) {
      //  console.log(this.getLogLevelIndex(level));
      if (this.getLogLevelIndex(level) === 1) {
        console.error(log);
      } else if (this.getLogLevelIndex(level) === 2) {
        console.warn(log);
      } else {
        console.log(log);
      }
    }
    return log;
  }

  createBridges() {
    this.conn.logLevel = 2;
    // TODO: Deprecate this.conn.element in
    // favor of this.conn._element. (with an underscore)
    this.conn.element = {};
    this.conn._element = {};
    // TODO: Deprecate this.conn.fragment in favor
    // of this.conn._fragment (with an underscore)
    this.conn.fragment = {};
    this.conn._fragment = {};
    this.conn.json = {};
    this.conn.svg = {};
    this.conn.logs = [];
    // TODO: Deprecate and remove addElemnet in favor of createElement.
    //    this.conn.addElement = this._addElement.bind(this);
    this.conn.createElement = this._createElement.bind(this);
    this.conn.createFragment = this._createFragment.bind(this);
    this.conn.fetchElement = this._fetchElement.bind(this);
    this.conn.fetchFragment = this._fetchFragment.bind(this);
    this.conn.fetchJSON = this._fetchJSON.bind(this);
    this.conn.getLogLevel = this._getLogLevel.bind(this);
    this.conn.loadElement = this._loadElement.bind(this);
    this.conn.loadFragment = this._loadFragment.bind(this);
    this.conn.deleteElement = this._deleteElement.bind(this);
    this.conn.removeFragment = this._removeFragment.bind(this);
    this.conn.removeJSON = this._removeJSON.bind(this);
    this.conn.renderElement = this._renderElement.bind(this);
    this.conn.renderFragment = this._renderFragment.bind(this);
    // TODO: Deprecate and remove renderJSON.
    this.conn.renderJSON = this._renderJSON.bind(this);
    this.conn.saveElement = this._saveElement.bind(this);
    this.conn.setLogLevel = this._setLogLevel.bind(this);
    this.conn.send = this._send.bind(this);
    this.conn.updateElement = this._updateElement.bind(this);
    this.conn.updateFragment = this._updateFragment.bind(this);
    // TODO: Rename these to use underscores.
    this.conn.addJSON = this.addJSONBridge.bind(this);
    this.conn.addLog = this.addLogBridge.bind(this);
    this.conn.loadJSON = this.loadJSONBridge.bind(this);
    this.conn.saveJSON = this.saveJSONBridge.bind(this);
    this.conn.sleep = this.sleepBridge.bind(this);
    this.conn.trigger = this.triggerBridge.bind(this);
    this.processEventBridge = this.processEvent.bind(this);
  }

  getLogLevelIndex(level) {
    return this.#_logLevels.indexOf(level.toLowerCase());
  }

  ingestJSON() {
    document.querySelectorAll("script").forEach((el) => {
      if (el.type === "application/json" && el.dataset.key !== undefined) {
        try {
          this.conn.json[el.dataset.key] = JSON.parse(el.text.trim());
        } catch (error) {
          return this.conn.addLog(
            "error",
            "ingestjson",
            `Failed to parse JSON from a script tag on the page.`,
            false,
            error,
          );
        }
      }
    });
  }

  // TODO: throw error if parsing fails
  loadJSONBridge(key, fallback = null) {
    const storageKey = `bittyJSON_${key}`;
    const storage = localStorage.getItem(storageKey);
    const details = { level: "info", extraText: "" };
    if (this.conn.json[key] !== undefined) {
      details.level = "warn";
      details.extraText = " Warning - overwrote exsiting key";
    }
    try {
      if (storage !== null) {
        const json = JSON.parse(storage);
        if (json.data === undefined) {
          return this.conn.addLog(
            "error",
            "loadJSON",
            false,
            `Attempted to load storage without a top level 'data' in key: ${key}${details.extraText}`,
            null,
          );
        } else {
          this.conn.json[key] = JSON.parse(storage).data;
          return this.conn.addLog(
            details.level,
            "loadJSON",
            true,
            `Loaded JSON for key: ${key}${details.extraText}`,
            null,
          );
        }
      }
      if (fallback !== null) {
        if (typeof fallback === "string") {
          this.conn.json[key] = JSON.parse(fallback);
          localStorage.setItem(key, `{ "data": ${fallback} }`);
          return this.conn.addLog(
            details.level,
            "loadJSON",
            true,
            `Loaded fallback JSON for key: ${key}${details.extraText}`,
            null,
          );
        } else if (typeof fallback === "object") {
          this.conn.json[key] = fallback;
          localStorage.setItem(key, JSON.stringify({ data: fallback }));
          return this.conn.addLog(
            details.level,
            "loadJSON",
            true,
            `Loaded fallback JSON for key: ${key}${details.extraText}`,
            null,
          );
        }
      }
      return this.conn.addLog(
        "error",
        "loadJSON",
        false,
        `No JSON in storage or fallback for key: ${key}${details.extraText}`,
        null,
      );
    } catch (error) {
      return this.conn.addLog(
        "error",
        "loadJSON",
        false,
        `Could not parse fallback JSON for key: ${key}${details.extraText}`,
        null,
      );
    }
  }

  /** internal */
  async makeConnection() {
    if (!this.dataset.connect) {
      this.conn = new window.BittyClass();
    } else {
      const connString = this.dataset.connect.trim();
      if (window[connString]) {
        this.conn = new window[connString]();
      } else {
        // TODO: Handle `http...` URLS
        // TODO: Handle `./...` URLS
        const connParts = connString.split(":");
        if (connParts[0].substring(0, 1) === "/") {
          const windowURL = new URL(window.location.href);
          const moduleURL = new URL(connParts[0], windowURL.origin).toString();
          const mod = await import(moduleURL);
          if (connParts[1] !== undefined) {
            this.conn = new mod[connParts[1]]();
          } else {
            this.conn = new mod.default();
          }
        }
      }
    }
    // TODO: Log error if no connection is made
  }

  /** internal */
  async processEvent(ev) {
    let inputSignalString;
    if (ev.type === "bittytriggerevent" || ev.type === "bittysendevent") {
      inputSignalString = ev.bittyPayload.target.dataset.send;
      ev = ev.bittyPayload.content;
    } else {
      inputSignalString = ev.target.dataset.send;
    }
    for (let rawSignalString of splitSignalString(inputSignalString)) {
      const signalParts = rawSignalString.split(":");
      signalParts.reverse();
      const signal = signalParts[0];
      const doAwait = signalParts[1] === "await" ? true : false;
      if (typeof this.conn[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-receive~='${signal}']`,
        );
        if (doAwait === true) {
          if (receivers.length === 0) {
            await this.conn[signal](ev, null);
          } else {
            for (const receiver of receivers) {
              await this.conn[signal](ev, receiver);
            }
          }
        } else {
          if (receivers.length === 0) {
            this.conn[signal](ev, null);
          } else {
            for (const receiver of receivers) {
              this.conn[signal](ev, receiver);
            }
          }
        }
      }
    }
  }

  /** internal */
  async runBittyReady() {
    // TODO: Add tests for sync and async runs.
    if (typeof this.conn.bittyReady === "function") {
      if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyReady();
      } else {
        this.conn.bittyReady();
      }
    }
  }

  saveJSONBridge(key) {
    const storageKey = `bittyJSON_${key}`;
    if (this.conn.json[key] !== undefined) {
      if (typeof this.conn.json[key] === "object") {
        const payload = JSON.stringify({ data: this.conn.json[key] });
        localStorage.setItem(storageKey, payload);
        return this.conn.addLog(
          "info",
          "savejson",
          true,
          `Saved JSON for key: ${key}`,
          null,
        );
      } else {
        return this.conn.addLog(
          "error",
          "savejson",
          false,
          `Tried to saveJSON on something that's not an object: ${key}`,
          null,
        );
      }
    } else {
      return this.conn.addLog(
        "error",
        "savejson",
        false,
        `No JSON available to save with key: ${key}`,
        null,
      );
    }
  }

  async sleepBridge(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  triggerBridge(signal) {
    const ev = new BittyTriggerEvent(signal);
    this.dispatchEvent(ev);
  }
}

// Used both for logging and for
// returned responses from methods
/** internal */
class BittyLog {
  constructor(
    level = "error",
    type = "unknown",
    ok = null,
    message = null,
    extraInfo = null,
  ) {
    this.level = level;
    this.type = type;
    this.ok = ok;
    this.message = message;
    this.extraInfo = extraInfo;
    this.timestamp = new Date();
    this.performanceTime = performance.now();
  }
}

/** internal */
class BittySendEvent extends Event {
  constructor(payload, signals) {
    super("bittysendevent", { bubbles: true });
    this.bittyPayload = {
      content: payload,
      target: { dataset: { send: signals } },
    };
  }
}

/** internal */
class BittyTriggerEvent extends Event {
  constructor(signals) {
    super("bittytriggerevent", { bubbles: true });
    this.bittyPayload = {
      content: null,
      target: { dataset: { send: signals } },
    };
  }
}

customElements.define(tagName, BittyJs);
