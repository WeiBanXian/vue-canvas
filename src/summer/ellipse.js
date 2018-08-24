/**
 * 椭圆
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
function ellipse(options) {

    let carrier = options.carrier
    carrier.canvas.width = carrier.wrapWidth
    carrier.canvas.height = carrier.wrapHeight

    let series = options.series
    let cxt = carrier.cxt
    
    cxt.strokeStyle = series.color || "#000"
    cxt.fillStyle = series.color || "#000"
    BezierEllipse2(cxt, carrier.wrapWidth/2, carrier.wrapHeight/2, carrier.wrapWidth/2, carrier.wrapHeight/2)

}
/**
 * 
 * @param cxt 
 * @param x 
 * @param y 
 * @param a 
 * @param b 
 */
function BezierEllipse2(cxt, x, y, a, b)
{
   var k = .5522848,
   ox = a * k, // 水平控制点偏移量
   oy = b * k; // 垂直控制点偏移量

   cxt.beginPath();
   //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
   cxt.moveTo(x - a, y);
   cxt.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
   cxt.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
   cxt.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
   cxt.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
   cxt.closePath();
   cxt.stroke();
   cxt.fill();
}

export default ellipse