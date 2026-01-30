import{j as p}from"./jsx-runtime-BkGTrbEv.js";import"./iframe-Pcugj053.js";import"./preload-helper-PPVm8Dsz.js";const g="inline-flex items-center justify-center gap-2 rounded-full font-bold leading-none transition select-none",y={primary:"bg-pink-400 text-white hover:bg-pink-500 active:bg-pink-600",secondary:"border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100"},f={small:"h-8 px-4 text-xs",medium:"h-10 px-5 text-sm",large:"h-12 px-6 text-base"};function n({color:l="primary",size:i="medium",type:c="button",className:m="",children:d,...u}){return p.jsx("button",{type:c,className:`${g} ${y[l]} ${f[i]} ${m}`,...u,children:d})}n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},type:{defaultValue:{value:'"button"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const{fn:h}=__STORYBOOK_MODULE_TEST__,b={title:"UI/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:h()}},e="ログイン",r={args:{color:"primary",children:e}},a={args:{color:"secondary",children:e}},s={args:{size:"large",children:e}},o={args:{children:e}},t={args:{size:"small",children:e}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    children: LABEL
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    children: LABEL
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: LABEL
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: LABEL
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: LABEL
  }
}`,...t.parameters?.docs?.source}}};const v=["ColorPrimary","ColorSecondary","SizeLarge","SizeMedium","SizeSmall"];export{r as ColorPrimary,a as ColorSecondary,s as SizeLarge,o as SizeMedium,t as SizeSmall,v as __namedExportsOrder,b as default};
