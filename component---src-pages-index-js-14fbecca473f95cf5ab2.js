(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{M1cl:function(e,t,a){!function(e,t,a,r,n){if("customElements"in a)n();else{if(a.AWAITING_WEB_COMPONENTS_POLYFILL)return void a.AWAITING_WEB_COMPONENTS_POLYFILL.then(n);var o=a.AWAITING_WEB_COMPONENTS_POLYFILL=c();o.then(n);var s=a.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",i=a.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in a?l(s).then((function(){o.isDone=!0,o.exec()})):l(i).then((function(){l(s).then((function(){o.isDone=!0,o.exec()}))}))}function c(){var e=[];return e.isDone=!1,e.exec=function(){e.splice(0).forEach((function(e){e()}))},e.then=function(t){return e.isDone?t():e.push(t),e},e}function l(e){var t=c(),a=r.createElement("script");return a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,t.isDone=!0,t.exec())}:a.onload=function(){t.isDone=!0,t.exec()},a.src=e,r.getElementsByTagName("head")[0].appendChild(a),a.then=t.then,a}}(0,0,window,document,(function(){var t;window,t=function(){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a,r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(s).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a})).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<e.length;n++){var s=e[n];"number"==typeof s[0]&&r[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),t.push(s))}},t}},function(e,t,a){var r=a(3);e.exports="string"==typeof r?r:r.toString()},function(e,t,a){var r=a(4);e.exports="string"==typeof r?r:r.toString()},function(e,t,a){(e.exports=a(0)(!1)).push([e.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(e,t,a){(e.exports=a(0)(!1)).push([e.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(e,t,a){"use strict";a.r(t);var r,n,o,s,i=a(1),c=a.n(i),l=a(2),m=a.n(l),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=(n=(r=Object).getPrototypeOf||function(e){return e.__proto__},o=r.setPrototypeOf||function(e,t){return e.__proto__=t,e},s="object"===("undefined"==typeof Reflect?"undefined":d(Reflect))?Reflect.construct:function(e,t,a){var r,n=[null];return n.push.apply(n,t),r=e.bind.apply(e,n),o(new r,a.prototype)},function(e){var t=n(e);return o(e,o((function(){return s(t,arguments,n(this).constructor)}),t))}),u=window,b={},h=document.createElement("template"),g=function(){return!!u.ShadyCSS};h.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+c.a+"\n"+m.a+'\n</style>\n<div id="icon"></div>';var E=f(function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.$ui=e.attachShadow({mode:"open"}),e.$ui.appendChild(e.ownerDocument.importNode(h.content,!0)),g()&&u.ShadyCSS.styleElement(e),e._state={$iconHolder:e.$ui.getElementById("icon"),type:e.getAttribute("type")},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),p(t,null,[{key:"getIconSvg",value:function(e,t){var a=this.cdnUrl+"/regular/bx-"+e+".svg";return"solid"===t?a=this.cdnUrl+"/solid/bxs-"+e+".svg":"logo"===t&&(a=this.cdnUrl+"/logos/bxl-"+e+".svg"),a&&b[a]||(b[a]=new Promise((function(e,t){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?t(new Error(this.status+" "+this.responseText)):e(this.responseText)})),r.onerror=t,r.onabort=t,r.open("GET",a),r.send()}))),b[a]}},{key:"define",value:function(e){e=e||this.tagName,g()&&u.ShadyCSS.prepareTemplate(h,e),customElements.define(e,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.0.7/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),p(t,[{key:"attributeChangedCallback",value:function(e,t,a){var r=this._state.$iconHolder;switch(e){case"type":!function(e,t,a){var r=e._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!a||"solid"!==a&&"logo"!==a?"regular":a,void 0!==r.currentName&&e.constructor.getIconSvg(r.currentName,r.type).then((function(e){r.type===a&&(r.$iconHolder.innerHTML=e)})).catch((function(e){console.error("Failed to load icon: "+r.currentName+"\n"+e)}))}(this,0,a);break;case"name":!function(e,t,a){var r=e._state;r.currentName=a,r.$iconHolder.textContent="",a&&void 0!==r.type&&e.constructor.getIconSvg(a,r.type).then((function(e){r.currentName===a&&(r.$iconHolder.innerHTML=e)})).catch((function(e){console.error("Failed to load icon: "+a+"\n"+e)}))}(this,0,a);break;case"color":r.style.fill=a||"";break;case"size":!function(e,t,a){var r=e._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),a&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=a.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,a);break;case"rotate":t&&r.classList.remove("bx-rotate-"+t),a&&r.classList.add("bx-rotate-"+a);break;case"flip":t&&r.classList.remove("bx-flip-"+t),a&&r.classList.add("bx-flip-"+a);break;case"animation":t&&r.classList.remove("bx-"+t),a&&r.classList.add("bx-"+a)}}},{key:"connectedCallback",value:function(){g()&&u.ShadyCSS.styleElement(this)}}]),t}());a.d(t,"BoxIconElement",(function(){return E})),t.default=E,E.define()}])},e.exports=t()}))},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=(a("M1cl"),a("Zttt")),s=a("vrFN"),i=a("O4uV"),c=a.n(i),l=a("Wbzz"),m=["button-cta","button-regular--solid","button-regular--outline"],d=["right-arrow-alt"],p=["home-button-cta"],f=function(e){var t=e.children,a=e.href,r=e.variant,o=e.icon,s=e.space,i=m.includes(r)?r:"",c=!!d.includes(o)&&o,f=p.includes(s)?s:p[0];return n.a.createElement(l.Link,{to:a,className:"button "+i+" "+f},n.a.createElement("span",null,t),c?n.a.createElement("box-icon",{className:"button-link__icon",name:"right-arrow-alt",type:"regular",size:"1.2rem",animation:"fade-right",color:"#FFFFFF"}):"")},u=function(){return n.a.createElement("section",{className:"home",id:"home"},n.a.createElement("div",{className:"home__container bd-container"},n.a.createElement("div",{className:"home__data"},n.a.createElement("span",{className:"home__greeting"},"Hola ",n.a.createElement("span",{role:"img","aria-label":"Saludos"},"🖐"),", Soy Rodrigo García, Diseñador UI & Desarrollador Web,"," ",n.a.createElement("span",{className:"text-available-indicator"},"disponible para trabajar")),n.a.createElement("h1",{className:"home__headline text-xxl font-extrabold"},"Una excelente experiencia de usuario se traduce en el éxito de su negocio"),n.a.createElement("span",{className:"home__presentation"},"Soy un diseñador freelance, transformo tu idea en hermosos productos digitales, alineados con tus objetivos para satisfacer a tus usuarios y llevar ",n.a.createElement("span",{className:"font-bold"},"tu negocio al siguiente nivel"),". Como soy un diseñador con conocimientos de programación, también puedo ayudarte en la implementación."),n.a.createElement("div",{className:"button__container"},n.a.createElement(f,{href:"https://t3bjfizqpcg.typeform.com/to/G9DIndPO",variant:"button-cta",icon:"right-arrow-alt",space:"home-button-cta"},"Consulta gratis"),n.a.createElement(f,{href:"/#my-works"},"Mis trabajos"))),n.a.createElement("div",{className:"home__img"},n.a.createElement("img",{src:c.a,alt:"Autor del portfolio"}))))},b=function(e){var t=e.children,a=e.href;return n.a.createElement(l.Link,{to:a,className:"button-link button-link-animation"},n.a.createElement("span",null,t),n.a.createElement("box-icon",{className:"button-link__icon",name:"right-arrow-alt",type:"regular",size:"1.2rem",color:"#F31658"}))};b.defaultProps={href:null};var h=b,g=function(){return n.a.createElement("section",{className:"about section section__padding-off",id:"about"},n.a.createElement("div",{className:"bd-container"},n.a.createElement("div",{className:"about__container wrapper wrapper__center"},n.a.createElement("h2",{className:"section-title biggest-title"},"Pienso de forma diferente,",n.a.createElement("br",null)," creo hermosas experiencias"),n.a.createElement("p",{className:"about__description support-copy font-bold"},"Un poco sobre mí, me apasiona el diseño, pero diseñar teniendo en cuenta la experiencia del usuario, no solo quiero hacer productos bonitos sino también usables. Me gustaría ayudarte a descubrir la mejor solución para tus necesidades y las de tus usuarios para encaminar tu negocio hacia el éxito."),n.a.createElement("div",{className:"section-support-content"},n.a.createElement(h,{href:"/my-story"},"Más sobre mi")))))},E=function(){return n.a.createElement("section",{className:"services section bd-container"},n.a.createElement("span",{className:"section-subtitle"},"Servicios"),n.a.createElement("h2",{className:"section-title"},"Lo que hago"),n.a.createElement("p",{className:"section-description"},"Puedo ayudarte desde el diseño hasta la codificación, siempre me gusta estar actualizado en el uso de herramientas, algunas de las que uso son figma, adobe XD, webflow y wordpress."),n.a.createElement("div",{className:"services__container wrapper bd-grid"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("box-icon",{name:"layer",type:"regular",color:"#010101",size:"2rem"})),n.a.createElement("h3",{className:"card__title"},"Desarrollo Web"),n.a.createElement("div",{className:"card__description"},"Creo sitios web de alta calidad que se cargan rápidamente aplicando buenas prácticas de SEO.")),n.a.createElement("div",{className:"card__content"},n.a.createElement("div",{className:"tag-services"},n.a.createElement("ul",null,n.a.createElement("li",{className:"label label-red"},"Landing Page"),n.a.createElement("li",{className:"label label-red"},"Website Personal y Corporativa"),n.a.createElement("li",{className:"label label-red"},"Ecommerce"),n.a.createElement("li",{className:"label label-red"},"Webs con Webflow o Wordpress")),n.a.createElement("a",{href:"https://t3bjfizqpcg.typeform.com/to/G9DIndPO",className:"button"},"Necesito esto")))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("box-icon",{name:"vector",type:"regular",color:"#010101",size:"2rem"})),n.a.createElement("h3",{className:"card__title"},"Diseño Mobile & Web App"),n.a.createElement("div",{className:"card__description"},"Diseño interfaces móviles y web aplicando buenas prácticas de UI & UX en todo momento.")),n.a.createElement("div",{className:"card__content"},n.a.createElement("div",{className:"tag-services"},n.a.createElement("ul",null,n.a.createElement("li",{className:"label label-blue"},"Websites"),n.a.createElement("li",{className:"label label-blue"},"Mobile & Web App"),n.a.createElement("li",{className:"label label-blue"},"Prototipado y Animación"),n.a.createElement("li",{className:"label label-blue"},"Sistema de Diseño"),n.a.createElement("li",{className:"label label-blue"},"Diseño UX/UI")),n.a.createElement("a",{href:"https://t3bjfizqpcg.typeform.com/to/G9DIndPO",className:"button"},"Necesito esto")))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("box-icon",{name:"code-block",type:"regular",color:"#010101",size:"2rem"})),n.a.createElement("h3",{className:"card__title"},"Desarrollo Frontend"),n.a.createElement("div",{className:"card__description"},"Creo aplicaciones web o sitios web personalizados con tecnologías como React y otras.")),n.a.createElement("div",{className:"card__content"},n.a.createElement("div",{className:"tag-services"},n.a.createElement("ul",null,n.a.createElement("li",{className:"label label-green"},"Frontend con React"),n.a.createElement("li",{className:"label label-green"},"CMS"),n.a.createElement("li",{className:"label label-green"},"Diseño Responsivo"),n.a.createElement("li",{className:"label label-green"},"Optimización Web"))),n.a.createElement("a",{href:"https://t3bjfizqpcg.typeform.com/to/G9DIndPO",className:"button"},"Necesito esto")))),n.a.createElement("div",{className:"section-support-content"},n.a.createElement(h,{href:"/my-story/#knowledge"},"Más sobre mis habilidades")))},_=function(){return n.a.createElement("section",{className:"as-work section bd-container",id:"as-work"},n.a.createElement("span",{className:"section-subtitle"},"Mi proceso"),n.a.createElement("h2",{className:"section-title"},"Los pasos de mi proceso creativo "),n.a.createElement("p",{className:"section-description"},"Esta es mi forma de trabajar, la utilizo para conseguir los objetivos acordados y evitar malentendidos y retrasos."),n.a.createElement("div",{className:"as-work__container wrapper bd-grid"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("div",{className:"box__icon"},n.a.createElement("box-icon",{name:"line-chart",type:"regular",color:"#010101",size:"1.2rem"}))),n.a.createElement("h3",{className:"card__title"},n.a.createElement("span",{style:{fontWeight:"800"}},"1.")," Estrategia"),n.a.createElement("div",{className:"card__description"},"Trazo la estrategia basada en estudios de su idea o negocio junto contigo.")),n.a.createElement("div",{className:"card__content"})),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("div",{className:"box__icon"},n.a.createElement("box-icon",{name:"paint",type:"regular",color:"#010101",size:"1.2rem"}))),n.a.createElement("h3",{className:"card__title"},n.a.createElement("span",{style:{fontWeight:"800"}},"2.")," Diseño"),n.a.createElement("div",{className:"card__description"},"Establezco la usabilidad y apariencia que se aplicará en el proyecto.")),n.a.createElement("div",{className:"card__content"})),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("div",{className:"box__icon"},n.a.createElement("box-icon",{name:"code",type:"regular",color:"#010101",size:"1.2rem"}))),n.a.createElement("h3",{className:"card__title"},n.a.createElement("span",{style:{fontWeight:"800"}},"3.")," Desarrollo"),n.a.createElement("div",{className:"card__description"},"Implemento el proyecto con las tecnologías adecuadas.")),n.a.createElement("div",{className:"card__content"})),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("div",{className:"box__icon"},n.a.createElement("box-icon",{name:"wrench",type:"regular",color:"#010101",size:"1.2rem"}))),n.a.createElement("h3",{className:"card__title"},n.a.createElement("span",{style:{fontWeight:"800"}},"4.")," Mejora"),n.a.createElement("div",{className:"card__description"},"Realizo una revisión general para pulir y corregir los últimos detalles.")),n.a.createElement("div",{className:"card__content"})),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"card__icon"},n.a.createElement("div",{className:"box__icon"},n.a.createElement("box-icon",{name:"rocket",type:"regular",color:"#010101",size:"1.2rem"}))),n.a.createElement("h3",{className:"card__title"},n.a.createElement("span",{style:{fontWeight:"800"}},"5.")," Entrega"),n.a.createElement("div",{className:"card__description"},"Finalmente, preparo todo y entrego el proyecto completo según lo acordado.")),n.a.createElement("div",{className:"card__content"}))),n.a.createElement("div",{className:"section-support-content"},n.a.createElement(h,{href:"#"},"Más detalles de mi proceso creativo")))},y=a("zK+y"),v=a.n(y),N=a("T6PK"),w=a.n(N),x=a("V1qI"),k=a.n(x),j=a("yD67"),z=a.n(j),S=function(){return n.a.createElement("section",{className:"works section",id:"my-works"},n.a.createElement("div",{className:"bd-container"},n.a.createElement("span",{className:"section-subtitle"},"Mis trabajos seleccionados"),n.a.createElement("h2",{className:"section-title"},"Un poco del trabajo que he hecho"),n.a.createElement("p",{className:"section-description"},"Proyectos en los que he tenido el gusto de trabajar."),n.a.createElement("div",{className:"works__container wrapper bd-grid"},n.a.createElement("div",{className:"project__item"},n.a.createElement("figure",{className:"project__wrapper-img"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("img",{src:v.a,alt:"",className:"project__img"}))),n.a.createElement("div",{className:"project__data"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("h2",{className:"project__title"},"Digital X Creative Agency")),n.a.createElement("span",{className:"project__subtitle"},"We designed and coded the website of a renowned digital marketing agency."))),n.a.createElement("div",{className:"project__item"},n.a.createElement("figure",{className:"project__wrapper-img"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("img",{src:w.a,alt:"",className:"project__img"}))),n.a.createElement("div",{className:"project__data"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("h2",{className:"project__title"},"Bank of America")),n.a.createElement("span",{className:"project__subtitle"},"A redesign concept of the Bank of America's mobile app."))),n.a.createElement("div",{className:"project__item"},n.a.createElement("figure",{className:"project__wrapper-img"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("img",{src:k.a,alt:"",className:"project__img"}))),n.a.createElement("div",{className:"project__data"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("h2",{className:"project__title"},"Facta Saas")),n.a.createElement("span",{className:"project__subtitle"},"An employee engagement and training web app."))),n.a.createElement("div",{className:"project__item"},n.a.createElement("figure",{className:"project__wrapper-img"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("img",{src:z.a,alt:"",className:"project__img"}))),n.a.createElement("div",{className:"project__data"},n.a.createElement("a",{href:"https://dribbble.com/shots/14452738-Creative-Agency-Web-Concept-Home"},n.a.createElement("h2",{className:"project__title"},"Seft-care")),n.a.createElement("span",{className:"project__subtitle"},"A self-care app that offers a personalized selection of guides and mentors.")))),n.a.createElement("div",{className:"section-support-content"},n.a.createElement(h,{href:"https://dribbble.com/devrogdesign"},"Más de mis trabajos y conceptos creativos en Dribbble"))))},X=a("TvqW");t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(s.a,{title:"Home"}),n.a.createElement(u,null),n.a.createElement(g,null),n.a.createElement(E,null),n.a.createElement(_,null),n.a.createElement(S,null),n.a.createElement(X.a,null))}},T6PK:function(e,t,a){e.exports=a.p+"static/work2-f009a8c0139b5816895144ae68405829.png"},V1qI:function(e,t,a){e.exports=a.p+"static/work3-b7e2be0b85cd134650957b831b1e4f7d.png"},yD67:function(e,t,a){e.exports=a.p+"static/work4-8c6a1c05d63a697e3db97412c48be009.png"},"zK+y":function(e,t,a){e.exports=a.p+"static/work1-5ce7b3611b75420f818c9f709df25607.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-14fbecca473f95cf5ab2.js.map