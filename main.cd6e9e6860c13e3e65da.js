(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.d({},{L:()=>h});var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var n,r,o;return n=t,o=[{key:"todoFromJSON",value:function(e){var n=e.tarea,r=e.id,o=e.completado,a=e.creado,i=new t(n);return i.id=r,i.completado=o,i.creado=a,i}}],(r=null)&&e(n.prototype,r),o&&e(n,o),t}();function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var e,o,i;return e=t,(o=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,n=r(this.todos);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.id==t){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return 1!=t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):this.todos=[],this.todos=this.todos.map((function(t){return n.todoFromJSON(t)}))}}])&&a(e.prototype,o),i&&a(e,i),t}();function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),v=function(t){var e='\n          <li class= "'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n\t\t\t\t\t\t<div class="view">\n\t\t\t\t\t\t\t<input class="toggle" type="checkbox"}>\n\t\t\t\t\t\t\t<label>').concat(t.tarea,'</label>\n\t\t\t\t\t\t\t<button class="destroy"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class="edit" value="Create a TodoMVC template">\n\t\t\t\t\t</li>\n'),n=document.createElement("div");return n.innerHTML=e,u.append(n.firstElementChild),n.firstElementChild};s.addEventListener("keyup",(function(t){if(13===t.keyCode&&s.value.length>0){var e=new n(s.value);h.nuevoTodo(e),v(e),s.value=""}})),u.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,r=n.getAttribute("data-id");e.includes("input")?(h.marcarCompletado(r),n.classList.toggle("completed")):e.includes("button")&&(h.eliminarTodo(r),u.removeChild(n))})),d.addEventListener("click",(function(){h.eliminarCompletados();for(var t=u.childNodes.length-1;t>=0;t--)u.childNodes.item(t).classList.contains("completed")&&u.childNodes.item(t).remove()})),f.addEventListener("click",(function(t){var e=t.target.textContent;if(e){m.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var n,r=l(u.childNodes);try{for(r.s();!(n=r.n()).done;){var o=n.value;switch(o.classList.remove("hidden"),e){case"Pendientes":o.classList.contains("completed")&&o.classList.add("hidden");break;case"Completados":o.classList.contains("completed")||o.classList.add("hidden")}}}catch(t){r.e(t)}finally{r.f()}}}));var h=new i;h.todos.forEach((function(t){v(t)}))})();