/**
 * 获取节点元素位置信息
 * 向右向下为正
 * @param ele
 * @private
 */

const _isHTMLElement = (ele) => {
	return typeof ele === 'object' && ele instanceof HTMLElement
}

const _position = (ele) => {
	if (!_isHTMLElement(ele)) {
		throw TypeError('入参类型错误，要求为HTMLElement类型')
	}
	const rect = ele.getBoundingClientRect()
	const screenHeight = window.innerHeight || document.documentElement.clientHeight
	const screenWidth = window.innerWidth || document.documentElement.clientWidth
	let posi = {
		el: ele,
		width: rect.width,
		height: rect.height,
		top: rect.top,
		right: 0 - (rect.left + rect.width - screenWidth),
		bottom: 0 - (rect.top + rect.height - screenHeight),
		left: rect.left,
		screenHeight,
		screenWidth,
		topToBottom: rect.top - screenHeight,
		bottomToTop: rect.top + rect.height,
		leftToRight: rect.left - screenWidth,
		rightToLeft: rect.left + rect.width,
		isCompletelyInViewport: false,
		isInViewport: false
	}

	if (posi.topToBottom * posi.bottomToTop <= 0 && posi.leftToRight * posi.rightToLeft <= 0) {
		posi.isInViewport = true
	}

	if (posi.top >= 0 && posi.left >= 0 && posi.right >= 0 && posi.bottom >= 0) {
		posi.isCompletelyInViewport = true
	}

	return posi
}

const position = (ele) => {
	if (ele.length === 1) {
		ele = ele[0]
	}
	if (ele.length) {
		return ([].slice.call(ele)).map(item => {
			return _position(item)
		})
	} else {
		return _position(ele)
	}
}

position._position = _position

module.exports = position