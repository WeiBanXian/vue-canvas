<template>
	<div>
		<div class="app text" :style="'width: '+width+';height: '+height">
		</div>
		<div class="app triangle" :style="'width: '+width+';height: '+height">
		</div>
		<div class="app ellipse" :style="'width: '+width+';height: '+height">
		</div>
		<div class="app cicle" :style="'width: '+width+';height: '+height">
		</div>
		<div class="app rect" :style="'width: '+width+';height: '+height">
		</div>
		<div class="app dot" :style="'width: '+width+';height: '+height">
		</div>
		<div class="app line" :style="'width: '+width+';height: '+height">
		</div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import summer from './summer'

export default {
	name: 'app',
	components: {
		HelloWorld
	},
	data() {
		return {
			width: '200px',
			height: '200px'
		}
	},
	mounted() {
		this.mytext = summer.init(document.getElementsByClassName("text")[0])
		this.mytext.hideLoading()
		this.mytext.clear()

		this.mytext.setOption({
			type: "text",
			series: {
				color: '#f88',
				text: "text"
			}
		})
		// let text = 'a'
		// setInterval(() => {
		// 	this.mytext.setOption({
		// 		type: "text",
		// 		series: {
		// 			color: '#f88',
		// 			text: text
		// 		}
		// 	})
		// 	text += '断点'
		// }, 1000)


		this.mytriangle = summer.init(document.getElementsByClassName("triangle")[0])
		this.mytriangle.hideLoading()
		this.mytriangle.clear()
		this.mytriangle.setOption({
			type: "triangle",
			series: {
				color: '#f88'
			}
		})
		// let rotate = 0
		// setInterval(() => {
		// 	this.mytriangle.setOption({
		// 		type: "triangle",
		// 		series: {
		// 			rotate: rotate
		// 		}
		// 	})
		// 	rotate += 5
		// }, 1000);

		this.myellipse = summer.init(document.getElementsByClassName("ellipse")[0])
		this.myellipse.hideLoading()
		this.myellipse.clear()
		this.myellipse.setOption({
			type: "ellipse",
			series: {
				color: '#f88'
			}
		})
		this.myCicle = summer.init(document.getElementsByClassName("cicle")[0])
		this.myCicle.hideLoading()
		this.myCicle.clear()
		this.myCicle.setOption({
			type: "cicle",
			series: {
				radius: '8',
				color: '#f80'
			}
		})

		this.myRect = summer.init(document.getElementsByClassName("rect")[0])
		this.myRect.hideLoading()
		this.myRect.clear()
		this.myRect.setOption({
			type: "rect",
			series: {
				color: '#f80'
			}
		})

		this.myDot = summer.init(document.getElementsByClassName("dot")[0])
		this.myDot.hideLoading()
		this.myDot.clear()
		this.myDot.setOption({
			type: "dot",
			series: {
				radius: '8',
				color: '#f00'
			}
		})

		this.myLine = summer.init(document.getElementsByClassName("line")[0])
		this.myLine.hideLoading()
		this.myLine.clear()
		this.myLine.setOption({
			type: "line",
			series: {
				vertical: true,
				color: '#f00',
				lineWidth: 5
			}
		})

		// setTimeout(() => {
		// 	this.width = '90px'
		// }, 1500);
	}
}
</script>

<style>
body {
	/* width: 100%;
	height: 100%; */
	background: #000;
}
.app {
	font-size: 0;
	margin: 60px auto;
  	width: 200px;
	height: 200px;
	background: #f1f1f1;
}
</style>
