import EleResize from './EleResize'

import dot from './dot'
import line from './line'
import rect from './rect'
import cicle from './cicle'
import ellipse from './ellipse'
import triangle from './triangle'
import text from './text'

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
class summerClass {

    constructor(wrap) {
        this.wrap = wrap
        this.canvas = document.createElement('canvas')
        this.cxt = this.canvas.getContext("2d")
        wrap.appendChild(this.canvas)
        this.setSize(wrap)

        this.wrapOldWidth = this.wrapWidth
        this.wrapOldHeight = this.wrapHeight

        this.canvas.style.width = this.wrapWidth
        this.canvas.style.height = this.wrapHeight

        EleResize.on(wrap, () => {

            this.setSize(wrap)

            if (this.wrapOldWidth === this.wrapWidth && this.wrapOldHeight === this.wrapHeight) return
            this.options.carrier = {
                wrapWidth: this.wrapWidth,
                wrapHeight: this.wrapHeight,
                canvas: this.canvas,
                cxt: this.cxt
            }

            this.wrapOldWidth = this.wrapWidth
            this.wrapOldHeight = this.wrapHeight
            this.setOption(this.options)
        })

        // EleResize.off(resizeDiv, listener)

    }

    setSize(wrap) {
        this.wrapWidth = this.getNumber(getComputedStyle(wrap).getPropertyValue('width'))
        this.wrapHeight = this.getNumber(getComputedStyle(wrap).getPropertyValue('height'))
    }

    getNumber(numStr) {
        return numStr.match(/[0-9]+/g)[0]
    }

    wrapWidth = 0
    wrapHeight = 0
    wrapOldWidth = 0
    wrapOldHeight = 0
    canvas = null
    cxt = null
    options = null

    hideLoading() {
        // console.log("hide")
    }

    clear() {
        // console.log("clear")
    }

    setOption(options) {
        this.options = options
        let _options = {
            carrier: {
                wrap: this.wrap,
                wrapWidth: this.wrapWidth,
                wrapHeight: this.wrapHeight,
                canvas: this.canvas,
                cxt: this.cxt
            },
            series: options.series
        }
        switch (options.type) {
            case "dot":
                dot(_options)
                break;
            case "line":
                line(_options)
                break;
            case "rect":
                rect(_options)
                break;
            case "cicle":
                cicle(_options)
                break;
            case "ellipse":
                ellipse(_options)
                break;
            case "triangle":
                triangle(_options)
                break;
            case "text":
                text(_options)
                break;
        
            default:
                break;
        }
    }

}

const summer = {
    init(wrap) {
        return new summerClass(wrap)
    }
}

export default summer