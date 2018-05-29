/**
 * 判断是否是微信
 * @return {Boolean}
 */
export const isWeixin = function () {
  const _userAgent = window.navigator.userAgent

  if (_userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}
