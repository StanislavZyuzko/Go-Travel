"use strict";
const explore = document.querySelector('.main-inner__btn');

explore.addEventListener('click', () => {
  if (explore.classList.contains('main-inner__btn--active')) {
    explore.classList.remove('main-inner__btn--active');
  }
});

const setExplore = () => {
  explore.innerHTML = 'Explore Right Now!';
};

const jsConfetti = new JSConfetti();
const tooltip = document.querySelector('.header__tooltip-text');
const link = document.querySelector('.header__slogan');
const getConfetti = async () => {
  tooltip.style.display = 'none';

  await jsConfetti.addConfetti({
    confettiNumber: 350,
    confettiColors: [
      '#ff0a54',
      '#ff477e',
      '#ff7096',
      '#ff85a1',
      '#fbb1bd',
      '#f9bec7',
    ],
  });
  link.style.cursor = 'default';
  explore.classList.add('main-inner__btn--active');
  setTimeout(setExplore, 800);
};

tooltip.addEventListener('click', getConfetti);
link.addEventListener('click', getConfetti);
;
const title = document.querySelector('.header__slogan');

title.innerHTML = title.innerText
  .split('')
  .map((ltr, idx) => `<span class="ltr" style="--delay: ${idx * 100}ms">${ltr}</span>`)
  .join('');

const ltrs = document.querySelectorAll('.header__slogan .ltr');

ltrs.forEach((ltr) => {
  ltr.addEventListener('animationend', () => {
    ltr.classList.add('show');
  });
});
;
const { body } = document;
const menu = document.querySelector('.header__menu-body');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  menu.classList.toggle('header__menu-body--visible');
  burger.classList.toggle('burger--active');
});
;
const CLASS_LIST = {
  MODAL: 'modal',
  MODAL_ACTIVE: 'modal--active',
  MODAL_HAS_SCROLL: 'modal--has-scroll',
  MODAL_DIALOG_BODY: 'modal__dialog-body',
  TRIGGER_OPEN: 'modal__open',
  TRIGGER_CLOSE: 'modal__close',
};

const paddingOffset = window.innerWidth - document.body.offsetWidth;

const hideScroll = () => {
  document.body.style.paddingRight = `${paddingOffset}px`;
  // document.body.style.overflow = 'hidden';
  document.body.classList.add('disable-scroll');

};

const showScroll = (event) => {
  if (event.propertyName === 'transform') {
    document.body.style.paddingRight = '';
    // document.body.style.overflow = 'visible';
    document.body.classList.remove('disable-scroll');


    event.target
      .closest(`.${CLASS_LIST.MODAL}`)
      .removeEventListener('transitionend', showScroll);
  }
};

document.addEventListener('click', (event) => {
  if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
    event.preventDefault();

    const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
    const modalId = target.getAttribute('href').replace('#', '');
    const modal = document.getElementById(modalId);

    hideScroll();

    modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
  }

  if (
    event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`)
      || event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
  ) {
    event.preventDefault();

    const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
    modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    modal.addEventListener('transitionend', showScroll);
  }
});

// Modal video

function OpenVideoModal(htmlId, htmlDataAttr) {
  const videoModalOpen = document.getElementById(htmlId);
  const videoUrl = videoModalOpen.getAttribute(htmlDataAttr);

  let frame;

  videoModalOpen.addEventListener('click', () => {
    frame = document.querySelector('.modal__video video');
    frame.src = videoUrl;
  });

  document.addEventListener('click', (event) => {
    if (
      event.target.closest('.modal__close--video')
         || event.target.classList.contains('modal--video')
    ) {
      event.preventDefault();
      frame.src = ' ';
    }
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  OpenVideoModal('video-open', 'data-video-url');
});

const testModal = document.querySelector('.modal__dialog--video');
console.log(testModal);

function getVisible(){
  testModal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  setTimeout(getVisible, 1000);
});




if (document.readyState == 'complete') {

} 

window.onload = () => {
  // testModal.style.color = 'green';
  // testModal.style.visibility = 'visible';

}

;
const imageSlider = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  watchOverflow: true,

  initialSlide: 2,

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1252: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});
;
document.querySelectorAll('.rating__item').forEach((item) => item.addEventListener('click', () => {
  item.parentNode.dataset.totalValue = item.dataset.itemValue;
}));
;
var __defProp=Object.defineProperty,__defNormalProp=(e,i,t)=>i in e?__defProp(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,__publicField=(e,i,t)=>(__defNormalProp(e,"symbol"!=typeof i?i+"":i,t),t);!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(e="undefined"!=typeof globalThis?globalThis:e||self).JustValidate=i()}(this,(function(){"use strict";const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=/^-?[0-9]\d*$/,t=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,s=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,l=e=>"string"!=typeof e||""===e;var r=(e=>(e.Required="required",e.Email="email",e.MinLength="minLength",e.MaxLength="maxLength",e.Password="password",e.Number="number",e.Integer="integer",e.MaxNumber="maxNumber",e.MinNumber="minNumber",e.StrongPassword="strongPassword",e.CustomRegexp="customRegexp",e.MinFilesCount="minFilesCount",e.MaxFilesCount="maxFilesCount",e.Files="files",e))(r||{}),o=(e=>(e.Required="required",e))(o||{}),a=(e=>(e.Label="label",e.LabelArrow="labelArrow",e))(a||{});const n=[{key:r.Required,dict:{en:"The field is required"}},{key:r.Email,dict:{en:"Email has invalid format"}},{key:r.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:r.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:r.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:r.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:r.Number,dict:{en:"Value should be a number"}},{key:r.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:r.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:r.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:r.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:r.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],d=e=>"object"==typeof e&&null!==e&&"then"in e&&"function"==typeof e.then,c=e=>Array.isArray(e)?e.filter((e=>e.length>0)):"string"==typeof e&&e.trim()?[...e.split(" ").filter((e=>e.length>0))]:[],u=e=>e instanceof Element||e instanceof HTMLDocument,h={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1};return class{constructor(e,i,t){__publicField(this,"form",null),__publicField(this,"fields",{}),__publicField(this,"groupFields",{}),__publicField(this,"errors",{}),__publicField(this,"isValid",!1),__publicField(this,"isSubmitted",!1),__publicField(this,"globalConfig",h),__publicField(this,"errorLabels",{}),__publicField(this,"successLabels",{}),__publicField(this,"eventListeners",[]),__publicField(this,"dictLocale",n),__publicField(this,"currentLocale","en"),__publicField(this,"customStyleTags",{}),__publicField(this,"onSuccessCallback"),__publicField(this,"onFailCallback"),__publicField(this,"tooltips",[]),__publicField(this,"lastScrollPosition"),__publicField(this,"isScrollTick"),__publicField(this,"fieldIds",new Map),__publicField(this,"getKeyByFieldSelector",(e=>this.fieldIds.get(e))),__publicField(this,"getFieldSelectorByKey",(e=>{for(const[i,t]of this.fieldIds)if(e===t)return i})),__publicField(this,"getCompatibleFields",(()=>{const e={};return Object.keys(this.fields).forEach((i=>{let t=i;const s=this.getFieldSelectorByKey(i);"string"==typeof s&&(t=s),e[t]={...this.fields[i]}})),e})),__publicField(this,"setKeyByFieldSelector",(e=>{if(this.fieldIds.has(e))return this.fieldIds.get(e);const i=String(this.fieldIds.size+1);return this.fieldIds.set(e,i),i})),__publicField(this,"refreshAllTooltips",(()=>{this.tooltips.forEach((e=>{e.refresh()}))})),__publicField(this,"handleDocumentScroll",(()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame((()=>{this.refreshAllTooltips(),this.isScrollTick=!1})),this.isScrollTick=!0)})),__publicField(this,"formSubmitHandler",(e=>{e.preventDefault(),this.isSubmitted=!0,this.validateHandler(e)})),__publicField(this,"handleFieldChange",(e=>{let i;for(const t in this.fields){if(this.fields[t].elem===e){i=t;break}}i&&this.validateField(i,!0)})),__publicField(this,"handleGroupChange",(e=>{let i;for(const t in this.groupFields){if(this.groupFields[t].elems.find((i=>i===e))){i=t;break}}i&&this.validateGroup(i)})),__publicField(this,"handlerChange",(e=>{e.target&&(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())})),this.initialize(e,i,t)}initialize(e,i,t){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=h,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en","string"==typeof e){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else{if(!(e instanceof HTMLFormElement))throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");this.setForm(e)}if(this.globalConfig={...h,...i},t&&(this.dictLocale=[...t,...n]),this.isTooltip()){const e=document.createElement("style");e.textContent=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",this.customStyleTags[a.Label]=document.head.appendChild(e),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,i,t){var s;const l=null!=t?t:e;let o=null==(s=this.dictLocale.find((e=>e.key===l)))?void 0:s.dict[this.currentLocale];if(o||t&&(o=t),o&&void 0!==i)switch(e){case r.MaxLength:case r.MinLength:case r.MaxNumber:case r.MinNumber:case r.MinFilesCount:case r.MaxFilesCount:o=o.replace(":value",String(i))}return o||t||"Value is incorrect"}getFieldErrorMessage(e,i){const t="function"==typeof e.errorMessage?e.errorMessage(this.getElemValue(i),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,t)}getFieldSuccessMessage(e,i){const t="function"==typeof e?e(this.getElemValue(i),this.fields):e;return this.getLocalisedString(void 0,void 0,t)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,i){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(i,this.fields[e].elem)}setFieldValid(e,i){this.fields[e].isValid=!0,void 0!==i&&(this.fields[e].successMessage=this.getFieldSuccessMessage(i,this.fields[e].elem))}setGroupInvalid(e,i){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(i)}setGroupValid(e,i){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(i)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,i,t){if(t.rule===o.Required)i.every((e=>!e.checked))?this.setGroupInvalid(e,t):this.setGroupValid(e,t)}validateFieldRule(o,a,n,c=!1){const u=n.value,h=this.getElemValue(a);if(n.plugin){n.plugin(h,this.getCompatibleFields())||this.setFieldInvalid(o,n)}else{switch(n.rule){case r.Required:(e=>{let i=e;return"string"==typeof e&&(i=e.trim()),!i})(h)&&this.setFieldInvalid(o,n);break;case r.Email:if(l(h))break;f=h,e.test(f)||this.setFieldInvalid(o,n);break;case r.MaxLength:if(void 0===u){console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if("number"!=typeof u){console.error(`Value for ${n.rule} rule for [${o}] should be a number. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if(l(h))break;((e,i)=>e.length>i)(h,u)&&this.setFieldInvalid(o,n);break;case r.MinLength:if(void 0===u){console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if("number"!=typeof u){console.error(`Value for ${n.rule} rule for [${o}] should be a number. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if(l(h))break;((e,i)=>e.length<i)(h,u)&&this.setFieldInvalid(o,n);break;case r.Password:if(l(h))break;(e=>t.test(e))(h)||this.setFieldInvalid(o,n);break;case r.StrongPassword:if(l(h))break;(e=>s.test(e))(h)||this.setFieldInvalid(o,n);break;case r.Number:if(l(h))break;(e=>"string"==typeof e&&!isNaN(+e)&&!isNaN(parseFloat(e)))(h)||this.setFieldInvalid(o,n);break;case r.Integer:if(l(h))break;(e=>i.test(e))(h)||this.setFieldInvalid(o,n);break;case r.MaxNumber:{if(void 0===u){console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if("number"!=typeof u){console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if(l(h))break;const e=+h;(Number.isNaN(e)||((e,i)=>e>i)(e,u))&&this.setFieldInvalid(o,n);break}case r.MinNumber:{if(void 0===u){console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if("number"!=typeof u){console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if(l(h))break;const e=+h;(Number.isNaN(e)||((e,i)=>e<i)(e,u))&&this.setFieldInvalid(o,n);break}case r.CustomRegexp:{if(void 0===u)return console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(o,n);let e;try{e=new RegExp(u)}catch(b){console.error(`Value for ${n.rule} rule for [${o}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(o,n);break}const i=String(h);""===i||e.test(i)||this.setFieldInvalid(o,n);break}case r.MinFilesCount:if(void 0===u){console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(o,n);break}if("number"!=typeof u){console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if(Number.isFinite(null==h?void 0:h.length)&&h.length<u){this.setFieldInvalid(o,n);break}break;case r.MaxFilesCount:if(void 0===u){console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(o,n);break}if("number"!=typeof u){console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(o,n);break}if(Number.isFinite(null==h?void 0:h.length)&&h.length>u){this.setFieldInvalid(o,n);break}break;case r.Files:{if(void 0===u)return console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(o,n);if("object"!=typeof u)return console.error(`Value for ${n.rule} rule for [${o}] field should be an object. This field will be always invalid.`),void this.setFieldInvalid(o,n);const e=u.files;if("object"!=typeof e)return console.error(`Value for ${n.rule} rule for [${o}] field should be an object with files array. This field will be always invalid.`),void this.setFieldInvalid(o,n);const i=(e,i)=>{const t=Number.isFinite(i.minSize)&&e.size<i.minSize,s=Number.isFinite(i.maxSize)&&e.size>i.maxSize,l=Array.isArray(i.names)&&!i.names.includes(e.name),r=Array.isArray(i.extensions)&&!i.extensions.includes(e.name.split(".")[e.name.split(".").length-1]),o=Array.isArray(i.types)&&!i.types.includes(e.type);return t||s||l||r||o};if("object"==typeof h&&null!==h)for(let t=0,s=h.length;t<s;++t){const s=h.item(t);if(!s){this.setFieldInvalid(o,n);break}if(i(s,e)){this.setFieldInvalid(o,n);break}}break}default:{if("function"!=typeof n.validator)return console.error(`Validator for custom rule for [${o}] field should be a function. This field will be always invalid.`),void this.setFieldInvalid(o,n);const e=n.validator(h,this.getCompatibleFields());if("boolean"!=typeof e&&"function"!=typeof e&&console.error(`Validator return value for [${o}] field should be boolean or function. It will be cast to boolean.`),"function"==typeof e){if(!c){this.fields[o].asyncCheckPending=!1;const i=e();return d(i)?i.then((e=>{e||this.setFieldInvalid(o,n)})).catch((()=>{this.setFieldInvalid(o,n)})):(console.error(`Validator function for custom rule for [${o}] field should return a Promise. This field will be always invalid.`),void this.setFieldInvalid(o,n))}this.fields[o].asyncCheckPending=!0}e||this.setFieldInvalid(o,n)}}var f}}validateField(e,i=!1){var t;const s=this.fields[e];s.isValid=!0;const l=[];return[...s.rules].reverse().forEach((t=>{const r=this.validateFieldRule(e,s.elem,t,i);d(r)&&l.push(r)})),s.isValid&&this.setFieldValid(e,null==(t=s.config)?void 0:t.successMessage),Promise.allSettled(l)}revalidateField(e){if("string"!=typeof e&&!u(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);return i&&this.fields[i]?new Promise((e=>{this.validateField(i,!0).finally((()=>{this.clearFieldStyle(i),this.clearFieldLabel(i),this.renderFieldError(i),e(!!this.fields[i].isValid)}))})):(console.error("Field not found. Check the field selector."),Promise.reject())}revalidateGroup(e){if("string"!=typeof e&&!u(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);return i&&this.groupFields[i]?new Promise((e=>{this.validateGroup(i).finally((()=>{this.clearFieldLabel(i),this.renderGroupError(i),e(!!this.groupFields[i].isValid)}))})):(console.error("Group not found. Check the group selector."),Promise.reject())}validateGroup(e){const i=this.groupFields[e],t=[];return[...i.rules].reverse().forEach((s=>{const l=this.validateGroupRule(e,i.elems,s);d(l)&&t.push(l)})),Promise.allSettled(t)}focusInvalidField(){for(const e in this.fields){const i=this.fields[e];if(!i.isValid){setTimeout((()=>i.elem.focus()),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise((i=>{const t=[];Object.keys(this.fields).forEach((e=>{const i=this.validateField(e);d(i)&&t.push(i)})),Object.keys(this.groupFields).forEach((e=>{const i=this.validateGroup(e);d(i)&&t.push(i)})),t.length?Promise.allSettled(t).then((()=>{this.afterSubmitValidation(e),i(!0)})):(this.afterSubmitValidation(e),i(!1))}))}revalidate(){return new Promise((e=>{this.validateHandler(void 0,!0).finally((()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)}))}))}validateHandler(e,i=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(i).finally((()=>{var i,t;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?null==(i=this.onSuccessCallback)||i.call(this,e):null==(t=this.onFailCallback)||t.call(this,this.getCompatibleFields(),this.groupFields)}))}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,i,t){i.addEventListener(e,t),this.eventListeners.push({type:e,elem:i,func:t})}removeListener(e,i,t){i.removeEventListener(e,t),this.eventListeners=this.eventListeners.filter((t=>t.type!==e||t.elem!==i))}addField(e,i,t){if("string"!=typeof e&&!u(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(s="string"==typeof e?this.form.querySelector(e):e,!s)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(i)||!i.length)throw Error("Rules argument should be an array and should contain at least 1 element.");i.forEach((e=>{if(!("rule"in e||"validator"in e||"plugin"in e))throw Error("Rules argument must contain at least one rule or validator property.");if(!(e.validator||e.plugin||e.rule&&Object.values(r).includes(e.rule)))throw Error(`Rule should be one of these types: ${Object.values(r).join(", ")}. Provided value: ${e.rule}`)}));const l=this.setKeyByFieldSelector(e);return this.fields[l]={elem:s,rules:i,isValid:void 0,config:t},this.setListeners(s),this.isSubmitted&&this.validate(),this}removeField(e){if("string"!=typeof e&&!u(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);if(!i||!this.fields[i])return console.error("Field not found. Check the field selector."),this;const t=this.getListenerType(this.fields[i].elem.type);return this.removeListener(t,this.fields[i].elem,this.handlerChange),this.clearErrors(),delete this.fields[i],this}removeGroup(e){if("string"!=typeof e)throw Error("Group selector is not valid. Please specify a string selector.");const i=this.getKeyByFieldSelector(e);return i&&this.groupFields[i]?(this.groupFields[i].elems.forEach((e=>{const i=this.getListenerType(e.type);this.removeListener(i,e,this.handlerChange)})),this.clearErrors(),delete this.groupFields[i],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(e,i,t,s){if("string"!=typeof e&&!u(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let l;if(l="string"==typeof e?this.form.querySelector(e):e,!l)throw Error("Group selector not found! Please check the group selector.");const r=l.querySelectorAll("input"),a=Array.from(r).filter((e=>{const i=((e,i)=>{const t=[...i].reverse();for(let s=0,l=t.length;s<l;++s){const i=t[s];for(const t in e){const s=e[t];if(s.groupElem===i)return[t,s]}}return null})(this.groupFields,(e=>{let i=e;const t=[];for(;i;)t.unshift(i),i=i.parentNode;return t})(e));return!i||i[1].elems.find((i=>i!==e))})),n=this.setKeyByFieldSelector(e);return this.groupFields[n]={rules:[{rule:o.Required,errorMessage:i,successMessage:s}],groupElem:l,elems:a,isDirty:!1,isValid:void 0,config:t},r.forEach((e=>{this.setListeners(e)})),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const i=this.getListenerType(e.type);this.removeListener(i,e,this.handlerChange),this.addListener(i,e,this.handlerChange)}clearFieldLabel(e){var i,t;null==(i=this.errorLabels[e])||i.remove(),null==(t=this.successLabels[e])||t.remove()}clearFieldStyle(e){var i,t,s,l;const r=this.fields[e],o=(null==(i=r.config)?void 0:i.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach((e=>{r.elem.style[e]=""}));const a=(null==(t=r.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(a).forEach((e=>{r.elem.style[e]=""})),r.elem.classList.remove(...c((null==(s=r.config)?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...c((null==(l=r.config)?void 0:l.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,i;Object.keys(this.errorLabels).forEach((e=>this.errorLabels[e].remove())),Object.keys(this.successLabels).forEach((e=>this.successLabels[e].remove()));for(const t in this.fields)this.clearFieldStyle(t);for(const t in this.groupFields){const s=this.groupFields[t],l=(null==(e=s.config)?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(l).forEach((e=>{s.elems.forEach((i=>{var t;i.style[e]="",i.classList.remove(...c((null==(t=s.config)?void 0:t.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}))}));const r=(null==(i=s.config)?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(r).forEach((e=>{s.elems.forEach((i=>{var t;i.style[e]="",i.classList.remove(...c((null==(t=s.config)?void 0:t.successFieldCssClass)||this.globalConfig.successFieldCssClass))}))}))}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)e[i].setAttribute("data-just-validate-fallback-disabled",e[i].disabled?"true":"false"),e[i].setAttribute("disabled","disabled"),e[i].style.pointerEvents="none",e[i].style.webkitFilter="grayscale(100%)",e[i].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)"true"!==e[i].getAttribute("data-just-validate-fallback-disabled")&&e[i].removeAttribute("disabled"),e[i].style.pointerEvents="",e[i].style.webkitFilter="",e[i].style.filter=""}renderTooltip(e,i,t){var s;const{top:l,left:r,width:o,height:a}=e.getBoundingClientRect(),n=i.getBoundingClientRect(),d=t||(null==(s=this.globalConfig.tooltip)?void 0:s.position);switch(d){case"left":i.style.top=l+a/2-n.height/2+"px",i.style.left=r-n.width-5+"px";break;case"top":i.style.top=l-n.height-5+"px",i.style.left=r+o/2-n.width/2+"px";break;case"right":i.style.top=l+a/2-n.height/2+"px",i.style.left=`${r+o+5}px`;break;case"bottom":i.style.top=`${l+a+5}px`,i.style.left=r+o/2-n.width/2+"px"}i.dataset.direction=d;return{refresh:()=>{this.renderTooltip(e,i,t)}}}createErrorLabelElem(e,i,t){const s=document.createElement("div");s.innerHTML=i;const l=this.isTooltip()?null==t?void 0:t.errorLabelStyle:(null==t?void 0:t.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(s.style,l),s.classList.add(...c((null==t?void 0:t.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(s.dataset.tooltip="true"),this.globalConfig.testingMode&&(s.dataset.testId=`error-label-${e}`),this.errorLabels[e]=s,s}createSuccessLabelElem(e,i,t){if(void 0===i)return null;const s=document.createElement("div");s.innerHTML=i;const l=(null==t?void 0:t.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(s.style,l),s.classList.add(...c((null==t?void 0:t.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(s.dataset.testId=`success-label-${e}`),this.successLabels[e]=s,s}renderErrorsContainer(e,i){const t=i||this.globalConfig.errorsContainer;if("string"==typeof t){const i=this.form.querySelector(t);if(i)return i.appendChild(e),!0;console.error(`Error container with ${t} selector not found. Errors will be rendered as usual`)}return t instanceof Element?(t.appendChild(e),!0):(void 0!==t&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,i,t,s){if(!s){if(this.renderErrorsContainer(i,t))return}e.appendChild(i)}renderFieldLabel(e,i,t,s){var l,r,o,a,n,d,c;if(!s){if(this.renderErrorsContainer(i,t))return}if("checkbox"===e.type||"radio"===e.type){const t=document.querySelector(`label[for="${e.getAttribute("id")}"]`);"label"===(null==(r=null==(l=e.parentElement)?void 0:l.tagName)?void 0:r.toLowerCase())?null==(a=null==(o=e.parentElement)?void 0:o.parentElement)||a.appendChild(i):t?null==(n=t.parentElement)||n.appendChild(i):null==(d=e.parentElement)||d.appendChild(i)}else null==(c=e.parentElement)||c.appendChild(i)}showLabels(e,i){Object.keys(e).forEach(((t,s)=>{const l=e[t],r=this.getKeyByFieldSelector(t);if(!r||!this.fields[r])return void console.error("Field not found. Check the field selector.");const o=this.fields[r];o.isValid=!i,this.clearFieldStyle(r),this.clearFieldLabel(r),this.renderFieldError(r,l),0===s&&this.globalConfig.focusInvalidField&&setTimeout((()=>o.elem.focus()),0)}))}showErrors(e){if("object"!=typeof e)throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if("object"!=typeof e)throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,i){var t,s,l,r,o,a;const n=this.fields[e];if(void 0===n.isValid)return;if(n.isValid){if(!n.asyncCheckPending){const l=this.createSuccessLabelElem(e,void 0!==i?i:n.successMessage,n.config);l&&this.renderFieldLabel(n.elem,l,null==(t=n.config)?void 0:t.errorsContainer,!0),n.elem.classList.add(...c((null==(s=n.config)?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}this.isValid=!1,n.elem.classList.add(...c((null==(l=n.config)?void 0:l.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const d=this.createErrorLabelElem(e,void 0!==i?i:n.errorMessage,n.config);this.renderFieldLabel(n.elem,d,null==(r=n.config)?void 0:r.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(n.elem,d,null==(a=null==(o=n.config)?void 0:o.tooltip)?void 0:a.position))}renderGroupError(e){var i,t,s,l;const r=this.groupFields[e];if(void 0===r.isValid)return;if(r.isValid){r.elems.forEach((e=>{var i,t;Object.assign(e.style,(null==(i=r.config)?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle),e.classList.add(...c((null==(t=r.config)?void 0:t.successFieldCssClass)||this.globalConfig.successFieldCssClass))}));const t=this.createSuccessLabelElem(e,r.successMessage,r.config);return void(t&&this.renderGroupLabel(r.groupElem,t,null==(i=r.config)?void 0:i.errorsContainer,!0))}this.isValid=!1,r.elems.forEach((e=>{var i,t;Object.assign(e.style,(null==(i=r.config)?void 0:i.errorFieldStyle)||this.globalConfig.errorFieldStyle),e.classList.add(...c((null==(t=r.config)?void 0:t.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}));const o=this.createErrorLabelElem(e,r.errorMessage,r.config);this.renderGroupLabel(r.groupElem,o,null==(t=r.config)?void 0:t.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(r.groupElem,o,null==(l=null==(s=r.config)?void 0:s.tooltip)?void 0:l.position))}renderErrors(e=!1){if(this.isSubmitted||e||this.globalConfig.validateBeforeSubmitting){this.clearErrors(),this.isValid=!0;for(const e in this.groupFields)this.renderGroupError(e);for(const e in this.fields)this.renderFieldError(e)}}destroy(){this.eventListeners.forEach((e=>{this.removeListener(e.type,e.elem,e.func)})),Object.keys(this.customStyleTags).forEach((e=>{this.customStyleTags[e].remove()})),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach((e=>{const i=this.getFieldSelectorByKey(e);i&&this.addField(i,[...this.fields[e].rules],this.fields[e].config)}))):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){"string"==typeof e||void 0===e?(this.currentLocale=e,this.isSubmitted&&this.validate()):console.error("Current locale should be a string")}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}}}));
;
/* const { forms } = document;

const checkPasswordsIdentity = (e, matchValue) => {
  const signupPswForms = e.currentTarget.querySelectorAll("[type='password']");

  if (signupPswForms.length > 1) {
    const signupPswFormsArr = Array.from(signupPswForms);

    signupPswForms.forEach((psw) => {
      const errLabels = psw
        .closest('.login-form__label')
        .querySelectorAll('.just-validate-error-label');
      if (errLabels.length > 1) {
        const remArr = Array.from(errLabels);
        remArr[0].remove();
      }
    });

    const psw = e.currentTarget.querySelector('.login-form__psw');
    const repeatPsw = e.currentTarget.querySelector(
      '.login-form__repeat-psw',
    );
    if (psw.value.length > 0 && psw.value === repeatPsw.value) {
      matchValue = true;
      signupPswFormsArr.forEach((pswrd) => {
        const closed = pswrd
          .closest('.login-form__label')
          .querySelector('.just-validate-error-label');
        if (closed) {
          closed.remove();
        }
      });
    } else if (psw.value.length > 0 && psw.value !== repeatPsw.value) {
      matchValue = false;
      const formLabel = e.target.closest('.login-form__label');
      if (
        e.target.type === 'password'
            && !formLabel.querySelector('.just-validate-error-label')
      ) {
        formLabel.insertAdjacentHTML(
          'beforeend',
          '<div class = "just-validate-error-label">Passwords must coincide!</div>',
        );
      }

      signupPswFormsArr.forEach((pswrd) => {
        if (pswrd.classList.contains('just-validate-success-field')) {
          pswrd.classList.remove('just-validate-success-field');
          pswrd.classList.add('just-validate-error-field');
        }
      });
    }
  }
};

const disableSendButton = (e) => {
  const matchTest = true;
  checkPasswordsIdentity(e, matchTest);
  let valTest = true;

  const reqInputs = e.currentTarget.querySelectorAll('[required]');
  const sendButton = e.currentTarget.querySelector("[type='submit']");

  const reqInputsArr = Array.from(reqInputs);
  reqInputsArr.forEach((input) => {
    if (!input.value) {
      valTest = false;
    }
  });

  const errTest = e.currentTarget.querySelectorAll(
    '.just-validate-error-field',
  );
  if (errTest.length === 0 && valTest && matchTest) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
};

[...forms].forEach((form) => {
  form.addEventListener('input', disableSendButton);
});

const resetAfterSubmit = (e) => {
  e.target.querySelector('[type="submit"]').disabled = true;
  e.target.reset();
};

const setSuccess = (event) => {
  const formData = new FormData(event.target);

  alert(`sent:
 ${[...formData]}`);

  // let xhr = new XMLHttpRequest();

  // xhr.onreadystatechange = () => {
  //    if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //          console.log("Отправлено");
  //       }
  //    }
  // };

  // xhr.open("POST", "mail.php", true);
  // xhr.send(formData);

  const reqInputs = document.querySelectorAll('[required]');
  const delInputs = Array.from(reqInputs);

  delInputs.forEach((input) => {
    if (input.classList.contains('just-validate-success-field')) {
      input.classList.remove('just-validate-success-field');
    }
  });

  resetAfterSubmit(event);
};

const loginValidate = new window.JustValidate('[name="loginform"]', {
  validateBeforeSubmitting: true,
});

loginValidate
  .addField('.login-form__uname', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter your name!',
    },
    {
      rule: 'customRegexp',
      value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
      errorMessage: 'Enter your name properly',
    },
  ])
  .addField('.login-form__psw', [
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'The password must contain at least 6 characters!',
    },

    {
      rule: 'customRegexp',
      value: /(?=.*[0-9])/,
      errorMessage: 'The password must contain at least one number!',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter password!',
    },
  ])
  .onSuccess((event) => {
    setSuccess(event);
  });

const signupValidate = new window.JustValidate('[name="signupform"]', {
  validateBeforeSubmitting: true,
});

signupValidate
  .addField('.login-form__email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'E-mail is required',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Enter correct E-mail',
    },
  ])
  .addField('.login-form__psw', [
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'The password must contain at least 6 characters!',
    },

    {
      rule: 'customRegexp',
      value: /(?=.*[0-9])/,
      errorMessage: 'The password must contain at least one number!',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter password!',
    },
  ])
  .addField('.login-form__repeat-psw', [
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'The password must contain at least 6 characters!',
    },

    {
      rule: 'customRegexp',
      value: /(?=.*[0-9])/,
      errorMessage: 'The password must contain at least one number!',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter password!',
    },
  ])
  .onSuccess((event) => {
    setSuccess(event);
  });

const subscribeValidate = new window.JustValidate('[name="subscribeform"]', {
  validateBeforeSubmitting: true,
});

subscribeValidate
  .addField('.subscribe__email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'E-mail is required',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Enter correct E-mail',
    },
  ])
  .onSuccess((event) => {
    setSuccess(event);
  });
 */

const subscribeForm = document.forms.subscribeform;
const subscribeInput = subscribeForm.subscribemail;
const mask = "hey";

// let contactFlag = false;

subscribeForm.addEventListener("input", () => {

  let value = subscribeInput.value;
  //  contactFlag = true;
   if (!value) {
      console.log("field is requred");
   }

   if (value === mask) {
    console.log('succsess')
   } else if (value) {
    console.log('make properly')
   }

});
;



