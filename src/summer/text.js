/**
 * 文本
 * @param {*} options
 * {
 *      carrier: {
 *           wrapWidth: 0
 *           wrapHeight: 0
 *           canvas: null
 *           cxt: null
 *      },
 *      series: {
 *          type: "dot",
 *          radius: 5,
 *          color: "#000"
 *      }
 * }
 */

function getNumber(numStr) {
    let num = numStr.match(/[0-9]+/g)
    return num || 0
}

function getStyle(styleObj) {
    let styleStr = ''
    for (const key in styleObj) {
        if (styleObj.hasOwnProperty(key)) {
            styleStr += key.replace(/([A-Z])/g,"-$1").toLowerCase() + ": " + styleObj[key] + ";"
        }
    }
    return styleStr
}

function text(options) {

    let carrier = options.carrier
    let series = options.series

    if (carrier.wrap.getElementsByTagName('canvas')[0]) {
        carrier.wrap.removeChild(carrier.canvas)
    }
    if (carrier.wrap.getElementsByTagName('span')[0]) {
        carrier.wrap.removeChild(carrier.wrap.getElementsByTagName('span')[0])
    }

    let span = document.createElement('span')
    span.innerHTML = series.text
    let spanStyle = {
        display: 'inline-block',
        width: '100px',
        fontSize: '20px',
        color: '#000',
        wordBreak: 'break-all',
        textAlign: 'center'
    }
    span.setAttribute('style', getStyle(spanStyle))
    carrier.wrap.appendChild(span)

    let spanWidth = getNumber(getComputedStyle(span).getPropertyValue('width'))
    let spanHeight = getNumber(getComputedStyle(span).getPropertyValue('height'))

    let spanPosStyle = {
        position: 'relative',
        top: (carrier.wrapHeight-spanHeight)/2 + 'px',
        left: (carrier.wrapWidth-spanWidth)/2 + 'px',
    }

    for (const key in spanPosStyle) {
        if (spanPosStyle.hasOwnProperty(key)) {
            spanStyle[key] = spanPosStyle[key]
        }
    }

    span.setAttribute('style', getStyle(spanStyle))

}

export default text