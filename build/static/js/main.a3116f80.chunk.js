(this["webpackJsonpwx-image-editor"]=this["webpackJsonpwx-image-editor"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var s=n(7),a=n(0),i=n.n(a),r=n(14),c=n.n(r),o=(n(94),n(86)),l=n(45),h=n(46),u=n(57),d=n(56),m=n(73),p=n.n(m),v=n(128),f=n(130),g=n(47),j=n(31),w={size:20,fill:"#fff"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(j.a)(Object(j.a)({},w),e),n=t.size,a=t.fill;return Object(s.jsx)("svg",{t:"1605843032504",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2822",width:n,height:n,children:Object(s.jsx)("path",{d:"M682.569143 266.221714c25.709714 19.273143 52.297143 11.574857 52.297143-22.308571v-58.697143h1.28c93.001143 0 151.698286 64.292571 151.698285 155.995429 0 56.996571-17.554286 78.445714-18.834285 93.860571-0.438857 11.995429 3.84 19.291429 13.714285 24.009143 13.275429 6.418286 28.708571 0.420571 35.986286-12.013714 13.293714-22.710857 22.710857-60.416 22.710857-106.276572 0-122.569143-81.846857-205.293714-204.854857-205.293714h-1.718857V72.502857c0-34.706286-26.148571-42.422857-52.278857-22.710857L565.577143 135.497143c-19.712 14.573714-19.712 31.286857 0 45.44zM192.713143 993.938286h424.722286c73.270857 0 110.134857-35.145143 110.134857-110.153143v-423.862857c0-74.989714-36.864-110.134857-110.134857-110.134857H192.713143c-73.289143 0-110.134857 35.145143-110.134857 110.134857v423.862857c0 75.008 36.845714 110.153143 110.134857 110.153143z m1.28-69.010286c-29.129143 0-42.422857-11.995429-42.422857-42.422857v-421.302857c0-30.409143 13.293714-42.422857 42.422857-42.422857h422.144c29.568 0 42.422857 12.013714 42.422857 42.422857v421.302857c0 30.427429-12.854857 42.422857-42.422857 42.422857z","p-id":"2823",fill:a})})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(j.a)(Object(j.a)({},w),e),n=t.size,a=t.fill;return Object(s.jsx)("svg",{t:"1605843505098",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"969",width:n,height:n,children:Object(s.jsx)("path",{d:"M448 864a32 32 0 0 1-18.88-6.08l-320-234.24a32 32 0 1 1 37.76-51.52l292.16 213.44 397.76-642.56a32 32 0 0 1 54.4 33.92l-416 672a32 32 0 0 1-21.12 14.4L448 864z","p-id":"970",fill:a})})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(j.a)(Object(j.a)({},w),e),n=t.size,a=t.fill;return Object(s.jsx)("svg",{t:"1605843652172",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1154",width:n,height:n,children:Object(s.jsx)("path",{d:"M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z","p-id":"1155",fill:a})})},y=n(30),k=n.n(y),C=n(58),M=n(74),_=n.n(M),E=n(75),R=n.n(E),D=(n(98),function(e){return e.startsWith("data:image")?e:new Promise((function(t){var n=new Image;n.src=e,n.onload=function(){var e=document.createElement("canvas"),s=n.width,a=n.height;e.width=s,e.height=a,e.getContext("2d").drawImage(n,0,0,s,a);var i=e.toDataURL("image/jpeg");t(i)}}))}),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={imageUrl:""},s.imageRef=i.a.createRef(),s.containerRef=i.a.createRef(),s.captureContainerRef=i.a.createRef(),s.imageInstance=null,s.domEvents=s.getDomEvents(),s.customEvents=s.getCustomEvents(),s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(C.a)(k.a.mark((function e(){var t,n,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83c\udf4d",typeof this.props.value),console.log(this.props.value),e.next=4,D(this.props.value);case 4:t=e.sent,this.setState({imageUrl:t}),n=this.imageRef.current,Transform(n),s=1,new R.a(n,{multipointStart:function(){s=n.scaleX},rotate:function(e){},pinch:function(e){n.scaleX=s*e.zoom,n.scaleY=s*e.zoom},pressMove:function(e){n.translateX+=e.deltaX,n.translateY+=e.deltaY,e.preventDefault()},swipe:function(e){}}),this.imageInstance=n;case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDomEvents",value:function(){return{}}},{key:"getCustomEvents",value:function(){var e=this;return{handleOk:function(){var t=Object(C.a)(k.a.mark((function t(){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.customEvents.getCaptureData();case 2:n=t.sent,e.props.onOk&&e.props.onOk(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),handleCancel:function(){e.props.onCancel&&e.props.onCancel()},handleRotateLeft:function(){e.imageInstance.rotateZ-=90},handleReset:function(){e.imageInstance.rotateZ=0,e.imageInstance.translateX=0,e.imageInstance.translateY=0},getCutContainerStyle:function(){var t=e.props;return{width:t.width,height:t.height}},getCaptureData:function(){var t=Object(C.a)(k.a.mark((function t(){var n,s,a,i,r,c,o,l,h;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.containerRef.current,s=e.captureContainerRef.current,a=s.getClientRects()[0],i=a.x,r=a.y,c=a.width,o=a.height,console.log({x:i,y:r,width:c,height:o}),t.next=6,_()(n,{x:i,y:r,width:c,height:o});case 6:return l=t.sent,h=l.toDataURL("image/jepg"),console.log(h),t.abrupt("return",h);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}},{key:"render",value:function(){var e=this.props,t=this.state,n=(this.domEvents,this.customEvents),a=t.imageUrl;e.width,e.height;return Object(s.jsxs)("div",{className:"modal-image-editor",children:[Object(s.jsx)("div",{className:"mask"}),Object(s.jsxs)("div",{className:"wrap",ref:this.containerRef,children:[Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("div",{className:"image-handler",children:Object(s.jsx)("img",{ref:this.imageRef,src:a})}),Object(s.jsxs)("div",{ref:this.captureContainerRef,className:"container-cut",style:n.getCutContainerStyle(),children:[Object(s.jsx)("div",{className:"dashed dashed-h"}),Object(s.jsx)("div",{className:"dashed dashed-v"})]})]}),Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsx)("span",{className:"icon icon-close",onClick:n.handleCancel,children:Object(s.jsx)(x,{})}),Object(s.jsx)("span",{className:"text-reset",onClick:n.handleReset,children:"\u8fd8\u539f"}),Object(s.jsx)("span",{className:"icon icon-confirm",onClick:n.handleOk,children:Object(s.jsx)(b,{})}),Object(s.jsx)("span",{className:"icon icon-rotate",onClick:n.handleRotateLeft,children:Object(s.jsx)(O,{})})]})]})]})}}]),n}(i.a.Component);I.defaultProps={width:100,height:100};n(99);var T=n.p+"static/media/demo.9e814f25.jpeg";new p.a;var X=T,Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={previewImageUrl:X,visibileModal:!1},s.elementInputFile=null,s.domEvents=s.getDomEvents(),s.customEvents=s.getCustomEvents(),s}return Object(h.a)(n,[{key:"componentWillUnmount",value:function(){document.body.removeChild(this.elementInputFile)}},{key:"getDomEvents",value:function(){var e=this;return{handleChangeImage:function(){if(e.elementInputFile)e.elementInputFile.click();else{var t=e.customEvents,n=document.createElement("input");Object(g.setStyle)(n,{visibility:"hidden"}),Object(g.setAttrs)(n,{type:"file",name:"shuoshubao-test",accept:".png, .jpg, .jpeg"}),document.body.appendChild(n),n.addEventListener("change",t.changeImageListener,!1),n.click(),e.elementInputFile=n}}}}},{key:"getCustomEvents",value:function(){var e=this;return{changeImageListener:function(t){var n=Object(o.a)(t.target.files,1)[0],s=(n.name,n.size,n.type,(window.URL||window.webkitURL).createObjectURL(n));e.setState({previewImageUrl:s},(function(){e.customEvents.showModal()}))},showModal:function(){e.setState({visibileModal:!0})},handleOk:function(t){e.setState({visibileModal:!1}),e.setState({previewImageUrl:t})},handleCancel:function(){e.setState({visibileModal:!1})}}}},{key:"render",value:function(){var e=this.state,t=this.domEvents,n=this.customEvents,a=e.previewImageUrl,i=e.visibileModal;return Object(s.jsxs)("div",{className:"app-container",children:[Object(s.jsxs)(v.a,{title:"Card title",bordered:!1,style:{width:300},children:[Object(s.jsx)(f.a,{type:"primary",onClick:function(){t.handleChangeImage()},children:"\u66f4\u6362\u7167\u7247"}),Object(s.jsx)("div",{onClick:n.showModal,children:Object(s.jsx)("img",{src:a,className:"preview-image"})})]}),i&&Object(s.jsx)(I,{value:a,width:300,height:300,onOk:n.handleOk,onCancel:n.handleCancel})]})}}]),n}(i.a.Component);c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(Y,{})}),document.getElementById("root"))},98:function(e,t){!function(){var e=function(e,t,n,s,a,i,r,c,o,l,h,u,d,m,p,v){this.elements=window.Float32Array?new Float32Array(16):[];var f=this.elements;f[0]=void 0!==e?e:1,f[4]=t||0,f[8]=n||0,f[12]=s||0,f[1]=a||0,f[5]=void 0!==i?i:1,f[9]=r||0,f[13]=c||0,f[2]=o||0,f[6]=l||0,f[10]=void 0!==h?h:1,f[14]=u||0,f[3]=d||0,f[7]=m||0,f[11]=p||0,f[15]=void 0!==v?v:1};function t(e,t,s){for(var a=0,i=t.length;a<i;a++){n(e,t[a],s)}}function n(e,t,n){Object.defineProperty(e,t,{get:function(){return this["__"+t]},set:function(e){e!==this["__"+t]&&(this["__"+t]=e,n())}})}e.DEG_TO_RAD=Math.PI/180,e.prototype={set:function(e,t,n,s,a,i,r,c,o,l,h,u,d,m,p,v){var f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=a,f[5]=i,f[9]=r,f[13]=c,f[2]=o,f[6]=l,f[10]=h,f[14]=u,f[3]=d,f[7]=m,f[11]=p,f[15]=v,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(e,t){var n=e.elements,s=this.elements,a=n[0],i=n[4],r=n[8],c=n[12],o=n[1],l=n[5],h=n[9],u=n[13],d=n[2],m=n[6],p=n[10],v=n[14],f=n[3],g=n[7],j=n[11],w=n[15],O=t[0],b=t[1],x=t[2],y=t[3],k=t[4],C=t[5],M=t[6],_=t[7],E=t[8],R=t[9],D=t[10],I=t[11],T=t[12],X=t[13],Y=t[14],N=t[15];return s[0]=a*O+i*k+r*E+c*T,s[4]=a*b+i*C+r*R+c*X,s[8]=a*x+i*M+r*D+c*Y,s[12]=a*y+i*_+r*I+c*N,s[1]=o*O+l*k+h*E+u*T,s[5]=o*b+l*C+h*R+u*X,s[9]=o*x+l*M+h*D+u*Y,s[13]=o*y+l*_+h*I+u*N,s[2]=d*O+m*k+p*E+v*T,s[6]=d*b+m*C+p*R+v*X,s[10]=d*x+m*M+p*D+v*Y,s[14]=d*y+m*_+p*I+v*N,s[3]=f*O+g*k+j*E+w*T,s[7]=f*b+g*C+j*R+w*X,s[11]=f*x+g*M+j*D+w*Y,s[15]=f*y+g*_+j*I+w*N,this},_rounded:function(e,t){return t=Math.pow(10,t||15),Math.round(e*t)/t},appendTransform:function(t,n,s,a,i,r,c,o,l,h,u,d,m,p){var v=c*e.DEG_TO_RAD,f=this._rounded(Math.cos(v)),g=this._rounded(Math.sin(v)),j=o*e.DEG_TO_RAD,w=this._rounded(Math.cos(j)),O=this._rounded(Math.sin(j)),b=l*e.DEG_TO_RAD,x=this._rounded(Math.cos(-1*b)),y=this._rounded(Math.sin(-1*b));return this.multiplyMatrices(this,[1,0,0,t,0,f,g,n,0,-g,f,s,0,0,0,1]),this.multiplyMatrices(this,[w,0,O,0,0,1,0,0,-O,0,w,0,0,0,0,1]),this.multiplyMatrices(this,[x*a,y*i,0,0,-y*a,x*i,0,0,0,0,1*r,0,0,0,0,1]),(h||u)&&this.multiplyMatrices(this,[this._rounded(Math.cos(h*e.DEG_TO_RAD)),this._rounded(Math.sin(h*e.DEG_TO_RAD)),0,0,-1*this._rounded(Math.sin(u*e.DEG_TO_RAD)),this._rounded(Math.cos(u*e.DEG_TO_RAD)),0,0,0,0,1,0,0,0,0,1]),(d||m||p)&&(this.elements[12]-=d*this.elements[0]+m*this.elements[4]+p*this.elements[8],this.elements[13]-=d*this.elements[1]+m*this.elements[5]+p*this.elements[9],this.elements[14]-=d*this.elements[2]+m*this.elements[6]+p*this.elements[10]),this}},window.Transform=function(n){t(n,["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],(function(){var e=n.matrix3D.identity().appendTransform(n.translateX,n.translateY,n.translateZ,n.scaleX,n.scaleY,n.scaleZ,n.rotateX,n.rotateY,n.rotateZ,n.skewX,n.skewY,n.originX,n.originY,n.originZ);n.style.transform=n.style.msTransform=n.style.OTransform=n.style.MozTransform=n.style.webkitTransform="perspective("+n.perspective+"px) matrix3d("+Array.prototype.slice.call(e.elements).join(",")+")"})),t(n,["perspective"],(function(){n.style.transform=n.style.msTransform=n.style.OTransform=n.style.MozTransform=n.style.webkitTransform="perspective("+n.perspective+"px) matrix3d("+Array.prototype.slice.call(n.matrix3D.elements).join(",")+")"})),n.matrix3D=new e,n.perspective=500,n.scaleX=n.scaleY=n.scaleZ=1,n.translateX=n.translateY=n.translateZ=n.rotateX=n.rotateY=n.rotateZ=n.skewX=n.skewY=n.originX=n.originY=n.originZ=0}}()},99:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.a3116f80.chunk.js.map