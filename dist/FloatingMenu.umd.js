(function(l,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define(e):(l=typeof globalThis<"u"?globalThis:l||self,l.FloatingMenu=e())})(this,function(){"use strict";var _=l=>{throw TypeError(l)};var p=(l,e,r)=>e.has(l)||_("Cannot "+r);var i=(l,e,r)=>(p(l,e,"read from private field"),r?r.call(l):e.get(l)),f=(l,e,r)=>e.has(l)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(l):e.set(l,r),u=(l,e,r,n)=>(p(l,e,"write to private field"),n?n.call(l,r):e.set(l,r),r);var e,r,n;class l{constructor(){f(this,e);f(this,r);f(this,n);u(this,e,null),u(this,n,null),u(this,r,null),this.is_open=!1,this.default_btn_background="rgba(123, 58, 237, 1)",this.floating_menu_info={position:"bottom-right",btn_size:40,menu_btn_background:this.default_btn_background,to_top_btn:{status:!1,background:this.default_btn_background},custom_floats:[]}}_mountModel(){i(this,n).body.setAttribute("style","display: flex; justify-content: center; align-items: end; margin: 5px 0;");const t=i(this,n).createElement("div");t.setAttribute("class","floating-menu"),t.innerHTML=`
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
        `,i(this,n).body.appendChild(t),i(this,n).querySelector("#menu_btn").addEventListener("click",()=>{this._menuSwitch()});const s=i(this,n).querySelector("#to_top_btn");s.addEventListener("click",()=>{this._scrollToTop()}),s.style.display="none"}_menuSwitch(){const t=i(this,n).querySelector(".floats-block"),o=i(this,n).querySelector(".floating-menu");this.floating_menu_info.position.match("top")?(t.style.bottom=`-${t.offsetHeight}px`,t.style.top="auto",t.style.transform=this.is_open?`scale(0) translateY(-${t.offsetHeight}px)`:"scale(1) translateY(0px)",t.style.opacity=this.is_open?"0":"1",i(this,e).style.height=`${this._outputContainerOriginSize(this.is_open?o.offsetHeight:o.offsetHeight+t.offsetHeight)}px`):this.floating_menu_info.position.match("bottom")&&(t.style.top=`-${t.offsetHeight}px`,t.style.bottom="auto",t.style.transform=this.is_open?`scale(0) translateY(${t.offsetHeight}px)`:"scale(1) translateY(0px)",t.style.opacity=this.is_open?"0":"1",i(this,e).style.height=`${this._outputContainerOriginSize(this.is_open?o.offsetHeight:o.offsetHeight+t.offsetHeight)}px`),this.is_open=!this.is_open}_scrollToTop(){window.scrollTo({top,behavior:"smooth"})}_outputContainerOriginSize(t){return t+20}_outputSvgSize(){return this.floating_menu_info.btn_size*.6}_outputContainerPosition(t){const o={"bottom-right":{top:"auto",bottom:"10px",left:"auto",right:"10px"},"bottom-left":{top:"auto",bottom:"10px",left:"10px",right:"auto"},"top-right":{top:"10px",bottom:"auto",left:"auto",right:"10px"},"top-left":{top:"10px",bottom:"auto",left:"10px",right:"auto"}};return t==="string"?`top: ${o[this.floating_menu_info.position].top}; left: ${o[this.floating_menu_info.position].left}; bottom: ${o[this.floating_menu_info.position].bottom}; right: ${o[this.floating_menu_info.position].right}`:o[this.floating_menu_info.position]}_resetFloatsId(){const t=i(this,n).querySelectorAll(".btn");t.forEach((o,s)=>{s+1>t.length-2||(o.setAttribute("data-number",s+1),this.floating_menu_info.custom_floats[s].id=s+1)})}createFloatingMenu(t){return new Promise(o=>{u(this,e,document.createElement("iframe")),i(this,e).setAttribute("style",`border: none; width: ${this._outputContainerOriginSize(this.floating_menu_info.btn_size)}px; height: ${this._outputContainerOriginSize(this.floating_menu_info.btn_size)}px; transition: 0.5s; position: fixed; ${this._outputContainerPosition("string")}`),t.appendChild(i(this,e)),u(this,r,i(this,e).contentWindow),u(this,n,i(this,e).contentDocument),i(this,n).open(),i(this,n).write(`
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
        `),i(this,n).close(),i(this,e).onload=()=>{this._mountModel(),o()}})}changeContainerPositionMode(t){t&&(this.is_open&&this._menuSwitch(this.floating_menu_info.position),i(this,e).style.position=t)}changeFloatPosition(t){this.is_open&&this._menuSwitch(this.floating_menu_info.position),this.floating_menu_info.position=t,i(this,e).style.top=this._outputContainerPosition().top,i(this,e).style.bottom=this._outputContainerPosition().bottom,i(this,e).style.left=this._outputContainerPosition().left,i(this,e).style.right=this._outputContainerPosition().right,i(this,n).body.style.alignItems=t.match("bottom")?"end":"start";const o=i(this,n).querySelector(".floats-block");o.style.transform=`scale(0) translateY(${t.match("top")?"-":""}${o.offsetHeight}px)`,o.style.transformOrigin=t.match("top")?"top center":"bottom center"}settingToTopFloat(t){if(!t)return;this.is_open&&this._menuSwitch(this.floating_menu_info.position);const o=i(this,n).querySelector("#to_top_btn"),s={status:h=>o.style.display=h?"flex":"none",background:h=>o.style.background=h};for(const[h,a]of Object.entries(t))this.floating_menu_info.to_top_btn[h]=a,s[h](a)}changeBtnSize(t){this.is_open&&this._menuSwitch(this.floating_menu_info.position),this.floating_menu_info.btn_size=t,i(this,e).style.width=`${this._outputContainerOriginSize(t)}px`,i(this,e).style.height=`${this._outputContainerOriginSize(t)}px`,i(this,n).querySelectorAll(".btn").forEach(o=>{o.style.width=`${t}px`,o.style.height=`${t}px`,(o.getAttribute("id")==="menu_btn"||o.getAttribute("id")==="to_top_btn")&&(o.querySelector("svg").style.width=`${this._outputSvgSize(t)}px`,o.querySelector("svg").style.height=`${this._outputSvgSize(t)}px`)})}changeMenuBtnBackground(t){this.floating_menu_info.menu_btn_background=t,i(this,n).querySelector("#menu_btn").style.background=t||this.default_btn_background}addFloat(){this.is_open&&this._menuSwitch(this.floating_menu_info.position);const t=i(this,n).querySelectorAll(".btn").length-2,o=i(this,n).querySelector("#to_top_btn"),s=i(this,n).createElement("div");s.setAttribute("class","btn float"),s.setAttribute("data-number",t+1),s.setAttribute("style",`background: ${this.default_btn_background}; width: ${this.floating_menu_info.btn_size}; height: ${this.floating_menu_info.btn_size};`),o.before(s),this.floating_menu_info.custom_floats.push({status:!0,id:t+1,background:this.default_btn_background,img_url:"",link:""})}editFloat(t){if(t.id){this.is_open&&this._menuSwitch(this.floating_menu_info.position);for(const[o,s]of Object.entries(t))this.floating_menu_info.custom_floats[t.id-1][o]=s;return new Promise(o=>{const s=i(this,n).querySelector(`[data-number="${t.id}"]`),h={status:a=>s.style.display=a?"flex":"none",background:a=>s.style.background=a,img_url:a=>s.innerHTML=`<img src="${a}" alt="float_${s.id}">`,link:a=>s.addEventListener("click",()=>{i(this,r).open(a)})};for(const[a,g]of Object.entries(t))a!=="id"&&h[a](g);o()})}}deleteFloat(t){this.is_open&&this._menuSwitch(this.floating_menu_info.position),this.floating_menu_info.custom_floats.splice(t-1,1),i(this,n).querySelector(`[data-number="${t}"]`).remove(),this._resetFloatsId()}getFloatingMenuInfo(){return this.floating_menu_info}}return e=new WeakMap,r=new WeakMap,n=new WeakMap,l});
