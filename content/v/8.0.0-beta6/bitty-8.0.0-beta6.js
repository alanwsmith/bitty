const t = [8, 0, 0],
  e = `bitty-${t[0]}-${t[1]}`,
  n = [
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "form",
    "image",
    "month",
    "number",
    "option",
    "password",
    "radio",
    "search",
    "select",
    "tel",
    "text",
    "textarea",
    "time",
    "url",
    "week",
  ];
class s extends HTMLElement {
  static bits = [];
  constructor() {
    super();
  }
  async connectedCallback() {
    if (this.dataset.connect) {
      const t = this.dataset.connect.trim(), e = await import(t);
      void 0 !== e.b &&
        (e.b._trueValues = ["true", "yes", "on", "1"],
          e.b._falseValues = ["false", "no", "off", "0"],
          e.b._debouncers = {},
          e.b._marks = {},
          e.b.svgs = {},
          void 0 === e.b.templates && (e.b.templates = {}),
          this.addToggleSwitchTemplate(e),
          e.b.data = {},
          this.loadPageAssets(e),
          this.addBittyClasses(e),
          this.constructor.bits.push(e),
          window.addEventListener("bittysend", (t) => {
            e.b._processBittySend(t);
          }),
          window.addEventListener("bittytrigger", (t) => {
            e.b._processBittyTrigger(t);
          }),
          window.addEventListener("click", (t) => {
            e.b._processEvent(t);
          }),
          window.addEventListener("input", (t) => {
            e.b._processInputEvent(t);
          }),
          window.addEventListener("change", (t) => {
            e.b._processChangeEvent(t);
          }),
          document.addEventListener("submit", (t) => {
            e.b._processEvent(t);
          }),
          [...document.querySelectorAll("[data-listen]")].forEach((t) => {
            e.b._splitSignalString(t.dataset.listen).forEach((t) => {
              !1 ===
                  [
                    "click",
                    "input",
                    "change",
                    "submit",
                    "bittysend",
                    "bittytrigger",
                  ].includes(t) && window.addEventListener(t, (t) => {
                  e.b._processEvent(t);
                });
            });
          }),
          e.b._processInit());
    }
  }
  addBittyClasses(t) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter((t) =>
      "_" === t.substring(0, 1)
    ).forEach((e) => {
      t.b[e.substring(1)] = this[e].bind(t);
    });
  }
  _addListener(t, e) {
    window.addEventListener(t, (t) => {
      this.b._processCustomEvent(t, e);
    });
  }
  _addStyles(t) {
    const e = new CSSStyleSheet();
    return e.replaceSync(t), document.adoptedStyleSheets.push(e), e;
  }
  addToggleSwitchTemplate(t) {
    t.b.templates.switch =
      '\n<label for="__ID__" class="__CLASS__" data-key="__KEY__" data-r="__RECEIVE__">\n  __PREPEND__\n  <button id="__ID__" data-s="__SEND__" role="switch" aria-checked="__STATE__">\n    <span></span><span></span>\n  </button>\n  __APPEND__\n</label>';
  }
  _ce(t, e = {}) {
    return document.createElement(t, e);
  }
  async _copy(t) {
    const e = document.querySelector(t);
    if (void 0 !== e.value) {
      try {
        await navigator.clipboard.writeText(e.value);
      } catch (e) {
        return console.error(`Could not copy .value from ${t}`), !1;
      }
    } else {try {
        await navigator.clipboard.writeText(e.innerHTML);
      } catch (e) {
        return console.error(`Could not copy .innerHTML from ${t}`), !1;
      }}
    return !0;
  }
  _debounce(t, e, n, s = {}) {
    this.b._debouncers[t] && window.clearTimeout(this.b._debouncers[t]),
      this.b._debouncers[t] = setTimeout(() => {
        this.b.send.apply(this, [s, e]);
      }, n);
  }
  _dedup(t) {
    return [...new Set(t)];
  }
  __findSenders(t) {
    const e = [];
    for (; t;) {
      void 0 !== t.dataset && void 0 !== t.dataset.s && e.push(t),
        t = t.parentElement;
    }
    return e;
  }
  async _get(t, e = null, n = {}) {
    let s = await fetch(t, n);
    try {
      if (!0 === s.ok) {
        try {
          return await s.json();
        } catch (t) {
          console.error(t);
        }
      } else console.error(s);
    } catch (t) {
      console.error(t);
    }
  }
  _getMarks(t) {
    return this.b._marks[t];
  }
  async _getTemplates(t, e = {}) {
    let n = await fetch(t, e);
    try {
      if (!0 === n.ok) {
        try {
          const t = await n.text(), e = document.createElement("div");
          return e.innerHTML = t,
            e.querySelectorAll("script").forEach((t) => {
              "text/html" === t.type && void 0 !== t.id &&
              (this.b.templates[t.id] = t.innerHTML.trim()),
                "image/svg" === t.type && void 0 !== t.id &&
                (this.b.svgs[t.id] = t.innerHTML.trim()),
                "application/json" === t.type && void 0 !== t.id &&
                (this.b.data[t.id] = JSON.parse(t.innerHTML.trim()));
            }),
            !0;
        } catch (t) {
          return console.error(t), !1;
        }
      }
    } catch (t) {
      return console.error(t), !1;
    }
  }
  __getBool(t) {
    if (void 0 === t) return;
    if (null === t) return;
    const e = parseInt(t, 10);
    if (NaN !== e && e > 0) return !0;
    if (NaN !== e && e <= 0) return !1;
    const n = t.toLowerCase();
    return !!this.b._trueValues.includes(n) ||
      !this.b._falseValues.includes(n) && void 0;
  }
  loadPageAssets(t) {
    document.querySelectorAll("script").forEach((e) => {
      "text/html" === e.type && void 0 !== e.id &&
      (t.b.templates[e.id] = e.innerHTML.trim()),
        "image/svg" === e.type && void 0 !== e.id &&
        (t.b.svgs[e.id] = e.innerHTML.trim()),
        "application/json" === e.type && void 0 !== e.id &&
        (t.b.data[e.id] = JSON.parse(e.innerHTML.trim()));
    });
  }
  _mapKey(t, e, n = [], s = {}) {
    const r = "string" == typeof t ? null : t;
    null === n && (n = []),
      void 0 === s.preventDefault && (s.preventDefault = !0),
      void 0 === s.listener && (s.listener = "keydown");
    for (let t = 0; t < n.length; t += 1) {
      if (void 0 === this.b.modKeyAliases()[n[t].toLowerCase()]) {
        return void console.error(
          `ERROR: Tried to use invalid modifier key '${n[t]}' in mapKey()`,
        );
      }
      n[t] = this.b.modKeyAliases()[n[t].toLowerCase()];
    }
    !0 === s.preventDefault
      ? window.addEventListener(s.listener, (s) => {
        if (s.key === t || s.keyCode === r) {
          for (const t of n) if (!1 === s[t]) return;
          s.preventDefault(), this.b._processKeypress(s, e);
        }
      })
      : window.addEventListener(s.listener, (s) => {
        if (s.key === t || s.keyCode === r) {
          for (const t of n) if (!1 === s[t]) return;
          this.b._processKeypress(s, e);
        }
      });
  }
  _mark(t) {
    try {
      this.b._marks[t].push(performance.now());
    } catch (e) {
      this.b._marks[t] = [], this.b._marks[t].push(performance.now());
    }
  }
  __markEventAsUpdated(t) {
    t.bittyUpdated = !0;
  }
  _modKeyAliases() {
    return {
      alt: "altKey",
      altkey: "altKey",
      cmd: "metaKey",
      command: "metaKey",
      ctrl: "ctrlKey",
      ctrlkey: "ctrlKey",
      meta: "metaKey",
      metakey: "metaKey",
      option: "altKey",
      optionkey: "altKey",
      shift: "shiftKey",
      shiftkey: "shiftKey",
      win: "metaKey",
      windows: "metaKey",
    };
  }
  __processBittySend(t) {
    this.b._updateElement(t.target);
    const e = this.b._splitSignalString(t.signals);
    for (const n of e) {
      if ("function" == typeof this[n]) {
        const e = document.querySelectorAll(`[data-r~='${n}']`);
        if (e.length > 0) {
          for (const s of e) {
            this.b._updateElement(s),
              s.isSender = () => !1,
              s.isTarget = () => !1,
              this[n](t.payload, null, s);
          }
        } else this[n](t.payload, null, null);
      }
    }
  }
  __processBittyTrigger(t) {
    this.b._updateElement(t.target);
    const e = this.b._splitSignalString(t.signals);
    for (const n of e) {
      if ("function" == typeof this[n]) {
        const e = document.querySelectorAll(`[data-r~='${n}']`);
        if (e.length > 0) {
          for (const s of e) {
            this.b._updateElement(s),
              s.isSender = () => !1,
              s.isTarget = () => !1,
              this[n](t, null, s);
          }
        } else this[n](t, null, null);
      }
    }
  }
  __processChangeEvent(t) {
    this.b._updateElement(t.target);
    const e = this.b._findSenders(t.target);
    for (const n of e) {
      this.b._updateElement(n);
      const e = this.b._splitSignalString(n.dataset.s),
        s = this.b._splitSignalString(n.dataset.listen);
      if (0 === s.length) {
        if (n.tagName && "form" === n.tagName.toLowerCase()) return;
        for (const s of e) {
          if ("function" == typeof this[s]) {
            const e = document.querySelectorAll(`[data-r~='${s}']`);
            if (e.length > 0) {
              for (const r of e) this.b._updateElement(r), this[s](t, n, r);
            } else this[s](t, n, null);
          }
        }
      } else if (s.includes(t.type)) {
        for (const s of e) {
          if ("function" == typeof this[s]) {
            const e = document.querySelectorAll(`[data-r~='${s}']`);
            if (e.length > 0) {
              for (const r of e) this.b._updateElement(r), this[s](t, n, r);
            } else this[s](t, n, null);
          }
        }
      }
    }
  }
  __processCustomEvent(t, e) {
    this.b._updateElement(t.target);
    const n = this.b._splitSignalString(e);
    for (const e of n) {
      if ("function" == typeof this[e]) {
        const n = document.querySelectorAll(`[data-r~='${e}']`);
        if (n.length > 0) {
          for (const s of n) {
            this.b._updateElement(s),
              this.b._updateElement(t.target),
              this[e](t, t.target, s);
          }
        } else this[e](t, null, null);
      }
    }
  }
  __processEvent(t) {
    this.b._updateElement(t.target);
    const e = this.b._findSenders(t.target);
    for (const s of e) {
      this.b._updateElement(s);
      const e = this.b._splitSignalString(s.dataset.s),
        r = this.b._splitSignalString(s.dataset.listen);
      if (0 === r.length) {
        if (!0 === s.isContentEditable && "click" === t.type) return;
        if (
          s.tagName && n.includes(s.tagName.toLowerCase()) && "click" === t.type
        ) return;
        if (s.type && n.includes(s.type.toLowerCase())) return;
        for (const n of e) {
          if ("function" == typeof this[n]) {
            const e = document.querySelectorAll(`[data-r~='${n}']`);
            if (e.length > 0) {
              for (const r of e) this.b._updateElement(r), this[n](t, s, r);
            } else this[n](t, s, null);
          }
        }
      } else if (r.includes(t.type)) {
        for (const n of e) {
          if ("function" == typeof this[n]) {
            const e = document.querySelectorAll(`[data-r~='${n}']`);
            if (e.length > 0) {
              for (const r of e) this.b._updateElement(r), this[n](t, s, r);
            } else this[n](t, s, null);
          }
        }
      }
    }
  }
  __processInit() {
    if (void 0 !== this.b.init) {
      const t = this.b._splitSignalString(this.b.init);
      for (const e of t) {
        if ("function" == typeof this[e]) {
          const t = document.querySelectorAll(`[data-r~='${e}']`);
          if (t.length > 0) {
            for (const n of t) {
              this.b._updateElement(n),
                n.isSender = () => !1,
                n.isTarget = () => !1,
                this[e]({}, null, n);
            }
          } else this[e]({}, null, null);
        }
      }
    }
  }
  __processInputEvent(t) {
    this.b._updateElement(t.target);
    const e = this.b._findSenders(t.target);
    for (const s of e) {
      this.b._updateElement(s);
      const e = this.b._splitSignalString(s.dataset.s),
        r = this.b._splitSignalString(s.dataset.listen);
      if (0 === r.length) {
        if (s.tagName && n.includes(s.tagName.toLowerCase())) return;
        if (s.type && n.includes(s.type.toLowerCase())) return;
        for (const n of e) {
          if ("function" == typeof this[n]) {
            const e = document.querySelectorAll(`[data-r~='${n}']`);
            if (e.length > 0) {
              for (const r of e) this.b._updateElement(r), this[n](t, s, r);
            } else this[n](t, s, null);
          }
        }
      } else if (r.includes(t.type)) {
        for (const n of e) {
          if ("function" == typeof this[n]) {
            const e = document.querySelectorAll(`[data-r~='${n}']`);
            if (e.length > 0) {
              for (const r of e) this.b._updateElement(r), this[n](t, s, r);
            } else this[n](t, s, null);
          }
        }
      }
    }
  }
  __processKeypress(t, e) {
    this.b._updateElement(t.target);
    const n = t.target, s = this.b._splitSignalString(e);
    for (const e of s) {
      if ("function" == typeof this[e]) {
        const s = document.querySelectorAll(`[data-r~='${e}']`);
        if (s.length > 0) {
          for (const r of s) this.b._updateElement(r), this[e](t, n, r);
        } else this[e](t, n, null);
      }
    }
  }
  _qs(t, e = null) {
    return null === e ? document.querySelector(t) : e.querySelector(t);
  }
  _qsa(t, e = null) {
    return null === e ? document.querySelectorAll(t) : e.querySelectorAll(t);
  }
  async _quickCopy(t, e, n = {}) {
    void 0 === n.success && (n.success = "Copied"),
      void 0 === n.failed && (n.failed = "Could not copy"),
      void 0 === n.ms && (n.ms = 2e3),
      void 0 === e.copyId && (e.copyId, this.b.uuid()),
      this.b._debouncers[e.copyId] &&
      window.clearTimeout(this.b._debouncers[e.copyId]);
    const s = void 0 !== t.value ? t.value : t.innerHTML;
    try {
      return await navigator.clipboard.writeText(s),
        void 0 === e.originalInnerHTML &&
        (e.originalInnerHTML = JSON.stringify({ value: e.innerHTML }),
          e.innerHTML = n.success),
        this.b._debouncers[e.copyId] = setTimeout(() => {
          e.innerHTML = JSON.parse(e.originalInnerHTML).value,
            delete e.originalInnerHTML;
        }, n.ms),
        !0;
    } catch (t) {
      return void 0 === e.originalInnerHTML &&
        (e.originalInnerHTML = JSON.stringify({ value: e.innerHTML }),
          e.innerHTML = n.failed),
        this.b._debouncers[e.copyId] = setTimeout(() => {
          e.innerHTML = JSON.parse(e.originalInnerHTML).value,
            delete e.originalInnerHTML;
        }, n.ms),
        !1;
    }
  }
  _randomFloat(t, e) {
    const n = new Uint32Array(1);
    crypto.getRandomValues(n);
    return n[0] / 4294967296 * Math.abs(e - t) + Math.min(t, e);
  }
  _randomInt(t, e) {
    const n = new Uint32Array(1);
    crypto.getRandomValues(n);
    return n[0] % (Math.abs(e - t) + 1) + Math.min(t, e);
  }
  _render(t, e = {}) {
    if (
      t instanceof Array == !1 && (t = [t]),
        "string" == typeof t[0] && void 0 !== this.b.svgs[t[0]]
    ) {
      let n = this.b.svgs[t[0]];
      for (const t of Object.keys(e)) {
        const s = (e[t] instanceof Array == !0 ? e[t] : [e[t]]).map((t) => {
          if ("string" == typeof t) return t;
          {
            const e = document.createElement("div");
            return e.appendChild(t), e.innerHTML;
          }
        }).join("");
        n = n.replaceAll(t, s);
      }
      const s = document.createElement("div");
      return s.innerHTML = n, s.firstChild;
    }
    let n = t.map((t) => {
      if ("string" == typeof t) {
        return void 0 !== this.b.templates[t] ? this.b.templates[t] : t;
      }
      {
        const e = document.createElement("div");
        return e.appendChild(t), e.innerHTML;
      }
    }).join("");
    for (const t of Object.keys(e)) {
      const s = (e[t] instanceof Array == !0 ? e[t] : [e[t]]).map((t) => {
        if (null === t) return "null";
        if (t instanceof DocumentFragment) {
          const e = document.createElement("div");
          return e.appendChild(t), e.innerHTML;
        }
        if (t instanceof Element) {
          const e = document.createElement("div");
          return e.appendChild(t), e.innerHTML;
        }
        return t;
      }).join("");
      n = n.replaceAll(t, s);
    }
    const s = document.createElement("template");
    return s.innerHTML = n, s.content;
  }
  _load(t, e) {
    const n = localStorage.getItem(t);
    if (null !== n) {
      try {
        return JSON.parse(n);
      } catch (t) {
        return;
      }
    }
    if (void 0 !== e) return e;
  }
  _loadPage(t, e) {
    const n = new URL(window.location.href);
    return this.b.load(`${n.pathname}-${t}`, e);
  }
  _switch(t = {}) {
    return t.__APPEND__ = t.__APPEND__ ? t.__APPEND__ : "",
      t.__CLASS__ = t.__CLASS__ ? t.__CLASS__ : "bitty-switch",
      t.__ID__ = t.__ID__ ? t.__ID__ : `switch_${this.b.uuid(!1)}`,
      t.__KEY__ = t.__KEY__ ? t.__KEY__ : "",
      t.__PREPEND__ = t.__PREPEND__ ? t.__PREPEND__ : "",
      t.__RECEIVE__ = t.__RECEIVE__ ? t.__RECEIVE__ : "",
      t.__SEND__ = t.__SEND__ ? t.__SEND__ : "",
      t.__STATE__ = t.__STATE__ ? t.__STATE__ : "false",
      this.b.render("switch", t);
  }
  _save(t, e) {
    return localStorage.setItem(t, JSON.stringify(e)), !0;
  }
  _savePage(t, e) {
    const n = new URL(window.location.href);
    return this.b.save(`${n.pathname}-${t}`, e);
  }
  _send(t, e) {
    const n = new i(t, e);
    dispatchEvent(n);
  }
  _setCSS(t, e) {
    document.documentElement.style.setProperty(t, e);
  }
  _shuffle(t) {
    for (let e = t.length - 1; e >= 1; e--) {
      const n = new Uint32Array(1);
      crypto.getRandomValues(n);
      const s = n[0] % e;
      [t[e], t[s]] = [t[s], t[e]];
    }
  }
  async _sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  _sort(t, e) {
    return t.toLowerCase().localeCompare(e.toLowerCase());
  }
  __splitSignalString(t) {
    return void 0 !== t ? t.trim().split(/\s+/m).map((t) => t.trim()) : [];
  }
  _tee(t, e = !0) {
    return !1 !== e && 0 !== e && console.log(t), t;
  }
  _time(t = new Date(), e = !1) {
    const n = {};
    new Intl.DateTimeFormat(void 0, {
      day: "2-digit",
      fractionalSecondDigits: 3,
      hour: "2-digit",
      hour12: !1,
      minute: "2-digit",
      month: "2-digit",
      second: "2-digit",
      year: "numeric",
    }).formatToParts(t).filter((t) => "literal" !== t.type).forEach((t) =>
      n[t.type] = t.value
    );
    const s = [n.year, n.month, n.day].join("-"),
      r = [n.hour, n.minute, n.second].join(":");
    return !0 === e ? `${s}T${r}.${n.fractionalSecond}` : `${s}T${r}`;
  }
  _timeMs(t) {
    return this.b.time(t, !0);
  }
  _trigger(t) {
    const e = new r(t);
    dispatchEvent(e);
  }
  __updateElement(t) {
    !0 !== t.bittyUpdated && (t.aria = (e) => {
      const n = t.closest(`[aria-${e}]`);
      return n ? n.getAttribute(`aria-${e}`) : void 0;
    },
      t.ariaBool = (e) => {
        const n = t.closest(`[aria-${e}]`);
        if (n) {
          const t = n.getAttribute(`aria-${e}`);
          return this.b._getBool(t);
        }
      },
      t.ariaFloat = (e) => {
        const n = t.closest(`[aria-${e}]`);
        return n ? parseFloat(n.getAttribute(`aria-${e}`)) : void 0;
      },
      t.ariaInt = (e) => {
        const n = t.closest(`[aria-${e}]`);
        return n ? parseInt(n.getAttribute(`aria-${e}`), 10) : void 0;
      },
      t.copy = async function () {
        if (t.value) {
          try {
            await navigator.clipboard.writeText(t.value);
          } catch (t) {
            return console.error("Could not copy .value from el."), !1;
          }
        } else {try {
            await navigator.clipboard.writeText(t.innerHTML);
          } catch (t) {
            return console.error("Could not copy .innerHTML from el."), !1;
          }}
        return !0;
      },
      t.innerHTMLBool = () => {
        if (void 0 !== t.innerHTML) return this.b._getBool(t.innerHTML);
      },
      t.innerHTMLFloat = () => parseFloat(t.innerHTML.trim().replace(",", "")),
      t.innerHTMLInt = () => parseInt(t.innerHTML.trim().replace(",", ""), 10),
      t.prop = (e) => {
        if (t.dataset && void 0 !== t.dataset[e]) return t.dataset[e];
        const n = t.closest(`[data-${e}]`);
        return null !== n ? n.dataset[e] : void 0;
      },
      t.propBool = (e) => {
        if (t.dataset && void 0 !== t.dataset[e]) {
          return this.b._getBool(t.dataset[e]);
        }
        const n = t.closest(`[data-${e}]`);
        return null !== n ? this.b._getBool(n.dataset[e]) : void 0;
      },
      t.propFloat = (e) => {
        if (t.dataset && void 0 !== t.dataset[e]) {
          return parseFloat(t.dataset[e]);
        }
        const n = t.closest(`[data-${e}]`);
        return null !== n ? parseFloat(n.dataset[e]) : void 0;
      },
      t.propInt = (e) => {
        if (t.dataset && void 0 !== t.dataset[e]) {
          return parseInt(t.dataset[e], 10);
        }
        const n = t.closest(`[data-${e}]`);
        return null !== n ? parseInt(n.dataset[e], 10) : void 0;
      },
      t.setAria = (e, n) => {
        const s = t.closest(`[aria-${e}]`);
        s ? s.setAttribute(`aria-${e}`, n) : t.setAttribute(`aria-${e}`, n);
      },
      t.setProp = (e, n) => {
        const s = t.closest(`[data-${e}]`);
        s ? s.dataset[e] = n : t.dataset[e] = n;
      },
      t.toggleAria = (e) => {
        const n = t.closest(`[aria-${e}]`);
        if (n) {
          let t = this.b._trueValues.indexOf(
            n.getAttribute(`aria-${e}`).toLowerCase(),
          );
          if (t >= 0) {
            return void n.setAttribute(`aria-${e}`, this.b._falseValues[t]);
          }
          if (
            t = this.b._falseValues.indexOf(
              n.getAttribute(`aria-${e}`).toLowerCase(),
            ), t >= 0
          ) return void n.setAttribute(`aria-${e}`, this.b._trueValues[t]);
        }
      },
      t.toggleProp = (e) => {
        const n = t.closest(`[data-${e}]`);
        if (n) {
          let t = this.b._trueValues.indexOf(
            n.getAttribute(`data-${e}`).toLowerCase(),
          );
          if (t >= 0) {
            return void n.setAttribute(`data-${e}`, this.b._falseValues[t]);
          }
          if (
            t = this.b._falseValues.indexOf(
              n.getAttribute(`data-${e}`).toLowerCase(),
            ), t >= 0
          ) return void n.setAttribute(`data-${e}`, this.b._trueValues[t]);
        }
      },
      t.valueBool = () => this.b._getBool(t.value),
      t.valueFloat = () => parseFloat(t.value),
      t.valueInt = () => parseInt(t.value, 10),
      t.bittyUpdated = !0);
  }
  _uuid(t = !0) {
    if (!1 === t) return self.crypto.randomUUID().replaceAll("-", "");
    return self.crypto.randomUUID();
  }
}
customElements.define(e, s);
class r extends Event {
  constructor(t) {
    super("bittytrigger", { bubbles: !0 }), this.signals = t;
  }
}
class i extends Event {
  constructor(t, e) {
    super("bittysend", { bubbles: !0 }), this.payload = t, this.signals = e;
  }
}
