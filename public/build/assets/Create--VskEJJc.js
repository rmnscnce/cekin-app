import{W as g,j as e,Y as u,a as p}from"./app-DAQtYqfF.js";import{I as r,a as l}from"./InputLabel-DIW_ceub.js";import{S as j}from"./TextAreaInput-BAEyQ8Xy.js";import{T as n}from"./TextInput-9hOSc5mT.js";import{A as w}from"./AuthenticatedLayout-CZ0-4HmS.js";import"./NavLink-CubXa9f9.js";import"./transition-CNFocsZd.js";function S({auth:m,weatherCities:o,users:v}){const{data:i,setData:s,post:c,errors:t,reset:y}=g({image:"",name:"",city_name:"",assigned_user_id:m.user.id}),d=a=>{s("city_name",a.target.value)},h=a=>{a.preventDefault(),c(route("weather.store"))};return e.jsxs(w,{user:m.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New Weather Data"})}),children:[e.jsx(u,{title:"Create Weather Data"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{children:e.jsx("img",{src:"https://www.wallpaperflare.com/static/369/332/935/anime-girls-clear-blue-sky-wallpaper.jpg",alt:"",className:"w-full h-48 object-cover"})}),e.jsxs("form",{onSubmit:h,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"weather_image_path",value:"Weather Image"}),e.jsx(n,{id:"weather_image_path",type:"file",name:"image",className:"mt-1 block w-full",onChange:a=>s("image",a.target.files[0])}),e.jsx(l,{message:t.image,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"weather_name",value:"Weather Name"}),e.jsx(n,{id:"weather_name",type:"text",name:"name",value:i.name,className:"mt-1 block w-full",isFocused:!0,onChange:a=>s("name",a.target.value)}),e.jsx(l,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"weather_city_name",value:"City Name"}),e.jsxs(j,{name:"city_name",id:"weather_city_name",className:"mt-1 block w-full",onChange:d,value:i.city_name,children:[e.jsx("option",{value:"",children:"Select City"}),o.map((a,x)=>e.jsx("option",{value:a,children:a},x))]}),t&&e.jsx(l,{message:t.city_name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(p,{href:route("weather.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Submit"})]})]})]})})})]})}export{S as default};