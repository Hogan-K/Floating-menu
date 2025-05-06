# Floating Menu Component

## Description
A simple floating menu component built with native JavaScript. You can easily customize the menu size, content, colors, and more.

## CDN
```html
<script src="https://cdn.jsdelivr.net/gh/Hogan-K/Floating-menu@v1.0.0/dist/FloatingMenu.umd.js"></script>
```

## How to use

### Basic Usage

#### Init
```html
<script src="https://cdn.jsdelivr.net/gh/Hogan-K/Floating-menu@v1.0.0/dist/FloatingMenu.umd.js"></script>
<script>
    const floating_menu = new FloatingMenu()
    floating_menu.createFloatingMenu(document.body)
</script>
```


### API
#### `changeFloatPosition()`
Change the float position.

**parameter:**
- `top-left`, `top-right`, `bottom-left`, `bottom-right` - (default: `bottom-right`)
```js
floating_menu.changeFloatPosition('bottom-left')
```
---

#### `settingToTopFloat()`
Toggle a built-in top-float button that allows users to enable or disable a "back to top" action.

**parameter:**
- `status` Boolean
- `background` String

```js
floating_menu.settingToTopFloat({ status: true, background: 'rgba(123, 58, 237, 1)' })
```
---

#### `addFloat()`
Add a new floating item.

```js
floating_menu.addFloat()
```
---

#### `editFloat()`
Edit an existing float item by ID.

**parameter:**
- `id` String, Number // required
- `status` Boolean
- `link` String 
- `img_url` String 
- `background` String

```js
floating_menu.editFloat({
    id: 1,
    background: 'rgba(38, 246, 218, 1)'
})
```
---

#### `deleteFloat()`
Delete a float item by ID.

**parameter:**
- `id` String, Number // required

```js
floating_menu.deleteFloat(1)
```
---
