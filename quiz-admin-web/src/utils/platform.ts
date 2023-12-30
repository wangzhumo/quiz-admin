export const isIOS = function () {
    return !!(
        navigator.userAgent.match('iPad') ??
        navigator.userAgent.match('iPhone') ??
        navigator.userAgent.match('iPod')
    )
}
export const isAndroid = function () {
    return !!navigator.userAgent.match('Android')
}
export function isPC() {
    return !(isIOS() ?? isAndroid())
}

window.isIOS = isIOS
window.isAndroid = isAndroid
window.isPC = isPC
