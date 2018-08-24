/**
 * 圆
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
function cicle(options) {

    let carrier = options.carrier
    let series = options.series
    let radius = series.radius
    let cxt = carrier.cxt

    if (/^[0-9]+.?[0-9]*$/.test(radius)) {
        if (Math.min(carrier.wrapWidth, carrier.wrapHeight, radius*2) != radius*2) {
            radius = Math.min(carrier.wrapWidth, carrier.wrapHeight) / 2
        }
    } else {
        radius = 5
    }

    carrier.canvas.width = carrier.wrapWidth
    carrier.canvas.height = carrier.wrapHeight

    cxt.fillStyle = series.color || "#000";
    cxt.beginPath();
    cxt.arc(carrier.wrapWidth/2, carrier.wrapHeight/2, radius, 0, Math.PI*2, true);
    cxt.closePath();
    cxt.fill();
}

export default cicle