# Mona - position

✨✨ 返回元素节点的位置信息，判断是否在视口范围内

[![npm](https://img.shields.io/npm/v/@monajs/position.svg?style=flat-square)](https://www.npmjs.com/package/@monajs/position) [![npm](https://img.shields.io/npm/dt/@monajs/position.svg?style=flat-square)](https://www.npmjs.com/package/@monajs/position)

## 使用场景

- 曝光埋点的时候判断是否可以曝光
- 获取元素的位置信息，返回的信息更全
...

## 安装

```bash
$ npm i --save @monajs/position
```

## 代码演示

```js
import position from '@monajs/position'

const ele = document.querySelector('#appWrapper')
position(ele).then(res => {
	console.log(res)
})
```

## 返回的节点信息
```
{
    bottom: -133,
    bottomToTop: 800,
    el: HTMLElement,
    height: 100,
    isCompletelyInViewport: false,
    isInViewport: false,
    left: 100,
    leftToRight: -275,
    right: 175,
    rightToLeft: 200,
    screenHeight: 667,
    screenWidth: 375,
    top: 700,
    topToBottom: 33,
    width: 100,
}
```

## 联系我
> 微信：599321378

