/**
 * 画线
 * @param {*} options
 * {
 *      carrier: {
 *           wrapWidth: 0
 *           wrapHeight: 0
 *           canvas: null
 *           cxt: null
 *      },
 *      series: {
 *          type: "line",
 *          vertical: true,
 *          color: '#f00',
 *          lineWidth: 5
 *      }
 * }
 */
function dot(options) {

    let carrier = options.carrier
    carrier.canvas.width = carrier.wrapWidth
    carrier.canvas.height = carrier.wrapHeight

    let series = options.series
    let cxt = carrier.cxt
    let startPos = {
        x: 0,
        y: 0
    }
    let endPos = {
        x: 0,
        y: 0
    }

    if (series.vertical) {
        startPos.x = endPos.x = carrier.wrapWidth / 2
        startPos.y = 0, endPos.y = carrier.wrapHeight
    } else {
        startPos.x = 0, endPos.x = carrier.wrapWidth
        startPos.y = endPos.y = carrier.wrapHeight / 2
    }
    cxt.strokeStyle = series.color || "#000"
    cxt.lineWidth = series.lineWidth || 5
    cxt.moveTo(startPos.x,startPos.y)
    cxt.lineTo(endPos.x,endPos.y)
    cxt.stroke();

}

export default dot