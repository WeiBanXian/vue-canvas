/**
 * 矩形
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
function rect(options) {

    let carrier = options.carrier
    carrier.canvas.width = carrier.wrapWidth
    carrier.canvas.height = carrier.wrapHeight

    let series = options.series
    let cxt = carrier.cxt

    cxt.fillStyle = series.color
    cxt.fillRect(0, 0, carrier.wrapWidth, carrier.wrapHeight)

}

export default rect