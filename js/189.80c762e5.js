"use strict";(self["webpackChunkable_interactives"]=self["webpackChunkable_interactives"]||[]).push([[189],{9189:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(3396),o=n(7139),i=n(4870),r=(n(6699),(0,a.aZ)({name:"Roulette",emits:["wheelStart","wheelEnd"],props:{items:{type:Object,required:!0,validator:function(e){return e.length>=4}},firstItemIndex:{type:Object,required:!1,default:function(){return{value:0}}},wheelResultIndex:{type:Object,required:!1,default:function(){return{value:null}},validator:function(e){return"number"===typeof e.value}},centeredIndicator:{type:Boolean,required:!1,default:!1},indicatorPosition:{type:String,required:!1,default:"top",validator:function(e){return["top","right","bottom","left"].includes(e)}},size:{type:Number,required:!1,default:300},displayShadow:{type:Boolean,required:!1,default:!1},duration:{type:Number,required:!1,default:4},resultVariation:{type:Number,required:!1,default:0,validator:function(e){return e>=0&&e<=100}},easing:{type:String,required:!1,default:"ease",validator:function(e){return["ease","bounce"].includes(e)}},counterClockwise:{type:Boolean,required:!1,default:!1},horizontalContent:{type:Boolean,required:!1,default:!1},displayBorder:{type:Boolean,required:!1,default:!1},displayIndicator:{type:Boolean,required:!1,default:!0},baseDisplay:{type:Boolean,required:!1,default:!1},baseSize:{type:Number,required:!1,default:100},baseDisplayShadow:{type:Boolean,required:!1,default:!1},baseDisplayIndicator:{type:Boolean,required:!1,default:!1},baseBackground:{type:String,required:!1,default:""}},data:function(){return{randomIdRoulette:0,itemSelected:null,processingLock:!1}},computed:{itemAngle:function(){return 360/this.items.length},startingAngle:function(){return this.centeredIndicator?-1*this.firstItemIndex.value*this.itemAngle-this.itemAngle/2:-1*this.firstItemIndex.value*this.itemAngle},degreesVariation:function(){if(!this.resultVariation)return 0;var e=this.itemAngle/2*this.resultVariation/100*-1,t=this.itemAngle/2*this.resultVariation/100;return Number((Math.random()*(t-e)+e).toFixed(2))},counterClockWiseOperator:function(){return this.counterClockwise?-1:1}},mounted:function(){var e=this;this.randomIdRoulette=Number((999998*Math.random()+1).toFixed(0)),this.$nextTick((function(){e.reset(),document.querySelector("#wheel-container-".concat(e.randomIdRoulette," .wheel")).addEventListener("transitionend",(function(){e.processingLock=!1,e.$emit("wheel-end",e.itemSelected)}))}))},methods:{reset:function(){this.itemSelected=null,document.querySelector("#wheel-container-".concat(this.randomIdRoulette," .wheel")).style.transform="rotate(".concat(this.startingAngle,"deg)")},launchWheel:function(){if(!this.processingLock||null==this.itemSelected){var e;this.processingLock=!0,e=null!==this.wheelResultIndex.value?this.wheelResultIndex.value%this.items.length:Math.floor(Math.random()*this.items.length+1)-1;var t=document.querySelector("#wheel-container-".concat(this.randomIdRoulette," .wheel"));this.itemSelected=this.items[e],t.style.transform="rotate(".concat(1080*this.counterClockWiseOperator+-e*this.itemAngle-this.itemAngle/2+this.degreesVariation,"deg)"),this.$emit("wheel-start",this.itemSelected)}}}})),l=["id"],d={class:"wheel-base"},s={key:0,class:"wheel-base-indicator"},c=["innerHTML"];function u(e,t,n,i,r,u){return(0,a.wg)(),(0,a.iD)("div",{id:"wheel-container-".concat(e.randomIdRoulette),class:(0,o.C_)(["wheel-container",["indicator-".concat(e.indicatorPosition),{"wheel-container-indicator":e.displayIndicator},{"wheel-container-shadow":e.displayShadow},{"wheel-container-border":e.displayBorder}]])},[e.baseDisplay?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,o.C_)(["wheel-base-container",[{"wheel-base-container-shadow":e.baseDisplayShadow}]]),style:(0,o.j5)({width:"".concat(e.baseSize,"px"),height:"".concat(e.baseSize,"px"),background:"".concat(e.baseBackground)})},[(0,a._)("div",d,[(0,a.WI)(e.$slots,"baseContent")]),e.baseDisplayIndicator?((0,a.wg)(),(0,a.iD)("div",s)):(0,a.kq)("",!0)],6)):(0,a.kq)("",!0),(0,a._)("div",{class:(0,o.C_)(["wheel",["easing-".concat(e.easing),{"wheel-border":e.displayBorder}]]),style:(0,o.j5)({width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),transitionDuration:"".concat(e.duration,"s"),transform:"rotate(".concat(e.startingAngle,"deg)")})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,(function(t,n){return(0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"wheel-item",style:(0,o.j5)({transform:"rotate(".concat(e.itemAngle*n,"deg) skewY(").concat(-(90-e.itemAngle),"deg)"),background:t.background})},[(0,a._)("div",{class:(0,o.C_)(["content",{"horizontal-content":e.horizontalContent}]),style:(0,o.j5)({transform:"skewY(".concat(90-e.itemAngle,"deg) rotate(").concat(e.itemAngle/2,"deg)")})},[(0,a._)("span",{style:(0,o.j5)({color:t.textColor}),innerHTML:t.htmlContent},null,12,c)],6)],4)})),128))],6)],10,l)}function h(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var f='.wheel-container[data-v-2d0cf945],\n.wheel-base[data-v-2d0cf945],\n.wheel-base-container[data-v-2d0cf945],\n.wheel-base-indicator[data-v-2d0cf945] {\n  transition: transform 1s ease-in-out;\n}\n.wheel-container[data-v-2d0cf945] {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.wheel-container-indicator[data-v-2d0cf945]:before {\n  content: "";\n  position: absolute;\n  z-index: 4;\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 20px solid black;\n  transform: translateX(-50%);\n}\n.wheel-container.indicator-top[data-v-2d0cf945] {\n  transform: rotate(0deg);\n}\n.wheel-container.indicator-right[data-v-2d0cf945] {\n  transform: rotate(90deg);\n}\n.wheel-container.indicator-right .wheel-base[data-v-2d0cf945] {\n  transform: rotate(-90deg);\n}\n.wheel-container.indicator-bottom[data-v-2d0cf945] {\n  transform: rotate(180deg);\n}\n.wheel-container.indicator-bottom .wheel-base[data-v-2d0cf945] {\n  transform: rotate(-180deg);\n}\n.wheel-container.indicator-left[data-v-2d0cf945] {\n  transform: rotate(270deg);\n}\n.wheel-container.indicator-left .wheel-base[data-v-2d0cf945] {\n  transform: rotate(-270deg);\n}\n.wheel-container-border[data-v-2d0cf945] {\n  border: 8px solid black;\n}\n.wheel-container-shadow[data-v-2d0cf945] {\n  box-shadow: 5px 5px 15px -5px #000000;\n}\n.wheel-base-container[data-v-2d0cf945] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  border: 5px solid black;\n  transform: translate(-50%, -50%);\n}\n.wheel-base-container-shadow[data-v-2d0cf945] {\n  box-shadow: 5px 5px 15px -5px #000000;\n}\n.wheel-base-container .wheel-base[data-v-2d0cf945] {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.wheel-base-container .wheel-base-indicator[data-v-2d0cf945] {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n}\n.wheel-base-container .wheel-base-indicator[data-v-2d0cf945]:before {\n  content: "";\n  position: absolute;\n  z-index: 1;\n  top: -20px;\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-bottom: 20px solid black;\n  transform: translateX(-50%);\n}\n.wheel[data-v-2d0cf945] {\n  background: white;\n  border-radius: 50%;\n  margin: auto;\n  overflow: hidden;\n}\n.wheel.easing-ease[data-v-2d0cf945] {\n  transition: transform cubic-bezier(0.65, 0, 0.35, 1);\n}\n.wheel.easing-bounce[data-v-2d0cf945] {\n  transition: transform cubic-bezier(0.49, 0.02, 0.52, 1.12);\n}\n.wheel-border[data-v-2d0cf945]:after {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 3;\n  border-radius: 50%;\n  background-image: linear-gradient(to left, black 33%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 3px 1px;\n  /* background:linear-gradient(red,purple,orange); */\n  -webkit-mask: radial-gradient(transparent 65%, #000 66%);\n  mask: radial-gradient(transparent 65%, #000 66%);\n}\n.wheel-item[data-v-2d0cf945] {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 50%;\n  transform-origin: 0% 100%;\n  border: 1px solid black;\n}\n.wheel-item[data-v-2d0cf945]:nth-child(odd) {\n  background-color: skyblue;\n}\n.wheel-item[data-v-2d0cf945]:nth-child(even) {\n  background-color: pink;\n}\n.wheel .content[data-v-2d0cf945] {\n  position: absolute;\n  left: -100%;\n  width: 200%;\n  height: 200%;\n  text-align: center;\n  transform: skewY(30deg) rotate(0deg);\n  padding-top: 20px;\n}\n.wheel .content.horizontal-content[data-v-2d0cf945] {\n  left: initial;\n  right: 100%;\n  width: 50%;\n  height: 250%;\n  text-align: right;\n}\n.wheel .content.horizontal-content span[data-v-2d0cf945] {\n  display: block;\n  transform: rotate(270deg);\n}';h(f),r.render=u,r.__scopeId="data-v-2d0cf945";const p=(0,a._)("p",{class:"font-bold"},"The Wheel of Fortune",-1),m=(0,a._)("p",null,"Click the wheel to spin for a random topic!",-1),b=(0,a._)("br",null,null,-1),g={key:0,class:"fixed top-0 left-0 z-20 flex justify-center items-center w-full h-full backdrop-blur-sm overflow-hidden"},w={class:"flex max-h-[90%] md:max-h-[300px] w-11/12 max-w-2xl flex-col rounded-lg bg-white px-2 py-4 shadow-md drop-shadow-md"},v={class:"flex justify-between pl-6 mb-2"},x={class:"text-xl overflow-y-scroll px-4 w-full font-bold my-auto content-center"},y=(0,a._)("i",{class:"far fa-times text-lg"},null,-1),k=[y],S={class:"overflow-y-scroll px-6 w-full"},C={class:"leading-5 mb-2"},_=(0,a._)("br",null,null,-1),z=(0,a._)("br",null,null,-1),I={key:0,class:"text-xl text-[#90be6d] font-bold"},q={key:1,class:"text-xl text-[#f8961e] font-bold"},D={key:2,class:"text-xl text-[#d40000] font-bold"},B={key:3,class:"text-xl text-[#d40000] font-bold"},U={key:4,src:"https://i.giphy.com/media/1wX5TJZPqVw3HhyDYn/giphy.webp",class:"mx-auto w-20",alt:"Celebration animated gif"};var A={name:"WheelOfFortune",setup(e){const t="max-w-[1100px] mx-auto",n=60,l=2;let d=(0,i.iH)(null),s=(0,i.iH)(!1),c=(0,i.iH)("Try to talk about this topic for a minute. A timer is provided to help you practice."),u=(0,i.iH)(n);const h=(0,i.iH)(!1);let f=null;const y=(0,i.iH)([{id:1,htmlContent:"Next TV Show",desc:"What TV show should your listener(s) watch next?",background:"#94dff6"},{id:2,htmlContent:"Best pet",desc:"Which animal makes the best pet?",background:"#d3e5c5"},{id:3,htmlContent:"Ideal time period",desc:"What time period would be the most exciting to live in?",background:"#94dff6"},{id:4,htmlContent:"Ideal holiday",desc:"Describe the ideal all-expenses-paid holiday.",background:"#d3e5c5"},{id:5,htmlContent:"Best season",desc:"Which season would you choose to have year-round?",background:"#94dff6"},{id:6,htmlContent:"Study skills",desc:"What is the single most important skill needed to succeed at university?",background:"#d3e5c5"},{id:7,htmlContent:"Your degree",desc:"Why is it important to study your degree?",background:"#94dff6"},{id:8,htmlContent:"Do aliens exist?",desc:"Do aliens exist? Persuade your listener(s) of your stance.",background:"#d3e5c5"},{id:9,htmlContent:"Social media",desc:"Is social media beneficial or harmful, on balance?",background:"#94dff6"},{id:10,htmlContent:"Morning or night",desc:"Is it better to be a morning person or a night owl?",background:"#d3e5c5"}]);function A(){d.value.launchWheel()}function W(){}function j(){h.value?h.value=!1:R()}function R(e){s.value=!0,clearInterval(f),H()}function T(){s.value=!1,h.value=!0,d.value.reset()}function H(){u.value=n,f=setInterval((function(){u.value-=1,u.value<=0&&(clearInterval(f),N())}),1e3)}function N(){}return(e,n)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)([t,"my-4 text-center"])},[p,m,b,(0,a.Wm)((0,i.SU)(r),{ref_key:"wheel",ref:d,items:y.value,onClick:A,"result-variation":"0",size:"600",easing:"ease","horizontal-content":"","base-display":"","base-background":"#266578","indicator-position":"top","base-size":"45",onWheelStart:W,onWheelEnd:j,duration:h.value?.001:l},null,8,["items","duration"]),(0,i.SU)(s)?((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",w,[(0,a._)("div",v,[(0,a._)("div",x,(0,o.zw)((0,i.SU)(d).itemSelected.htmlContent),1),(0,a._)("div",null,[(0,a._)("div",{class:(0,o.C_)([(0,i.SU)(u)>0?"invisible":"","flex justify-center items-center w-8 h-8 -mt-1 rounded-full bg-primary-tint text-gray-400 transition-all duration-100 hover:bg-indigo-200 hover:text-gray-700 hover:rotate-90 cursor-pointer"]),onClick:T},k,2)])]),(0,a._)("div",S,[(0,a._)("div",C,[(0,a._)("p",null,(0,o.zw)((0,i.SU)(c)),1),_,(0,a._)("p",null,[(0,a._)("strong",null,'"'+(0,o.zw)((0,i.SU)(d).itemSelected.desc)+'"',1)]),z,(0,i.SU)(u)>=45&(0,i.SU)(u)<=60?((0,a.wg)(),(0,a.iD)("p",I,"Current time left: "+(0,o.zw)((0,i.SU)(u))+" seconds",1)):(0,a.kq)("",!0),(0,i.SU)(u)>=15&(0,i.SU)(u)<=44?((0,a.wg)(),(0,a.iD)("p",q,"Current time left: "+(0,o.zw)((0,i.SU)(u))+" seconds",1)):(0,a.kq)("",!0),(0,i.SU)(u)>=1&(0,i.SU)(u)<=14?((0,a.wg)(),(0,a.iD)("p",D,"Current time left: "+(0,o.zw)((0,i.SU)(u))+" seconds",1)):1===(0,i.SU)(u)?((0,a.wg)(),(0,a.iD)("p",B,"Current time left: "+(0,o.zw)((0,i.SU)(u))+" second",1)):0===(0,i.SU)(u)?((0,a.wg)(),(0,a.iD)("img",U)):(0,a.kq)("",!0),(0,a._)("button",{onClick:T,class:"inline-block float-left rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"},"Reset wheel")])])])])):(0,a.kq)("",!0)]))}};const W=A;var j=W}}]);
//# sourceMappingURL=189.80c762e5.js.map