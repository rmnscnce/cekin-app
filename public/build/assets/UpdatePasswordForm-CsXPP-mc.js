import{r as u,W as h,j as s}from"./app-DAQtYqfF.js";import{I as n,a as d}from"./InputLabel-DIW_ceub.js";import{P as g}from"./PrimaryButton-BdjrBvP0.js";import{T as c}from"./TextInput-9hOSc5mT.js";import{q as v}from"./transition-CNFocsZd.js";function b({className:m=""}){const p=u.useRef(),i=u.useRef(),{data:e,setData:a,errors:t,put:w,reset:o,processing:x,recentlySuccessful:f}=h({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:l=>{l.password&&(o("password","password_confirmation"),p.current.focus()),l.current_password&&(o("current_password"),i.current.focus())}})};return s.jsxs("section",{className:m,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(n,{htmlFor:"current_password",value:"Current Password"}),s.jsx(c,{id:"current_password",ref:i,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(d,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(n,{htmlFor:"password",value:"New Password"}),s.jsx(c,{id:"password",ref:p,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(c,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(g,{disabled:x,children:"Save"}),s.jsx(v,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Saved."})})]})]})]})}export{b as default};
