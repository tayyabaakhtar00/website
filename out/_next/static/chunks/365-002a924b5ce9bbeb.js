"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365],{4970:function(e,s,a){var i=a(5893),n=a(1664),c=a.n(n);a(1163);var r=a(7294);let l={activeMenu:"",activeSubMenu:"",isSidebarOpen:!1};function t(e,s){switch(s.type){case"TOGGLE_MENU":return{...e,activeMenu:e.activeMenu===s.menu?"":s.menu,activeSubMenu:e.activeMenu===s.menu?e.activeSubMenu:""};case"TOGGLE_SUB_MENU":return{...e,activeSubMenu:e.activeSubMenu===s.subMenu?"":s.subMenu};case"TOGGLE_SIDEBAR":return{...e,isSidebarOpen:!e.isSidebarOpen};case"setScrollY":return{...e,scrollY:s.payload};default:return e}}s.Z=function(e){let{isMenuOpen:s,toggleMenu:a}=e,[n,d]=(0,r.useReducer)(t,l);return(0,i.jsx)("div",{className:"main-nav-wrapper",children:(0,i.jsxs)("div",{className:"main-nav2 ".concat(s?"show-menu":""),children:[(0,i.jsx)("div",{className:"menu-close-btn",onClick:a,children:(0,i.jsx)("i",{className:"bi bi-x-lg"})}),(0,i.jsx)("div",{className:"sidebar-menu-area",children:(0,i.jsxs)("ul",{className:"menu-list",children:[(0,i.jsx)("li",{className:" menu-item ",children:(0,i.jsx)(c(),{legacyBehavior:!0,href:"/","data-hover":"Home",children:"Home"})}),(0,i.jsx)("li",{className:"menu-item",children:(0,i.jsx)(c(),{legacyBehavior:!0,href:"/company","data-hover":"Company",children:(0,i.jsx)("a",{children:"Company"})})}),(0,i.jsx)("li",{className:"menu-item-has-children menu-item",children:(0,i.jsx)(c(),{legacyBehavior:!0,href:"/service","data-hover":"Service",children:"Service"})}),(0,i.jsx)("li",{className:"menu-item-has-children menu-item",children:(0,i.jsx)(c(),{legacyBehavior:!0,href:"/contact","data-hover":"Project",children:(0,i.jsx)("a",{children:"Contact"})})}),(0,i.jsx)("li",{className:"menu-item-has-children menu-item",children:(0,i.jsx)(c(),{legacyBehavior:!0,href:"/blog","data-hover":"Blog",children:(0,i.jsx)("a",{children:"Blog"})})})]})})]})})}},4650:function(e,s,a){var i=a(5893);a(1664),a(7294),s.Z=function(){return(0,i.jsx)("footer",{children:(0,i.jsx)("div",{className:"footer-btm",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"footer-btn-content",children:[(0,i.jsx)("div",{className:"copyright-area",children:(0,i.jsxs)("p",{children:["\xa9Copyright 2023 ",(0,i.jsx)("a",{href:"#",children:"WCAD"})," | Design By ",(0,i.jsx)("a",{href:"https://www.wcadlimited.com/",children:"WCAD Limited"})]})}),(0,i.jsx)("div",{className:"footer-social",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.facebook.com/",children:(0,i.jsx)("i",{className:"bx bxl-facebook"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://twitter.com/",children:(0,i.jsx)("i",{className:"bx bxl-twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.linkedin.com/",children:(0,i.jsx)("i",{className:"bx bxl-pinterest-alt"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com/",children:(0,i.jsx)("i",{className:"bx bxl-instagram"})})})]})})]})})})})})})}},5365:function(e,s,a){a.d(s,{Z:function(){return m}});var i=a(5893),n=a(4650),c=a(1664),r=a.n(c);a(1163);var l=a(7294),t=a(6294),d=a(9008),h=a.n(d),o=a(4970),m=function(e){let{children:s}=e,[a,c]=(0,l.useState)(!1),d=()=>{c(!a)};return(0,t.Z)("bg-dark-5"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(h(),{children:[(0,i.jsx)("title",{children:"WCAD : Website Content Artificial and Design"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"})]}),(0,i.jsx)(o.Z,{isMenuOpen:a,toggleMenu:d}),(0,i.jsxs)("div",{className:"main-container",children:[(0,i.jsxs)("div",{className:"sidebar-wrapper",children:[(0,i.jsx)("div",{className:"header-logo",children:(0,i.jsx)(r(),{legacyBehavior:!0,href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"assets/img/logo-blue.jpeg",alt:""})})})}),(0,i.jsx)("div",{className:"sidebar-button mobile-menu-btn",onClick:d,children:(0,i.jsx)("span",{})}),(0,i.jsx)("div",{className:"banner-area",children:(0,i.jsx)("div",{className:"social-area"})})]}),(0,i.jsxs)("div",{className:"main-content",children:[(0,i.jsxs)("header",{className:"header5 d-lg-none d-flex",children:[(0,i.jsx)("div",{className:"header-logo",children:(0,i.jsx)(r(),{legacyBehavior:!0,href:"/",children:(0,i.jsx)("a",{})})}),(0,i.jsx)("div",{className:"sidebar-button mobile-menu-btn2",onClick:d,children:(0,i.jsx)("span",{})})]}),s,(0,i.jsx)(n.Z,{})]})]})]})}},6294:function(e,s,a){var i=a(7294);s.Z=e=>{(0,i.useEffect)(()=>(document.body.classList.add(e),()=>{document.body.classList.remove(e)}),[e])}}}]);