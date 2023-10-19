"use strict";(self.webpackChunk_2j_portfolio=self.webpackChunk_2j_portfolio||[]).push([[874],{6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},217:function(e,t,n){n.r(t);var a=n(1151),r=n(7294),l=n(5904);function o(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",hr:"hr",strong:"strong",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(l.Z,null,r.createElement(t.h1,null,"A Basic Guide of Concepts You Should Know to Be a FullStack Dev"),r.createElement(t.p,null,"Hey there!, thanks for tankig some time to check this guide. I wanted to have a list of concepts at hand to jog memory on some of the fundamentals of Web Development. These is a very basic list of concepts (as the title says) so please keep that in mind and if you think something is wrong or missing please let met know."),r.createElement(t.p,null,'I also want to mention that I could have oversimplified in some concepts and that was intentional, as this is not supposed to be an indepth guide, think of it as a more of a "glossary".'),r.createElement(t.h2,null,"Javascript"),r.createElement(t.hr),r.createElement(t.p,null,r.createElement(t.strong,null,"Closures"),"\n: Is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)."),r.createElement(t.p,null,r.createElement(t.strong,null,"Promise"),"\n: Is a proxy for a value not necessarily known when the promise is created. It allow you to associate handlers with an asynchronous action's eventual success value of failure reason."),r.createElement(t.p,null,r.createElement(t.strong,null,"PROXY"),"\n: In programming is something that acts as an agent or intermediary for something else."),r.createElement(t.p,null,"Here is an example on how to run an Array of Promises that runs in parallel."),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"const promises = [\n  () => new Promise((res) => setTimeout(() => res(1), 1000)),\n  () => new Promise((res) => setTimeout(() => res(2), 3000)),\n  () => new Promise((res) => setTimeout(() => res(3), 2000)),\n];\n\npromises.reduce(async (prevPromise, nextPromise) => {\n  await prevPromise;\n  const res = await nextPromise();\n  console.log(res);\n}, Promise.resolve());\n")),r.createElement(t.p,null,"It took me a while to wrap my head over this example, to me the tricky part was why prevPromise works when there is no explicit return. I forgot that ",r.createElement(t.code,null,"async")," returns by default a ",r.createElement(t.code,null,"Promise"),", pretty neat right!"),r.createElement(t.p,null,r.createElement(t.strong,null,"Rest Syntax"),'\n: Collects multiple elements and "condeses" them into a single element.'),r.createElement(t.p,null,r.createElement(t.strong,null,"Spread Operator"),"\n: It allows to extended the content of iterables where zero or more arguments or elements are expected."),r.createElement(t.p,null,r.createElement(t.strong,null,"Destructuring Assignment"),"\n: It unpacks values from arrays, or properties from objects, into distinct variables."),r.createElement(t.p,null,r.createElement(t.strong,null,"Shallow Copies and Deep Copies"),'\n: Shallow copies are used for "flat" objects and deep copies are used for "nested" objects. By "flat" objects we mean objects that contain only primitive values. Nested objects mean objects that contain non-primitive values.'),r.createElement("br"),r.createElement(t.h2,null,"TypeScript"),r.createElement(t.hr),r.createElement(t.p,null,r.createElement(t.strong,null,"Generics"),"\n: Allow to create a component that can work with a variety of types rather than a single one."),r.createElement(t.p,null,r.createElement(t.strong,null,"Implements and Extends"),"\n: A Class that ",r.createElement(t.code,null,"implements")," from an interface or another Class has to implement all methods and attributes from which it implets from."),r.createElement(t.p,null,"A Class that ",r.createElement(t.code,null,"extends")," from another Class has all the methods and attributes from the parent class."),r.createElement(t.p,null,r.createElement(t.strong,null,"Type casting"),"\n: commonly know as type conversion, is technique to transform one type into another in TypeScrypt"),r.createElement(t.p,null,"Type casting in TypeScript can be done with the ",r.createElement(t.code,null,"as")," keyword or the ",r.createElement(t.code,null,"<>")," operator."),r.createElement(t.p,null,r.createElement(t.strong,null,"Utility Types"),"\n: TypeScript provides utility types to facilitate common types transformations. Some are: ",r.createElement(t.code,null,"Awaited<Type>"),", ",r.createElement(t.code,null,"Partial<Type>"),", ",r.createElement(t.code,null,"Required<Type>")),r.createElement(t.p,null,r.createElement(t.strong,null,"Unions and Intersection Types/Operators"),"\n: These are one of the ways that allow to compose types."),r.createElement(t.p,null,"A union type describes a value that can be one of several types. We use the vertical bar ",r.createElement(t.code,null,"|")," to separate each type, so ",r.createElement(t.code,null,"number | string | boolean")," is the type of a value that can be a number, a string, or a boolean."),r.createElement(t.p,null,"An intersection type combines multiple types into one. For example, ",r.createElement(t.code,null,"Person & Serializable & Loggable")," is a type which is all of ",r.createElement(t.code,null,"Person")," and ",r.createElement(t.code,null,"Serializable")," and ",r.createElement(t.code,null,"Loggable"),"."),r.createElement(t.p,null,r.createElement(t.strong,null,"Types and Interfaces"),"\n: Interfaces are basically a way to describe data shapes, for example, an object."),r.createElement(t.p,null,"Type is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type."),r.createElement(t.p,null,"In TypeScript, we can easily extend and implement interfaces. This is not possible with types though."),r.createElement("br"),r.createElement(t.h2,null,"Nodejs"),r.createElement(t.hr),r.createElement(t.p,null,"Simply put, Node.js is a platform that executes server-side JavaScript programs that can communicate with I/O sources like networks and file systems."),r.createElement(t.p,null,"Node.js performs best on intense I/O applications requiring speed and scalability with lots of concurrent connections, like video & audio streaming, real-time apps, live chats, gaming apps, collaboration tools, or stock exchange software."),r.createElement(t.p,null,"Node.js may not be the right choice for CPU intensive operations. Instead the traditional thread model may perform better."),r.createElement(t.p,null,r.createElement(t.strong,null,"Buffer"),"\n: A buffer is a space in computer memory, usually RAM, that stores binaries. A binary stream is a collection of large amounts of binary data. Due to their massive size, binary streams are not sent together. Instead, they are broken into smaller pieces before sending."),r.createElement(t.p,null,"When the data processing unit cannot accept any more data streams, excess data is stored in a buffer until the data processing unit is ready to receive more data."),r.createElement(t.p,null,r.createElement(t.strong,null,"Streams"),"\n: They are data-handling method and are used to read or write input into output sequentially."),r.createElement(t.p,null,"Streams read chunks of data piece by piece, processing its content without keeping it all in memory."),r.createElement(t.p,null,"Let’s take a “streaming” services such as YouTube or Netflix for example: these services don’t make you download the video and audio feed all at once. Instead, your browser receives the video as a continuous flow of chunks, allowing the recipients to start watching and/or listening almost immediately."),r.createElement(t.p,null,r.createElement(t.strong,null,"Blocking/Non-Blocking Operations"),"\n: Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution."),r.createElement(t.p,null,"Blocking methods execute synchronously while non-blocking methods execute asynchronously."),r.createElement(t.p,null,r.createElement(t.strong,null,"Middleware"),"\n: Are functions that intercept route handlers, adding some kind of information."))}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)}},5904:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9287),l=n(248),o=n(230);var s=e=>{let{children:t}=e;return a.createElement("main",{className:"page-container"},a.createElement("div",{className:"layout-module--blog--c7bc7"},a.createElement(r.Z,null),a.createElement("section",null,a.createElement("div",{className:"container"},t))),a.createElement("div",{className:"page-footer"},a.createElement(l.Z,{borderColor:"top"}),a.createElement(o.Z,{background:"secondary"})))}},230:function(e,t,n){n.d(t,{Z:function(){return m}});var a={};n.r(a),n.d(a,{footer:function(){return o},icon:function(){return s},primaryBackground:function(){return c},secondaryBackground:function(){return i}});var r=n(7294),l=n(6010),o="footer-module--footer--03d8a",s="footer-module--icon--b2977",c="footer-module--primaryBackground--9cfe0",i="footer-module--secondaryBackground--1262f";var m=e=>{let{background:t}=e;return r.createElement("footer",{className:(0,l.Z)(o,a[`${t}Background`])},r.createElement("div",{className:"container"},r.createElement("a",{href:"https://github.com/2JN"},r.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:s},r.createElement("title",null,"GitHub"),r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))),r.createElement("a",{href:"https://www.linkedin.com/in/jose-navas-051243bb"},r.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:s},r.createElement("title",null,"LinkedIn"),r.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))))}},9287:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(7294),r=n(4160),l=n(6010);var o=()=>a.createElement("svg",{width:"120",height:"100",viewBox:"0 0 120 100",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Frame 1"},a.createElement("line",{id:"Line 1",x1:"4.66648",y1:"5.56015",x2:"115.228",y2:"94.6674"}),a.createElement("line",{id:"Line 2",x1:"114.76",y1:"5.14361",x2:"5.20427",y2:"95.4849"})));var s=()=>a.createElement("svg",{width:"120",height:"100",viewBox:"0 0 120 100",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Frame 1"},a.createElement("line",{id:"Line 1",x1:"4",y1:"4",x2:"116",y2:"4"}),a.createElement("line",{id:"Line 2",x1:"4",y1:"48",x2:"116",y2:"48"}),a.createElement("line",{id:"Line 3",x1:"4",y1:"96",x2:"116",y2:"96"})));var c=()=>a.createElement("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}));var i=()=>a.createElement("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})),m=n(3169),u="nav-module--activeLink--01613",d="nav-module--rotateIn--39ec8",p="nav-module--rotateOut--dd932",h="nav-module--scrollDown--ff647",f="nav-module--scrollUp--c7811";var E=()=>{const e=(0,a.useRef)(),t=(0,a.useRef)(),n=(0,a.useRef)(),E=(0,a.useRef)(0),{0:v,1:g}=(0,a.useState)(!1),{state:y,dispatch:w}=(0,m.TC)();(0,a.useEffect)((()=>{v?(t.current.classList.add(p),t.current.classList.remove(d),n.current.classList.add(d),n.current.classList.remove(p)):(t.current.classList.add(d),t.current.classList.remove(p),n.current.classList.add(p),n.current.classList.remove(d))}),[v]),(0,a.useEffect)((()=>{window.addEventListener("scroll",(()=>{e.current&&(e.current.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)?(()=>{const e=window.scrollY,t=e>E.current;return E.current=e,t})()?(e.current.classList.add(h),e.current.classList.remove(f),g(!1)):(e.current.classList.add(f),e.current.classList.remove(h)):(e.current.classList.remove(f),e.current.classList.remove(h)))}))}),[e]);return a.createElement("nav",{ref:e,className:"nav-module--nav--e8b1e"},a.createElement("div",{className:"container"},a.createElement("a",{href:"/",className:"nav-module--logo--7c776"},"2J"),a.createElement("button",{className:"nav-module--themeButton--ad2d4",onClick:()=>{w({type:m.Nw.DARK_MODE,payload:!y.darkMode})}},y.darkMode?a.createElement(i,null):a.createElement(c,null)),a.createElement("ul",{className:"nav-module--menuList--99126"},a.createElement("li",null,a.createElement(r.rU,{to:"/about",activeClassName:u},"About")),a.createElement("li",null,a.createElement(r.rU,{to:"/skills",activeClassName:u},"Skills")),a.createElement("li",null,a.createElement("a",{href:"#","aria-disabled":"true"},"Projects")),a.createElement("li",null,a.createElement("a",{href:"#","aria-disabled":"true"},"Contact"))),a.createElement("div",{className:"nav-module--mobileMenu--b8fd6"},a.createElement("button",{onClick:()=>{g((e=>!e))}},a.createElement("div",{ref:t},a.createElement(s,null)),a.createElement("div",{ref:n},a.createElement(o,null)))),a.createElement("ul",{className:(0,l.Z)("nav-module--mobileList--93cab",{"nav-module--fadeIn--a1725":v,"nav-module--fadeOut--d461b":!v})},a.createElement("li",null,a.createElement(r.rU,{to:"/about",activeClassName:u},"About")),a.createElement("li",null,a.createElement(r.rU,{to:"/skills",activeClassName:u},"Skills")),a.createElement("li",null,a.createElement("a",{href:"#","aria-disabled":"true"},"Projects")),a.createElement("li",null,a.createElement("a",{href:"#","aria-disabled":"true"},"Contact")))))}},248:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>{let{borderColor:t}=e;return a.createElement("div",{className:"waveBorder-module--waveBorder--3f1ff "+("top"===t?"waveBorder-module--waveBorderTop--5829d":"waveBorder-module--waveBorderBottom--35248")},a.createElement("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none"},a.createElement("path",{d:"M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"}),a.createElement("path",{d:"M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98"})))}},1151:function(e,t,n){n.d(t,{ah:function(){return l}});var a=n(7294);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-fullstack-concepts-mdx-bf41aea034a5438b581b.js.map