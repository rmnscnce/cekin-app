import{W as u,r as p,j as e,Y as x,a as g}from"./app-DAQtYqfF.js";import{G as f}from"./GuestLayout-DZ1bwlbw.js";import{I as o,a as m}from"./InputLabel-DIW_ceub.js";import{P as h}from"./PrimaryButton-BdjrBvP0.js";import{T as l}from"./TextInput-9hOSc5mT.js";import"./NavLink-CubXa9f9.js";function C(){const{data:a,setData:r,post:i,processing:n,errors:t,reset:d}=u({name:"",email:"",password:"",password_confirmation:""});p.useEffect(()=>()=>{d("password","password_confirmation")},[]);const c=s=>{s.preventDefault(),i(route("register"))};return e.jsxs(f,{children:[e.jsx(x,{title:"Register"}),e.jsx("div",{className:"py-24",children:e.jsx("div",{className:"max-w-lg mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{children:e.jsx("img",{src:"https://i.pinimg.com/736x/40/c1/a2/40c1a21f3aabc0f6626bce59cff2ca5e.jpg",alt:"https://ncas.ac.uk/app/uploads/2020/05/Climate-Weather-Blue-Clouds-1280px.jpg",className:"w-full h-40 object-cover"})}),e.jsxs("form",{onSubmit:c,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsx("div",{className:"max-w-lg mx-auto sm:px-2 lg:px-4  text-center font-extrabold",children:e.jsx("h3",{className:"text-white text-4xl mb-4",children:"Register"})}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",value:"Name"}),e.jsx(l,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(m,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(m,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(m,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(l,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(m,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(g,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e.jsx(h,{className:"ms-4",disabled:n,children:"Register"})]})]})]})})})]})}export{C as default};