/**
 * 三角形
 * @param {*} options
 * {
 *      carrier: {
 *           wrapWidth: 0
 *           wrapHeight: 0
 *           canvas: null
 *           cxt: null
 *      },
 *      series: {
 *          type: "triangle",
 *          radius: 5,
 *          color: "#000",
 *          rotate: 0
 *      }
 * }
 */
function triangle(options) {

    let carrier = options.carrier
    let series = options.series
    let cxt = carrier.cxt

    carrier.canvas.width = carrier.wrapWidth
    carrier.canvas.height = carrier.wrapHeight

    let radius = Math.min(carrier.wrapWidth, carrier.wrapHeight) / 2
    let side = radius * (Math.sin(Math.PI/3)) * 2

    let center = {
        x: carrier.wrapWidth/2,
        y: carrier.wrapHeight/2
    }

    let top = {
        x: center.x,
        y: center.y - (radius)
    }
    let left = {
        x: center.x - (side / 2),
        y: center.y + (radius / 2)
    }
    let right = {
        x: center.x + (side / 2),
        y: center.y + (radius / 2)
    }

    cxt.fillStyle = series.color || "#000"
    cxt.strokeStyle = series.color || "#000"
    cxt.translate(center.x, center.y)
    cxt.rotate(series.rotate*Math.PI/180)
    cxt.translate(-center.x, -center.y)
    cxt.beginPath()
    cxt.moveTo(top.x, top.y)
    cxt.lineTo(left.x, left.y)
    cxt.lineTo(right.x, right.y)
    cxt.closePath()
    cxt.stroke()
    cxt.fill()
}

export default triangle