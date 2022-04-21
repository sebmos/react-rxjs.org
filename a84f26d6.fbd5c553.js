(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),l=(a(0),a(94)),b={title:"StateObservable",sidebar_label:"StateObservable"},i={unversionedId:"api/core/StateObservable",id:"api/core/StateObservable",isDocsHomePage:!1,title:"StateObservable",description:"Represents an Observable state. It has the following properties:",source:"@site/docs/api/core/StateObservable.md",slug:"/api/core/StateObservable",permalink:"/docs/api/core/StateObservable",editUrl:"https://github.com/re-rxjs/react-rxjs.org/tree/master/docs/api/core/StateObservable.md",version:"current",sidebar_label:"StateObservable",sidebar:"someSidebar",previous:{title:"<Subscribe />",permalink:"/docs/api/core/subscribe"},next:{title:"combineKeys()",permalink:"/docs/api/utils/combineKeys"}},c=[{value:"methods",id:"methods",children:[{value:"getRefCount()",id:"getrefcount",children:[]},{value:"getValue(filter)",id:"getvaluefilter",children:[]}]},{value:"DefaultedStateObservable",id:"defaultedstateobservable",children:[{value:"getDefaultValue()",id:"getdefaultvalue",children:[]},{value:"getValue(filter)",id:"getvaluefilter-1",children:[]}]},{value:"See also",id:"see-also",children:[]}],s={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Represents an Observable state. It has the following properties:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"It's multicast: The subscription is shared with all the subscribers."),Object(l.b)("li",{parentName:"ol"},"It replays the last emitted value to every new subscriber."),Object(l.b)("li",{parentName:"ol"},"It doesn't propagate ",Object(l.b)("inlineCode",{parentName:"li"},"complete"),"."),Object(l.b)("li",{parentName:"ol"},"When all its subscribers unsubscribe, it cleans up everything, unsubscribing from the source and resetting the latest value.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"interface StateObservable<T> extends Observable<T> {\n  getRefCount: () => number\n  getValue: (filter?: (value: T) => boolean) => T | StatePromise<T>\n}\n")),Object(l.b)("p",null,"Inherits from rxjs' ",Object(l.b)("inlineCode",{parentName:"p"},"Observable"),"."),Object(l.b)("h2",{id:"methods"},"methods"),Object(l.b)("h3",{id:"getrefcount"},"getRefCount()"),Object(l.b)("p",null,"Gets the current number of subscribers."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function getRefCount(this: StateObservable): number\n")),Object(l.b)("h4",{id:"returns"},"Returns"),Object(l.b)("p",null,"The current number of subscribers this ",Object(l.b)("inlineCode",{parentName:"p"},"StateObservable")," has."),Object(l.b)("h3",{id:"getvaluefilter"},"getValue(filter)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function getValue(\n  this: StateObservable,\n  filter?: (value: T) => boolean,\n): T | StatePromise<T>\n")),Object(l.b)("h4",{id:"arguments"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filter"),": (Optional) A function that will exclude ",Object(l.b)("inlineCode",{parentName:"li"},"value")," as a possible value returned by this function. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"() => true")," (every value is returned)")),Object(l.b)("h4",{id:"returns-1"},"Returns"),Object(l.b)("p",null,"Either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The latest value, if this ",Object(l.b)("inlineCode",{parentName:"li"},"StateObservable")," has already emitted any."),Object(l.b)("li",{parentName:"ul"},"A promise that will resolve the first value, if this ",Object(l.b)("inlineCode",{parentName:"li"},"StateObservable")," hasn't emitted any yet.")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Calling this method will throw an error if this ",Object(l.b)("inlineCode",{parentName:"p"},"StateObservable")," doesn't have any subscription active.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The promise returned by this method will reject if the observable completes without emitting any value, or if all subscribers unsubscribe before the observable emits something."))))),Object(l.b)("h2",{id:"defaultedstateobservable"},"DefaultedStateObservable"),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"StateObservable")," that was provided with a default value."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"interface DefaultedStateObservable<T> extends StateObservable<T> {\n  getDefaultValue: () => T\n  getValue: (filter?: (value: T) => boolean) => T\n}\n")),Object(l.b)("p",null,"Inherits from ",Object(l.b)("inlineCode",{parentName:"p"},"StateObservable")," and rxjs' ",Object(l.b)("inlineCode",{parentName:"p"},"Observable"),"."),Object(l.b)("h3",{id:"getdefaultvalue"},"getDefaultValue()"),Object(l.b)("p",null,"Gets the default value set to this ",Object(l.b)("inlineCode",{parentName:"p"},"DefaultedStateObservable")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function getDefaultValue(this: DefaultedStateObservable<T>): T\n")),Object(l.b)("h4",{id:"returns-2"},"Returns"),Object(l.b)("p",null,"The default value of this ",Object(l.b)("inlineCode",{parentName:"p"},"DefaultedStateObservable")),Object(l.b)("h3",{id:"getvaluefilter-1"},"getValue(filter)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function getValue(this: StateObservable, filter?: (value: T) => boolean): T\n")),Object(l.b)("h4",{id:"arguments-1"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filter"),": (Optional) A function that will exclude ",Object(l.b)("inlineCode",{parentName:"li"},"value")," as a possible value returned by this function. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"() => true")," (every value is returned). If the value is excluded, it will return the default value instead.")),Object(l.b)("h4",{id:"returns-3"},"Returns"),Object(l.b)("p",null,"Either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The latest value, if this ",Object(l.b)("inlineCode",{parentName:"li"},"DefaultedStateObservable")," has already emitted any."),Object(l.b)("li",{parentName:"ul"},"The default value, if this ",Object(l.b)("inlineCode",{parentName:"li"},"DefaultedStateObservable")," hasn't emitted any yet.")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The ",Object(l.b)("inlineCode",{parentName:"p"},"getValue()")," method of ",Object(l.b)("inlineCode",{parentName:"p"},"DefaultedStateObservable")," overrides the one from ",Object(l.b)("inlineCode",{parentName:"p"},"StateObservable"),"."),Object(l.b)("p",{parentName:"div"},"This means it won't return a Promise and it won't throw errors as the original ",Object(l.b)("inlineCode",{parentName:"p"},"StateObservable")," does."))),Object(l.b)("h2",{id:"see-also"},"See also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"./state"}),Object(l.b)("inlineCode",{parentName:"a"},"state()"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"./useStateObservable"}),Object(l.b)("inlineCode",{parentName:"a"},"useStateObservable()")))))}o.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=o(a),d=n,O=u["".concat(b,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(O,i(i({ref:t},s),{},{components:a})):r.a.createElement(O,i({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var s=2;s<l;s++)b[s]=a[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);