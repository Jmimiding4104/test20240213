import{_ as g,o as s,c as o,a,n as r,j as l,F as d,i as p,t as _}from"./index-6ZQNQqeE.js";const u={props:["pagination"],methods:{updatePage(c){this.$emit("updatePage",c)}}},h={"aria-label":"Page navigation example"},m={class:"pagination"},k=a("span",{"aria-hidden":"true"},"«",-1),v=[k],f=["onClick"],P=a("span",{"aria-hidden":"true"},"»",-1),x=[P];function C(c,n,e,b,B,i){return s(),o("nav",h,[a("ul",m,[a("li",{class:r(["page-item",{disabled:!e.pagination.has_pre}])},[a("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:n[0]||(n[0]=l(t=>i.updatePage(e.pagination.current_page-1),["prevent"]))},v)],2),(s(!0),o(d,null,p(e.pagination.total_pages,t=>(s(),o("li",{key:t,class:r(["page-item",{active:e.pagination.current_page===t}])},[a("a",{class:"page-link",href:"#",onClick:l(y=>i.updatePage(t),["prevent"])},_(t),9,f)],2))),128)),a("li",{class:r(["page-item",{disabled:!e.pagination.has_next}])},[a("a",{class:"page-link",href:"#","aria-label":"Next",onClick:n[1]||(n[1]=l(t=>i.updatePage(e.pagination.current_page+1),["prevent"]))},x)],2)])])}const N=g(u,[["render",C]]);export{N as P};