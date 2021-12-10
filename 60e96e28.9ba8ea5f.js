(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(91)),o={title:"combineKeys()",sidebar_label:"combineKeys()"},c={unversionedId:"api/utils/combineKeys",id:"api/utils/combineKeys",isDocsHomePage:!1,title:"combineKeys()",description:"Creates a stream that constructs a Map with the latest value of the inner stream",source:"@site/docs/api/utils/combineKeys.md",slug:"/api/utils/combineKeys",permalink:"/docs/api/utils/combineKeys",editUrl:"https://github.com/re-rxjs/react-rxjs.org/tree/master/docs/api/utils/combineKeys.md",version:"current",sidebar_label:"combineKeys()",sidebar:"someSidebar",previous:{title:"<Subscribe />",permalink:"/docs/api/core/subscribe"},next:{title:"contextBinder()",permalink:"/docs/api/utils/contextBinder"}},s=[{value:"Examples",id:"examples",children:[]},{value:"See also",id:"see-also",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Creates a stream that constructs a Map with the latest value of the inner stream\nof each key."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export const combineKeys = <K, T>(\n  keys$: Observable<Array<K> | Set<K>>,\n  getInner$: (key: K) => Observable<T>,\n): Observable<Map<K, T>>\n")),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keys$"),": Stream of the list of keys to subscribe to."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getInner$"),": Function that returns the stream for each key.")),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)("p",null,"A stream with a map containing the latest value from the stream of each key."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"You're typically going to call this after ",Object(i.b)("inlineCode",{parentName:"p"},"partitionByKey()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const [getByKey, keys$] = partitionByKey(source$, x => x.key);\nconst combined$ = combineKeys(keys$, getByKey);\n")),Object(i.b)("p",null,"Here it is in action, picking up from the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"partitionByKey"}),Object(i.b)("inlineCode",{parentName:"a"},"partitionByKey()")),"\nexample. You have a stream representing the list of pets, you have a function\nthat returns the stream associated with each pet, and now combineKeys() gives\nyou a stream that emits a map of this whole data structure whenever any of it\nchanges. If you're careful about where you bind these you can save a lot of\ncomponent updates:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'interface Pet {\n  id: number;\n  pet: string,\n  pos: number;\n}\n\nconst petNames = ["Fluffy", "Bella", "Nala", "Nocturne", "Teddy"];\n\nconst [petUpdate$, updatePet] = createSignal<Pet>();\n\nconst petRace$ = petUpdate$.pipe(startWith(\n  ...petNames.map((pet, id): Pet => ({pet, id, pos: 1})),\n));\n\nconst [petByID, petIds$] = partitionByKey(petRace$, x => x.id)\nconst keyMap$ = combineKeys(petIds$, petByID);\n\nconst leadingPet$ = keyMap$.pipe(map(x => // map to pet with highest pos\n  Array.from(x.entries())\n    .sort(([k1,v1], [k2,v2]) => v2.pos - v1.pos)[0][1]\n));\n\nconst advancingPet$: Observable<Pet> = interval(1000).pipe(\n  withLatestFrom(keyMap$),\n  map(([_, x]) => x),\n  takeWhile(x => {\n    for (let [k,v] of x) {\n      if (v.pos == 20) return false  // win condition\n    }\n    return true;\n  }),\n  map((x: Map<number, Pet>) =>\n    x.get(Math.floor(Math.random() * x.size)) as Pet),\n  map(pet => ({...pet, pos: pet.pos + 1})),  // increment position\n  tap(updatePet),\n);\n\nconst [usePetIDs] = bind(petIds$);\nconst [usePetByID] = bind((petId:number) => petByID(petId));\nconst [useLeader] = bind(leadingPet$, null);\nconst [useAdvancingPet] = bind(advancingPet$, null);\n')),Object(i.b)("h2",{id:"see-also"},"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"partitionByKey"}),Object(i.b)("inlineCode",{parentName:"a"},"partitionByKey()")))))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(y,c(c({ref:t},p),{},{components:n})):a.a.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);