function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function E(e){return l=e,u=setTimeout(N,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function N(){var e=p();if(j(e))return S(e);u=setTimeout(N,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function S(e){return u=void 0,v&&i?b(e):(i=r=void 0,a)}function h(){var e=p(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return E(f);if(s)return u=setTimeout(N,t),b(f)}return void 0===u&&(u=setTimeout(N,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},h.flush=function(){return void 0===u?a:S(p())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b={inputNameEl:document.querySelector('input[name="email"]'),inputMessageEl:document.querySelector('textarea[name="message"]'),formEl:document.querySelector(".feedback-form")};b.inputNameEl.addEventListener("input",e(t)(j,500)),b.inputMessageEl.addEventListener("input",e(t)(j,500)),b.formEl.addEventListener("submit",(function(e){e.preventDefault(),(""===b.inputNameEl.value||""===b.inputMessageEl.value)&&alert("Please fill all fields");console.log(E),e.target.reset(),localStorage.removeItem("feedback-form-state"),E={}}));let E={};function j(e){const t=e.target.name,n=e.target.value;E[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(E))}E=JSON.parse(localStorage.getItem("feedback-form-state"))||{},b.inputNameEl.value=E.email||"",b.inputMessageEl.value=E.message||"";
//# sourceMappingURL=03-feedback.0c051293.js.map