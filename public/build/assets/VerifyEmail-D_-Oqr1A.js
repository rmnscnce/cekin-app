import{W as o,j as e,Y as a,a as d}from"./app-DAQtYqfF.js";import{G as l}from"./GuestLayout-DZ1bwlbw.js";import{P as m}from"./PrimaryButton-BdjrBvP0.js";import"./NavLink-CubXa9f9.js";function g({status:t}){const{post:i,processing:s}=o({}),r=n=>{n.preventDefault(),i(route("verification.send"))};return e.jsxs(l,{children:[e.jsx(a,{title:"Email Verification"}),e.jsx("div",{className:"py-60",children:e.jsx("div",{className:"max-w-xl mx-auto sm:px-4 lg:px-6",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4 sm:p-8 ",children:[e.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:r,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(m,{disabled:s,children:"Resend Verification Email"}),e.jsx(d,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Log Out"})]})})]})})})]})}export{g as default};
