"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),f=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=f(n),m=a,d=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var f=2;f<i;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o="Tips",l={unversionedId:"configuration/tips",id:"configuration/tips",title:"Tips",description:"Navigating around multiple buffers",source:"@site/docs/configuration/tips.md",sourceDirName:"configuration",slug:"/configuration/tips",permalink:"/configuration/tips",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/configuration/tips.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Recipes",permalink:"/configuration/recipes"},next:{title:"Plugins",permalink:"/configuration/plugins"}},u={},f=[{value:"Navigating around multiple buffers",id:"navigating-around-multiple-buffers",level:2},{value:"Disable autoformat for some buffers",id:"disable-autoformat-for-some-buffers",level:2}],p={toc:f};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tips"},"Tips"),(0,a.kt)("h2",{id:"navigating-around-multiple-buffers"},"Navigating around multiple buffers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"H")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"L")," if the buffer you want to go to is visually close to where you are"),(0,a.kt)("li",{parentName:"ul"},"Otherwise, if the buffer is open, use ",(0,a.kt)("inlineCode",{parentName:"li"},"<leader>,")),(0,a.kt)("li",{parentName:"ul"},"For other files, use ",(0,a.kt)("inlineCode",{parentName:"li"},"<leader><space>")),(0,a.kt)("li",{parentName:"ul"},"Close buffers you no longer need with ",(0,a.kt)("inlineCode",{parentName:"li"},"<leader>bd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<leader>ss")," to quickly jump to a function in the buffer you're on"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<c-o>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<c-i>")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"gd")," to navigate the code"),(0,a.kt)("li",{parentName:"ul"},"You can pin buffers with ",(0,a.kt)("inlineCode",{parentName:"li"},"<leader>bp")," and delete all non pinned buffers with ",(0,a.kt)("inlineCode",{parentName:"li"},"<leader>bP")),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"TODO"),"s in files you want to work on in future but don't need now and delete their buffers, git will track them")),(0,a.kt)("h2",{id:"disable-autoformat-for-some-buffers"},"Disable autoformat for some buffers"),(0,a.kt)("p",null,"If you want to disable autoformat for a certain buffer, then\nset ",(0,a.kt)("inlineCode",{parentName:"p"},"vim.b.autoformat = false")," for that buffer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=lua/config/autocmds.lua",title:"lua/config/autocmds.lua"},'-- Disable autoformat for lua files\nvim.api.nvim_create_autocmd({ "FileType" }, {\n  pattern = { "lua" },\n  callback = function()\n    vim.b.autoformat = false\n  end,\n})\n')),(0,a.kt)("p",null,"If you change your mind you can do ",(0,a.kt)("inlineCode",{parentName:"p"},"<leader>uf")," to enable autoformat\nanyway for that buffer."))}s.isMDXComponent=!0}}]);