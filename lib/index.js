'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 获取节点元素位置信息
 * 向右向下为正
 * @param ele
 * @private
 */

var _isHTMLElement = function _isHTMLElement(ele) {
	return (typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === 'object' && ele instanceof HTMLElement;
};

var _position = function _position(ele) {
	if (!_isHTMLElement(ele)) {
		throw TypeError('入参类型错误，要求为HTMLElement类型');
	}
	var rect = ele.getBoundingClientRect();
	var screenHeight = window.innerHeight || document.documentElement.clientHeight;
	var screenWidth = window.innerWidth || document.documentElement.clientWidth;
	var posi = {
		el: ele,
		width: rect.width,
		height: rect.height,
		top: rect.top,
		right: 0 - (rect.left + rect.width - screenWidth),
		bottom: 0 - (rect.top + rect.height - screenHeight),
		left: rect.left,
		screenHeight: screenHeight,
		screenWidth: screenWidth,
		topToBottom: rect.top - screenHeight,
		bottomToTop: rect.top + rect.height,
		leftToRight: rect.left - screenWidth,
		rightToLeft: rect.left + rect.width,
		isCompletelyInViewport: false,
		isInViewport: false
	};

	if (posi.topToBottom * posi.bottomToTop <= 0 && posi.leftToRight * posi.rightToLeft <= 0) {
		posi.isInViewport = true;
	}

	if (posi.top >= 0 && posi.left >= 0 && posi.right >= 0 && posi.bottom >= 0) {
		posi.isCompletelyInViewport = true;
	}

	return posi;
};

var position = function position(ele) {
	if (ele.length === 1) {
		ele = ele[0];
	}
	if (ele.length) {
		return [].slice.call(ele).map(function (item) {
			return _position(item);
		});
	} else {
		return _position(ele);
	}
};

position._position = _position;

module.exports = position;