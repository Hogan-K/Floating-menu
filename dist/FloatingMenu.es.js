var _ = (l) => {
  throw TypeError(l);
};
var p = (l, t, i) => t.has(l) || _("Cannot " + i);
var e = (l, t, i) => (p(l, t, "read from private field"), i ? i.call(l) : t.get(l)), f = (l, t, i) => t.has(l) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(l) : t.set(l, i), h = (l, t, i, n) => (p(l, t, "write to private field"), n ? n.call(l, i) : t.set(l, i), i);
var s, u, o;
class b {
  constructor() {
    f(this, s);
    f(this, u);
    f(this, o);
    h(this, s, null), h(this, o, null), h(this, u, null), this.is_open = !1, this.default_btn_background = "rgba(123, 58, 237, 1)", this.floating_menu_info = {
      position: "bottom-right",
      btn_size: 40,
      menu_btn_background: this.default_btn_background,
      to_top_btn: {
        status: !1,
        background: this.default_btn_background
      },
      custom_floats: []
    };
  }
  // TODO: 可以補個 id, 防呆只能產一個的問題
  _mountModel() {
    e(this, o).body.setAttribute(
      "style",
      "display: flex; justify-content: center; align-items: end; margin: 5px 0;"
    );
    const t = e(this, o).createElement("div");
    t.setAttribute("class", "floating-menu"), t.innerHTML = `
            <div class="floats-block"> 
                <div id="to_top_btn" class="btn float" style="background: ${this.default_btn_background}; width: ${this.floating_menu_info.btn_size}; height: ${this.floating_menu_info.btn_size};">
                    <svg width="${this._outputSvgSize()}px" height="${this._outputSvgSize()}px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"
                         stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g fill="#ffffff">
                                <path d="M2.5 2.5a.75.75 0 010-1.5H13a.75.75 0 010 1.5H2.5zM2.985 9.795a.75.75 0 001.06-.03L7 6.636v7.614a.75.75 0 001.5 0V6.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 00.03 1.06z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div id="menu_btn" class="btn" style="background: ${this.default_btn_background}; width: ${this.floating_menu_info.btn_size}; height: ${this.floating_menu_info.btn_size};">
                <svg width="${this._outputSvgSize()}px" height="${this._outputSvgSize()}px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill="#ffffff" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
                    </g>
                </svg>
            </div>
        `, e(this, o).body.appendChild(t), e(this, o).querySelector("#menu_btn").addEventListener("click", () => {
      this._menuSwitch();
    });
    const n = e(this, o).querySelector("#to_top_btn");
    n.addEventListener("click", () => {
      this._scrollToTop();
    }), n.style.display = "none";
  }
  _menuSwitch() {
    const t = e(this, o).querySelector(".floats-block"), i = e(this, o).querySelector(".floating-menu");
    this.floating_menu_info.position.match("top") ? (t.style.bottom = `-${t.offsetHeight}px`, t.style.top = "auto", t.style.transform = this.is_open ? `scale(0) translateY(-${t.offsetHeight}px)` : "scale(1) translateY(0px)", t.style.opacity = this.is_open ? "0" : "1", e(this, s).style.height = `${this._outputContainerOriginSize(
      this.is_open ? i.offsetHeight : i.offsetHeight + t.offsetHeight
    )}px`) : this.floating_menu_info.position.match("bottom") && (t.style.top = `-${t.offsetHeight}px`, t.style.bottom = "auto", t.style.transform = this.is_open ? `scale(0) translateY(${t.offsetHeight}px)` : "scale(1) translateY(0px)", t.style.opacity = this.is_open ? "0" : "1", e(this, s).style.height = `${this._outputContainerOriginSize(
      this.is_open ? i.offsetHeight : i.offsetHeight + t.offsetHeight
    )}px`), this.is_open = !this.is_open;
  }
  _scrollToTop() {
    window.scrollTo({ top, behavior: "smooth" });
  }
  // container 大小的計算公式
  _outputContainerOriginSize(t) {
    return t + 20;
  }
  _outputSvgSize() {
    return this.floating_menu_info.btn_size * 0.6;
  }
  _outputContainerPosition(t) {
    const i = {
      "bottom-right": {
        top: "auto",
        bottom: "10px",
        left: "auto",
        right: "10px"
      },
      "bottom-left": {
        top: "auto",
        bottom: "10px",
        left: "10px",
        right: "auto"
      },
      "top-right": {
        top: "10px",
        bottom: "auto",
        left: "auto",
        right: "10px"
      },
      "top-left": {
        top: "10px",
        bottom: "auto",
        left: "10px",
        right: "auto"
      }
    };
    return t === "string" ? `top: ${i[this.floating_menu_info.position].top}; left: ${i[this.floating_menu_info.position].left}; bottom: ${i[this.floating_menu_info.position].bottom}; right: ${i[this.floating_menu_info.position].right}` : i[this.floating_menu_info.position];
  }
  // 重置 data-number 的值
  _resetFloatsId() {
    const t = e(this, o).querySelectorAll(".btn");
    t.forEach((i, n) => {
      n + 1 > t.length - 2 || (i.setAttribute("data-number", n + 1), this.floating_menu_info.custom_floats[n].id = n + 1);
    });
  }
  createFloatingMenu(t) {
    return new Promise((i) => {
      h(this, s, document.createElement("iframe")), e(this, s).setAttribute(
        "style",
        `border: none; width: ${this._outputContainerOriginSize(
          this.floating_menu_info.btn_size
        )}px; height: ${this._outputContainerOriginSize(
          this.floating_menu_info.btn_size
        )}px; transition: 0.5s; position: fixed; ${this._outputContainerPosition("string")}`
      ), t.appendChild(e(this, s)), h(this, u, e(this, s).contentWindow), h(this, o, e(this, s).contentDocument), e(this, o).open(), e(this, o).write(`
            <html lang="en">
                <head>
                    <link href="https://meyerweb.com/eric/tools/css/reset/reset200802.css" rel="stylesheet">
                    <style>
                    /*btn style*/
                    .btn {
                        box-sizing: border-box;
                        border-radius: 50%;
                        border: none;
                        cursor: pointer;
                        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
                        transition: 0.3s;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .btn:active {
                        transform: scale(1.3);
                    }
                    .btn::before {
                        content: "";
                        border-radius: 50%;
                        position: absolute;
                        inset: 0;
                        background: lightgray;
                        opacity: 0;
                        transition: opacity 0.3s;
                        pointer-events: none;                    
                    }
                    .btn:hover::before {
                        opacity: 0.2;
                    }
                    
                    /*floating-menu*/
                    .floating-menu {
                        position: relative;
                        z-index: 10;
                    }
                    
                    /*floats-block*/
                    .floats-block {
                        position: absolute;
                        transition: 0.5s;
                        opacity: 0;
                        display: flex;
                        flex-flow: column;
                        gap: 12px;
                        padding: 12px 0;
                        left: 0;
                        /*預設展開往上長*/
                        transform: scale(0) translateY(200px);
                        transform-origin: bottom center;
                    }
                    
                    .float {
                        overflow: hidden;
                        padding: 4px;
                    }
                    .float:hover {
                        opacity: 0.8;
                        transform: scale(1.2);
                    }
                    
                    .float img {
                        border-radius: 50%;
                        height: 100%;
                        width: 100%;
                    }
                    </style>
                </head>
                <body></body>
            </html>
        `), e(this, o).close(), e(this, s).onload = () => {
        this._mountModel(), i();
      };
    });
  }
  changeContainerPositionMode(t) {
    t && (this.is_open && this._menuSwitch(this.floating_menu_info.position), e(this, s).style.position = t);
  }
  changeFloatPosition(t) {
    this.is_open && this._menuSwitch(this.floating_menu_info.position), this.floating_menu_info.position = t, e(this, s).style.top = this._outputContainerPosition().top, e(this, s).style.bottom = this._outputContainerPosition().bottom, e(this, s).style.left = this._outputContainerPosition().left, e(this, s).style.right = this._outputContainerPosition().right, e(this, o).body.style.alignItems = t.match("bottom") ? "end" : "start";
    const i = e(this, o).querySelector(".floats-block");
    i.style.transform = `scale(0) translateY(${t.match("top") ? "-" : ""}${i.offsetHeight}px)`, i.style.transformOrigin = t.match("top") ? "top center" : "bottom center";
  }
  settingToTopFloat(t) {
    if (!t) return;
    this.is_open && this._menuSwitch(this.floating_menu_info.position);
    const i = e(this, o).querySelector("#to_top_btn"), n = {
      status: (a) => i.style.display = a ? "flex" : "none",
      background: (a) => i.style.background = a
    };
    for (const [a, r] of Object.entries(t))
      this.floating_menu_info.to_top_btn[a] = r, n[a](r);
  }
  changeBtnSize(t) {
    this.is_open && this._menuSwitch(this.floating_menu_info.position), this.floating_menu_info.btn_size = t, e(this, s).style.width = `${this._outputContainerOriginSize(t)}px`, e(this, s).style.height = `${this._outputContainerOriginSize(t)}px`, e(this, o).querySelectorAll(".btn").forEach((i) => {
      i.style.width = `${t}px`, i.style.height = `${t}px`, (i.getAttribute("id") === "menu_btn" || i.getAttribute("id") === "to_top_btn") && (i.querySelector("svg").style.width = `${this._outputSvgSize(t)}px`, i.querySelector("svg").style.height = `${this._outputSvgSize(t)}px`);
    });
  }
  changeMenuBtnBackground(t) {
    this.floating_menu_info.menu_btn_background = t, e(this, o).querySelector("#menu_btn").style.background = t || this.default_btn_background;
  }
  addFloat() {
    this.is_open && this._menuSwitch(this.floating_menu_info.position);
    const t = e(this, o).querySelectorAll(".btn").length - 2, i = e(this, o).querySelector("#to_top_btn"), n = e(this, o).createElement("div");
    n.setAttribute("class", "btn float"), n.setAttribute("data-number", t + 1), n.setAttribute(
      "style",
      `background: ${this.default_btn_background}; width: ${this.floating_menu_info.btn_size}; height: ${this.floating_menu_info.btn_size};`
    ), i.before(n), this.floating_menu_info.custom_floats.push({
      status: !0,
      id: t + 1,
      background: this.default_btn_background,
      img_url: "",
      link: ""
    });
  }
  editFloat(t) {
    if (t.id) {
      this.is_open && this._menuSwitch(this.floating_menu_info.position);
      for (const [i, n] of Object.entries(t))
        this.floating_menu_info.custom_floats[t.id - 1][i] = n;
      return new Promise((i) => {
        const n = e(this, o).querySelector(`[data-number="${t.id}"]`), a = {
          status: (r) => n.style.display = r ? "flex" : "none",
          background: (r) => n.style.background = r,
          img_url: (r) => n.innerHTML = `<img src="${r}" alt="float_${n.id}">`,
          link: (r) => n.addEventListener("click", () => {
            e(this, u).open(r);
          })
        };
        for (const [r, g] of Object.entries(t))
          r !== "id" && a[r](g);
        i();
      });
    }
  }
  deleteFloat(t) {
    this.is_open && this._menuSwitch(this.floating_menu_info.position), this.floating_menu_info.custom_floats.splice(t - 1, 1), e(this, o).querySelector(`[data-number="${t}"]`).remove(), this._resetFloatsId();
  }
  getFloatingMenuInfo() {
    return this.floating_menu_info;
  }
}
s = new WeakMap(), u = new WeakMap(), o = new WeakMap();
export {
  b as default
};
