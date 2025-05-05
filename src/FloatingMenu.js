export default class FloatingMenu {
    #container_el
    #container_window
    #container_doc

    constructor() {
        this.#container_el = null
        this.#container_doc = null
        this.#container_window = null
        this.is_open = false
        this.default_btn_background = 'rgba(123, 58, 237, 1)'
        this.floating_menu_info = {
            position: 'bottom-right',
            btn_size: 40,
            menu_btn_background: this.default_btn_background,
            to_top_btn: {
                status: false,
                background: this.default_btn_background,
            },
            custom_floats: [],
        }
    }

    // TODO: 可以補個 id, 防呆只能產一個的問題

    _mountModel() {
        this.#container_doc.body.setAttribute(
            'style',
            'display: flex; justify-content: center; align-items: end; margin: 5px 0;'
        )
        const floating_menu_el = this.#container_doc.createElement('div')
        floating_menu_el.setAttribute('class', 'floating-menu')
        floating_menu_el.innerHTML = `
            <div class="floats-block"> 
                <div id="to_top_btn" class="btn float" style="background: ${this.default_btn_background}; width: ${
            this.floating_menu_info.btn_size
        }; height: ${this.floating_menu_info.btn_size};">
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
            <div id="menu_btn" class="btn" style="background: ${this.default_btn_background}; width: ${
            this.floating_menu_info.btn_size
        }; height: ${this.floating_menu_info.btn_size};">
                <svg width="${this._outputSvgSize()}px" height="${this._outputSvgSize()}px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill="#ffffff" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
                    </g>
                </svg>
            </div>
        `
        this.#container_doc.body.appendChild(floating_menu_el)
        const menu_btn_el = this.#container_doc.querySelector('#menu_btn')
        menu_btn_el.addEventListener('click', () => {
            this._menuSwitch()
        })
        const to_top_btn_el = this.#container_doc.querySelector('#to_top_btn')
        to_top_btn_el.addEventListener('click', () => {
            this._scrollToTop()
        })
        to_top_btn_el.style.display = 'none'
    }

    _menuSwitch() {
        const float_block_el = this.#container_doc.querySelector('.floats-block')
        const floating_menu_el = this.#container_doc.querySelector('.floating-menu')
        if (this.floating_menu_info.position.match('top')) {
            // 往下長
            // 設定最遠按鈕距離
            float_block_el.style.bottom = `-${float_block_el.offsetHeight}px`
            float_block_el.style.top = 'auto'
            // 設定開關特效
            float_block_el.style.transform = this.is_open
                ? `scale(0) translateY(-${float_block_el.offsetHeight}px)`
                : 'scale(1) translateY(0px)'
            float_block_el.style.opacity = this.is_open ? '0' : '1'
            // 設定容器高度
            this.#container_el.style.height = `${this._outputContainerOriginSize(
                this.is_open ? floating_menu_el.offsetHeight : floating_menu_el.offsetHeight + float_block_el.offsetHeight
            )}px`
        } else if (this.floating_menu_info.position.match('bottom')) {
            // 往上長
            // 設定最遠按鈕距離
            float_block_el.style.top = `-${float_block_el.offsetHeight}px`
            float_block_el.style.bottom = 'auto'
            // 設定開關特效
            float_block_el.style.transform = this.is_open
                ? `scale(0) translateY(${float_block_el.offsetHeight}px)`
                : 'scale(1) translateY(0px)'
            float_block_el.style.opacity = this.is_open ? '0' : '1'
            // 設定容器高度
            this.#container_el.style.height = `${this._outputContainerOriginSize(
                this.is_open ? floating_menu_el.offsetHeight : floating_menu_el.offsetHeight + float_block_el.offsetHeight
            )}px`
        }

        this.is_open = !this.is_open
    }

    _scrollToTop() {
        window.scrollTo({ top, behavior: 'smooth' })
    }

    // container 大小的計算公式
    _outputContainerOriginSize(size) {
        /*
         * size: Number
         * */
        return size + 20
    }

    _outputSvgSize() {
        return this.floating_menu_info.btn_size * 0.6
    }

    _outputContainerPosition(type) {
        const position_styles = {
            'bottom-right': {
                top: 'auto',
                bottom: '10px',
                left: 'auto',
                right: '10px',
            },
            'bottom-left': {
                top: 'auto',
                bottom: '10px',
                left: '10px',
                right: 'auto',
            },
            'top-right': {
                top: '10px',
                bottom: 'auto',
                left: 'auto',
                right: '10px',
            },
            'top-left': {
                top: '10px',
                bottom: 'auto',
                left: '10px',
                right: 'auto',
            },
        }
        if (type === 'string') {
            return `top: ${position_styles[this.floating_menu_info.position].top}; left: ${
                position_styles[this.floating_menu_info.position].left
            }; bottom: ${position_styles[this.floating_menu_info.position].bottom}; right: ${
                position_styles[this.floating_menu_info.position].right
            }`
        } else {
            return position_styles[this.floating_menu_info.position]
        }
    }

    // 重置 data-number 的值
    _resetFloatsId() {
        const all_btn = this.#container_doc.querySelectorAll('.btn')
        all_btn.forEach((item, index) => {
            // menu_btn, to_top_btn 不用加 data-number
            if (index + 1 > all_btn.length - 2) return
            item.setAttribute('data-number', index + 1)

            // 更新數據
            this.floating_menu_info.custom_floats[index].id = index + 1
        })
    }

    createFloatingMenu(target_el) {
        return new Promise((resolve) => {
            this.#container_el = document.createElement('iframe')
            this.#container_el.setAttribute(
                'style',
                `border: none; width: ${this._outputContainerOriginSize(
                    this.floating_menu_info.btn_size
                )}px; height: ${this._outputContainerOriginSize(
                    this.floating_menu_info.btn_size
                )}px; transition: 0.5s; position: fixed; ${this._outputContainerPosition('string')}`
            )
            target_el.appendChild(this.#container_el)
            this.#container_window = this.#container_el.contentWindow
            this.#container_doc = this.#container_el.contentDocument
            this.#container_doc.open()
            this.#container_doc.write(`
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
        `)
            this.#container_doc.close()
            this.#container_el.onload = () => {
                this._mountModel()
                resolve()
            }
        })
    }

    changeContainerPositionMode(mode) {
        if (!mode) return
        if (this.is_open) {
            this._menuSwitch(this.floating_menu_info.position)
        }

        this.#container_el.style.position = mode
    }

    changeFloatPosition(position) {
        /*
         * position: String - top-left, top-right, bottom-left, bottom-right
         * */
        if (this.is_open) {
            this._menuSwitch(this.floating_menu_info.position)
        }

        // 更新數據
        this.floating_menu_info.position = position
        // 執行操作
        this.#container_el.style.top = this._outputContainerPosition().top
        this.#container_el.style.bottom = this._outputContainerPosition().bottom
        this.#container_el.style.left = this._outputContainerPosition().left
        this.#container_el.style.right = this._outputContainerPosition().right
        this.#container_doc.body.style.alignItems = position.match('bottom') ? 'end' : 'start'
        const float_block_el = this.#container_doc.querySelector('.floats-block')
        float_block_el.style.transform = `scale(0) translateY(${position.match('top') ? '-' : ''}${
            float_block_el.offsetHeight
        }px)`
        float_block_el.style.transformOrigin = position.match('top') ? 'top center' : 'bottom center'
    }

    settingToTopFloat(data) {
        /*
         * data: {
         *   status: Boolean (switch)
         *   background: String
         * }
         * */
        if (!data) return
        if (this.is_open) {
            this._menuSwitch(this.floating_menu_info.position)
        }

        const to_top_btn_el = this.#container_doc.querySelector('#to_top_btn')
        const operate_types = {
            status: (val) => (to_top_btn_el.style.display = val ? 'flex' : 'none'),
            background: (val) => (to_top_btn_el.style.background = val),
        }

        // 有帶值才做事
        for (const [key, value] of Object.entries(data)) {
            // 更新數據
            this.floating_menu_info.to_top_btn[key] = value
            // 執行操作
            operate_types[key](value)
        }
    }

    changeBtnSize(size) {
        /*
         * size: Number
         * */
        if (this.is_open) {
            this._menuSwitch(this.floating_menu_info.position)
        }

        // 更新數據
        this.floating_menu_info.btn_size = size
        // 執行操作
        this.#container_el.style.width = `${this._outputContainerOriginSize(size)}px`
        this.#container_el.style.height = `${this._outputContainerOriginSize(size)}px`
        this.#container_doc.querySelectorAll('.btn').forEach((item) => {
            item.style.width = `${size}px`
            item.style.height = `${size}px`
            if (item.getAttribute('id') === 'menu_btn' || item.getAttribute('id') === 'to_top_btn') {
                item.querySelector('svg').style.width = `${this._outputSvgSize(size)}px`
                item.querySelector('svg').style.height = `${this._outputSvgSize(size)}px`
            }
        })
    }

    changeMenuBtnBackground(background) {
        /*
         * background: String
         * */
        // 更新數據
        this.floating_menu_info.menu_btn_background = background
        // 執行操作
        this.#container_doc.querySelector('#menu_btn').style.background = background || this.default_btn_background
    }

    addFloat() {
        if (this.is_open) {
            this._menuSwitch(this.floating_menu_info.position)
        }

        // 執行操作
        const total_btn = this.#container_doc.querySelectorAll('.btn').length - 2
        const to_top_btn_el = this.#container_doc.querySelector('#to_top_btn')
        const new_float_el = this.#container_doc.createElement('div')
        new_float_el.setAttribute('class', 'btn float')
        new_float_el.setAttribute('data-number', total_btn + 1)
        new_float_el.setAttribute(
            'style',
            `background: ${this.default_btn_background}; width: ${this.floating_menu_info.btn_size}; height: ${this.floating_menu_info.btn_size};`
        )
        to_top_btn_el.before(new_float_el)
        // 更新數據
        this.floating_menu_info.custom_floats.push({
            status: true,
            id: total_btn + 1,
            background: this.default_btn_background,
            img_url: '',
            link: '',
        })
    }

    editFloat(float_data) {
        /*
         * float_data: {
         *   id: String, Number - 必填
         *   status: Boolean (switch)
         *   link: String
         *   img_url: String
         *   background: String
         * }
         * */

        if (!float_data.id) return

        if (this.is_open) {
            this._menuSwitch(this.floating_menu_info.position)
        }

        // 有帶值才做事
        for (const [key, value] of Object.entries(float_data)) {
            // 更新數據
            this.floating_menu_info.custom_floats[float_data.id - 1][key] = value
        }

        return new Promise((resolve) => {
            const float_el = this.#container_doc.querySelector(`[data-number="${float_data.id}"]`)
            const operate_types = {
                status: (val) => (float_el.style.display = val ? 'flex' : 'none'),
                background: (val) => (float_el.style.background = val),
                img_url: (val) => (float_el.innerHTML = `<img src="${val}" alt="float_${float_el.id}">`),
                link: (val) =>
                    float_el.addEventListener('click', () => {
                        this.#container_window.open(val)
                    }),
            }

            //
            for (const [key, value] of Object.entries(float_data)) {
                if (key === 'id') continue
                operate_types[key](value)
            }
            resolve()
        })
    }

    deleteFloat(id) {
        /*
         * id: String, Number - 必填
         * */
        if (this.is_open) {
            this._menuSwitch(this.floating_menu_info.position)
        }

        // 更新數據
        this.floating_menu_info.custom_floats.splice(id - 1, 1)
        // 執行操作
        this.#container_doc.querySelector(`[data-number="${id}"]`).remove()
        this._resetFloatsId()
    }

    getFloatingMenuInfo() {
        return this.floating_menu_info
    }
}
